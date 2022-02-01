import axios from 'axios'

export default {
  server: {
    port: 9999
  },
  ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Serendip | 福井のタトゥースタジオSerendip',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '福井市のタトゥースタジオ「Serendip」のホームページです。' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Serendip | 福井のタトゥースタジオSerendip' },
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
    'nuxt-microcms-module'
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
    '@nuxtjs/sitemap',
    "@nuxtjs/axios",
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

  // sitemap
  sitemap: {
    hostname: 'https://www.tattoo-studio-serendip.com/'
  },

  // microCMS
  microcms: {
    options: {
      serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
      apiKey: process.env.MICRO_CMS_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // router
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/news/page/:p',
        component: resolve(__dirname, 'pages/news/index.vue'),
        name: 'news-page',
      })
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: false,
      compact: false
    },
    extend (config, ctx) {
      config.node = {
        fs: "empty"
      },
      config.externals = {
        fsevents: "require('fsevents')"
      }
    }
  },

  generate: {
    async routes() {
      const limit = 6
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

      // NEWS一覧のページング
      const pages = await axios
        .get(`https://tattoostudioserendip.microcms.io/api/v1/blog?limit=0`, {
          headers: { 'X-MICROCMS-API-KEY': process.env.MICRO_CMS_API_KEY },
        })
        .then((res) =>
          range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
            route: `/news/page/${p}`,
          }))
      )
      const news = await axios
        .get('https://tattoostudioserendip.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-MICROCMS-API-KEY': process.env.MICRO_CMS_API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/news/${content.id}`,
            feed: content
          }))
      )
      return pages.concat(news)
    }
  },

  publicRuntimeConfig: {
    // For Instagram
    targetUser: process.env.TARGET_USER,
  },

  privateRuntimeConfig: {
    // For Instagram
    targetUser: process.env.TARGET_USER,
    instagramBusinessId: process.env.INSTAGRAM_BUSINESS_ID,
    accessToken: process.env.ACCESS_TOKEN
  }
}
