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
  ],
  ui: {
    icons: ["heroicons", "lucide"],
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
    url: 'https://cavinmacwan.com',
    name: 'Cavin Macwan - Jetpack Compose, Flutter, Co-Founder',
    description: 'I\'m Cavin Macwan, your friendly neighborhood software, product engineer, and designer. I specialize in building mobile apps using Jetpack Compose, Flutter, and other mobile technologies.',
    defaultLocale: 'en',
    
  },
  runtimeConfig: {
    public: {
      gtag: {
        id: 'G-Q9P3KGT7EJ'
      }
    }
  }
});