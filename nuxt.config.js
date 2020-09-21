import colors from 'vuetify/es5/util/colors'
let development = process.env.NODE_ENV !== 'production'
import es from 'vuetify/src/locale/es.ts'

export default {
  mode: 'spa',
  server: {
    port: 3000, // default: 3000
    //host: '0.0.0.0' // default: localhost
  },  
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'vatuya',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        hid: 'keywords',
        name: 'keywords',
        content: 'abunda, ofertas, descuentos, cupones, comprar, online, ahorrar'
      },      
      {
        hid: 'description',
        name: 'description',
        content: 'Comprar con las mejores ofertas y Ahorra hasta un 70%.  Plataforma líder en Descuentos.  Ahorra dinero comprando en Abunda.uy'
      },
      {
        hid: 'ogdescription',
        name: 'og:description',
        content: 'Comprar con las mejores ofertas y Ahorra hasta un 70%.  Plataforma líder en Descuentos.  Ahorra dinero comprando en Abunda.uy'
      },
      {
        hid: 'ogtitle',
        name: 'og:title',
        content: 'Comprar con las mejores ofertas y Ahorra hasta un 70%.  Plataforma líder en Descuentos.  Ahorra dinero comprando en Abunda.uy'
      }
    ]
  },
/*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/extras.js',ssr: false},
    {src: '~/plugins/maps.js',ssr: false},
    {src: '~plugins/vue-awesome-swipper',ssr: false},
    {src: '~plugins/notify',ssr: false} 
  ],
  auth: {
    autoLogout: true,
    localStorage: false,
    watchLoggedIn: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login/token/', method: 'post', propertyName: 'access' },
          logout: false,
          user: { url: '/api/usuarios/loggedInUser/', method: 'get', propertyName: false },
          refresh: { url: '/api/login/token/refresh/', method: 'post' },
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/cuenta/login',
      logout: '/',
    }
  },   
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['nuxt-leaflet', { /* module options */ }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  axios: {
    baseURL: 'https://vatuya.com' 
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    icons: {
      iconfont: 'md',
      iconfont: 'fa',
    },  
    lang: {
      locales: {es},
      current: 'es',
    },  
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FF8C00',
          secundary: '#00bdb5', 
          accent: '#333333',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        console: true,
        fs: 'empty',
        net:'empty',
      }
    }
  }
}
