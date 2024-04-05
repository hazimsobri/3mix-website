import sm from "./sm.json";
export default {
  target: 'static',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {hid:'og:url', name:'og:url', content:"https://www.anhsin.io"},
      {hid:'og:type', name:'og:type', content:"article"},
      {hid:'og:title', name:'og:title', content:"Anhsin Technology"},
      {hid:'og:description', name:'og:description', content:"Anhsin | Innovative AI Technology" },
      {hid:'og:image', name:'og:image', content:"logo.png" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
          src: "https://www.googletagmanager.com/gtag/js?id=G-3CG62BBZ25",
          async: true,
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/shared/pageTransition.vue',
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    cssPath: '~/assets/css/tailwind.css',
    config: {}
  },
  /*
  ** Plugins to load before mounting the App
  */


  plugins: [ 
    {
      src:"~/plugins/loco.js",
  
    },
    {
      src:"~/plugins/client.js", 
      mode:'client'
    },
    { src: '~/plugins/leni-scroll.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */



  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
    '@nuxtjs/google-fonts',
    'nuxt-font-loader',
    '@nuxt/image',
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: sm.apiEndpoint,
    modern: true,
    apiOptions:{
      routes:[
        {
          type: "home-page",
          path: "/",
        },
        {
          type: "page",
          path:"/:uid",
        },

      ]
    }
  },

  googleFonts: {
    preconnect: true,
    display: 'preconnect',
    families: {
      RobotoCondensed: {
        ital: [100]
      }
    },
    download: true,
    base64: true,
  },
  gsap: {
    extraPlugins: {
      scrollTo: false,
      scrollTrigger: true,
      cssRule: true,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      text: false,
      flip:true,
    }
  },
  image: {
    prismic: {}
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    ['vue-scrollto/nuxt', { duration: 300 }],
    ['cookie-universal-nuxt', { SameSite: 'Strict' }],
    ['nuxt-mail', {
      message: {
        to: 'vic.gnana@nestor.com.my',
      },
      smtp: {
        host: 'mail.nestor.com.my',
        port: 465,
        auth: {
          user: 'vic.gnana@nestor.com.my',
          pass: 'wsm0caoHJY~D'
        },
      },
    }],
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://172.104.181.127:1337/graphql', // or your Strapi GraphQL endpoint
      }
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://anhsin.io/',
    trailingSlash: true,
    gzip: true,
    exclude: ['/.git'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  fontLoader: {
    url: {
      local: '~/assets/fonts'
    },
    prefetch: true,
    preconnect: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [ "@prismicio/vue" ],
  }
}
