export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  mdc: {
    highlight: {
      langs: ['kotlin']
    }
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  site: {
    url: "https://cavinmacwan.com",
    name: "Cavin Macwan – Mobile App Developer | Compose, Flutter & Kotlin Expert",
    description:
      "Explore Jetpack Compose and Flutter insights with Cavin Macwan, Co-Founder of Meticha. Discover mobile app development tips and Kotlin snippets!",
    defaultLocale: "en",
  },

  sitemap: {
    urls: [
      {
        loc: "/favicon.ico",
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    ],
  },
  runtimeConfig: {
    public: {
      gtag: {
        id: "G-Q9P3KGT7EJ",
      },
    },
  },
});
