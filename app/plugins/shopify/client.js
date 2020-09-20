require('dotenv').config()

const config = {
  storeName: process.env.STORE_NAME,
  accessToken: process.env.STORE_ACCESS_TOKEN,
  apiVer: process.env.STORE_API_VERSION
}

export default () => {
  // console.log(`https://${config.storeName}.myshopify.com/api/${config.apiVer}/graphql.json`)
  return {
    httpEndpoint: `https://${config.storeName}.myshopify.com/api/${config.apiVer}/graphql.json`,
    httpLinkOptions: {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': config.accessToken
      }
    }
  }
}
