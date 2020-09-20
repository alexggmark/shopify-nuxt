import path from 'path'
import fs from 'fs'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  server: {
    https: isDev ? {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.cert'))
    } : {}
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/apollo.js'
  ],

  // Apollo configuration for GraphQL endpoints
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000'
      },
      shopify: '~/plugins/shopify/client.js',
      test: {
        httpEndpoint: 'https://countries-274616.ew.r.appspot.com/'
      }
    },
    errorPolicy: 'ignore',
    includeNodeModules: true
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/apollo'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },

  env: {
    STORE_NAME: process.env.STORE_NAME,
    STORE_ACCESS_TOKEN: process.env.STORE_ACCESS_TOKEN,
    STORE_API_VERSION: process.env.STORE_API_VERSION
  }
}
