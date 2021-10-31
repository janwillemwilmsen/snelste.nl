import getRoutes from "./scripts/getRoutes";


// import getSiteMeta from "./scripts/getSiteMeta";

// const meta = getSiteMeta();

// import { defineNuxtConfig } from '@nuxt/bridge'

// export default defineNuxtConfig({
  export default {
  // bridge: false, // Temporarily disable bridge integration

  components: true,

  target: 'static',

  // mode: 'universal',
  /*
  ** Headers of the page
  */
  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL || 'https://snelsteeeee.nl'
    // baseURL: process.env.NODE_ENV === 'production' ? 'https://nuxtjs.org' : 'https://dev.nuxtjs.org'
    baseURL: process.env.NODE_ENV === 'production' ? 'https://snelste.nl' : 'http://localhost',
    
    homepageSeoTitle: 'Heyyyyy',
    homepageMetaDescription: 'Hallllooooo',

    videopageSeoTitle: 'Videos over website performance',
    videopageMetaDescription: 'Een verzameling van videos over website performance en website optimalisatie. Bekijk ze nu.',

    toolspageSeoTitle: 'Website performance tools',
    toolspageMetaDescription: 'Website performance en website optimalisatie tools. Bekijk ze nu.',

    speedlifypageSeoTitle: 'Dashboard website performance',
    speedlifypageMetaDescription: 'Website performance dashboard. Bekijk ze nu.',
  },


  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs:    {lang: "en-GB" },
    meta: [
      // ...meta,
      { charset:  "utf-8" },
      { name:     "HandheldFriendly", content: "True" },
      { name:     "viewport",         content: "width=device-width, initial-scale=1" },
      
      { hid:      "description",      name:     "description",          content: "Articles focused on the beautiful art of landscape painting@Config.", },
      
      { hid:      "og:title",         property: "og:title",             content: "My Amazing Blog on The Joy of Painting", },
      { hid:      "og:description",   property: "og:description",       content: "Articles focused on the beautiful art of landscape painting." },
      { hid:      "og:url",           property: "og:url",               content: "https://snelste.nl", },
      { hid:      "og:image",         property: "og:image",             content: "/a-lovely-image.png" },
      { property: "og:site_name",                                       content: "BobRoss@Config" },
      { hid:      "og:type",          property: "og:type",              content: "website" },
      { property: "og:image:width",   content: "740" },
      { property: "og:image:height",  content: "300" },
      
      { hid:      "twitter:title",        name: "twitter:title",        content: "",},
      { hid:      "twitter:description",  name: "twitter:description",  content: "kl",},
      { hid:      "twitter:url",          name: "twitter:url",          content: "kl",},
      { hid:      "twitter:image",        name: "twitter:image",        content: "kl",},
      { name:     "twitter:site",     content: "@bobrossConfig" },
      { name:     "twitter:card",     content: "summary_large_image" },
     
     
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    
      // { property: "og:site_name", content: "I Love Painting" },
      // { hid: "og:type", property: "og:type", content: "website" },
      // { hid: "og:url",  property: "og:url",  content: process.env.baseURL },
      // { hid: "og:title", property: "og:title", content: "My Amazing Blog on The Joy of Painting" },
      // { hid: "og:description", property: "og:description", content: "Articles focused on the beautiful art of landscape painting." },
      // { hid: "og:image", property: "og:image", content: "/a-lovely-image.png" },
      // { hid: "twitter:url", name: "twitter:url", content: process.env.baseURL, },
      // { hid: "twitter:title", name: "twitter:title", content: "My Amazing Blog on The Joy of Painting", },
      // { hid: "twitter:description", name: "twitter:description", content: "Articles focused on the beautiful art of landscape painting.", },
      // { hid: "twitter:image", name: "twitter:image", content: "/a-loveley-image.png", },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: "canonical", rel: "canonical", href: process.env.BASE_URL },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
              '~/scripts/youtube.client.js',
              '~/scripts/vue-horizontal.js',
            ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-fonts', { /* module options */ }],
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    // '@/scripts/getRoutes',
  ],
  /*
  ** Nuxt.js modules
  */

  // 
  pwa: {
    icon: {
      /* icon options */
      fileName: 'icon2.png',
    },
    manifest: {
      name: 'Snelste.nl - webperformance',
      useWebmanifestExtension: true,
      theme_color: '#d8479b',
      lang: 'nl',
    }
  },





  googleFonts: {
    families: {
      'Varela+Round': true
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100]
      },
      display: 'swap',
      preconnect: true,
    },
  


  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    // async ready () {
    //   const { $content } = require('@nuxt/content')
    //   const files = await $content().only(['slug']).fetch()
    //   console.log(files)
    // },
    // exclude: [
    //   /^\/scrape/ // path starts with /admin
    // ]
  },

  sitemap: {
  //   exclude: [
  //     '*/scrape/*',
  //     '/scrape',
  //     '/scrape/',
  //     '/bloglist1/',
  //     '/bloglist2/',
  //     '/bloglist3/',
  //     '/bloglist4/',
  //     '/bloglist5/',
  //     'https://snelste.nl/scrape/bloglist1',
  //     'https://snelste.nl/scrape/bloglist2',
  //     'https://snelste.nl/scrape/bloglist1/',
  //     'https://snelste.nl/scrape/bloglist2/',

  //  ],
    // 3 regels hier oder Hoort bij getRoutes.js uitgezet omdat alle scraped urls ook in de sitemap komen.
    routes() {
      return getRoutes();
    },




    // Geeft error met build 'hostname is mandatory in config'
    // hostname: process.env.BASE_URL,
    // hostname: process.env.baseURL,
    hostname: 'https://snelste.nl',
    // gzip: true,
   
   

  
   
  },
}