export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Serendip | Tattoo Studio Serendip',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '福井市のタトゥースタジオ「Serendip」のホームページです。' },
      { hid: 'keywords', name: 'keywords', content: '福井, tattoo, serendip, Serendip, タトゥー, タトゥースタジオ' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Serendip | Tattoo Studio Serendip' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.tattoo-studio-serendip.com' },
      { hid: 'og:title', property: 'og:title', content: 'Serendip | Tattoo Studio Serendip' },
      { hid: 'og:description', property: 'og:description', content: '福井市のタトゥースタジオ「Serendip」のホームページです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.tattoo-studio-serendip.com/_nuxt/img/3e13ed3.JPG' },

      // { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    // モジュールのオプション
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    '@nuxt/content'
  ],

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },

  fontawesome: {
    imports: [
      // fasを全部使う場合
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },

  // font
  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700']
    }
  },

  // nuxt-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
