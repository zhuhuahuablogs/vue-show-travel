const webpack = require('webpack');
const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-temp',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/main.less', lang: 'less' },
    // { src: 'iview/dist/styles/iview.css'}
  ],
  plugins: [
    { src: '~plugins/flexible.js', ssr: false },
    { src: '~plugins/iview.js', ssr: true },
    { src: '~plugins/axiosRequest.js', ssr: true }
  ],
  loading: './components/loading.vue',
  cache: true,
  build: {
    vendor: ['axios','iview','jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ]
  }
}
