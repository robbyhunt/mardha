// Autometa Init
const autometa_options = {
  site: {
    name: "Mardha",
    twitter: ""
  },
  canonical_base: "https://robbyhunt.github.io/mardha"
};
// RSS Init
const feed_options = {
  canonical_base: "https://robbyhunt.github.io/mardha"
};

module.exports = {
  cache: false,
  markdown: {
    extractHeaders: ["h2", "h3", "h4"]
  },
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "apple-touch-icon", href: "/assets/favicon/icon-180x180.png" }
    ],
    ["link", { rel: "icon", href: "/assets/favicon/icon-512x512.png" }],
    ["meta", { name: "theme-color", content: "#2196f3" }]
  ],
  locales: {
    "/": {
      title: "Mardha",
      description: "Fantasy Setting for Roleplaying Games"
    }
  },

  // Theme Config
  themeConfig: {
    logo: "/assets/img/logo-aumyr-world.svg",
    docsDir: "docs",
    sidebar: "auto",
    locales: {
      "/": {
        repoLabel: "Contribute",
        nav: [
          { text: "Geography",
            items: [
              { text: "Cities", link: "/geography/cities/" },
              { text: "Continents",
                items: [
                  { text: "Lorien", link: "/geography/lorien/" },
                  { text: "Avestan", link: "/geography/avestan/" },
                  { text: "Unnamed", link: "/geography/unnamed/" },
                ],
              },
            ],
          },
          {
            text: "Society",
              items : [
                {text: "Race", link: "/society/race/"},
                {text: "Religion", link: "/society/religion/"},
              ]
          },
          {text: "Magic", link: "/magic/magic/"},
          {
            text: "Almanac",
            items: [
              { text: "Characters", link: "/almanac/characters/" },
              { text: "Creatures", link: "/almanac/creatures/" },
              { text: "Items", link: "/almanac/items/" },
            ]
          }
        ]
      }
    }
  },

  // Plugins
  plugins: [
    ["autometa", autometa_options],
    ["feed", feed_options],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "New content is available",
            buttonText: "Refresh"
          }
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "New content is available",
            buttonText: "Refresh"
          }
        }
      }
    ]["@vuepress/medium-zoom"],
    ["@vuepress/back-to-top"],
    [
      ("container",
      {
        type: "image",
        before: info => `<div class="image"><p class="title">${info}</p>`,
        after: "</div>"
      })
    ]
  ]
};
