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
    baseURL: process.env.NODE_ENV === 'production' ? 'https://snelste.nl' : 'http://localhost:3000',
    // baseDir: process.env.BASE_DIR || '/',
    
    homepageSeoTitle: 'Heyyyyy',
    homepageMetaDescription: 'Hallllooooo',

    videopageSeoTitle: 'Videos over website performance',
    videopageMetaDescription: 'Een verzameling van videos over website performance en website optimalisatie. Bekijk ze nu.',

    toolspageSeoTitle: 'Website performance tools',
    toolspageMetaDescription: 'Website performance en website optimalisatie tools. Bekijk ze nu.',

    speedlifypageSeoTitle: 'Dashboard website performance',
    speedlifypageMetaDescription: 'Website performance dashboard. Bekijk ze nu.',

    testpageSeoTitle: 'Test website',
    testpageMetaDescription: 'Test een url in meerdere scans...',
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
      { hid:      "og:image",         property: "og:image",             content: "https://news.vuejs.org/logo.png" },
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
      { rel: 'manifest',   href: '/manifest.webmanifest' },
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

  
  googleFonts: {
    families: {
      // 'Varela+Round': true
      'Inter':  [100, 300, 600, 800, 900],
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
  
// PWA Manifest False werkt niet. Er wordt toch een manifest met Dynamische filename gebuild.
// in de static map staat manifest.jww.json - die is gekoppeld aan het 'Install PWA' script in ThePWA.vue(niet van toepassing in deze site, wel ikvergelijk)
// moet dus handmatig de gebuilde kopieren en in static map zetten... pfff....
  // 
  pwa: {
    workbox: {
      /* workbox options */
      workboxExtensions: ['plugins/import-custom-sw.client.js'], 
         },
    icon: {
      /* icon options */
      fileName: 'icon2.png',
    },
    manifest: {
      name: 'Snelste.nl - webperformance',
      useWebmanifestExtension: false,
      theme_color: '#d8479b',
      lang: 'nl',
    },
    meta: false
  },







  modules: [
    '@nuxtjs/gtm',
    'vue-social-sharing/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-cookie-control',
    'nuxt-password-protect'
  ],

// Hierboven "Nuxt PW protect en hieronder Router toegevoegd voor Password prtect"
passwordProtect: {
  enabled: false,
  formPath: '/password',
  password: 'hello-world',
  tokenSeed: 101010,
  queryString: '_pw',
  cookieName: '_password',
  cookie: {
    prefix: '',
    expires: 5
  },
  ignoredPaths: ['/public-page']
},
  router: {
    middleware: ['password-protect']
  },



  
  gtm: {
    enabled: false, /* see below -- uitgezet om tag niet op dev te triggeren */
    autoInit: false,
    debug: true,
    id: 'GTM-T5VM9W7',
    layer: 'dataLayer',
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
    respectDoNotTrack: true,
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    // variables: {},
    // crossOrigin: false,
    // noscript: false,
    // noscriptId: 'gtm-noscript',
    // noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  // GTM-T5VM9W7
  cookies: {
    barPosition: 'top-full',
    text: {
      barTitle: 'Cookies',
      barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
      acceptAll: 'Toestaan',
      declineAll: 'Blokkeer',
      manageCookies: 'Cookieinstellingen',
      unsaved: 'Je hebt niet opgeslagen instellingen',
      close: 'Sluit',
      save: 'Opslaan',
      necessary: 'Noodzakelijke cookies',
      optional: 'Optionele cookies',
      functional: 'Functionele cookies',
      blockedIframe: 'Om dit te zien moet je functionele cookies accepteren.',
      here: 'hier'
    },
    colors: {
      barTextColor: '#fff',
      barButtonBackground: '#fff',
      barBackground: '#000',
      barButtonColor: '#000',
      barButtonHoverColor: '#fff',
      barButtonHoverBackground: '#333',
      // barPosition: center,

      modalOverlay: '#000',
      modalTextColor: '#000',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      modalButtonHoverColor: '#fff',
      modalButtonBackground: '#000',
      modalButtonHoverBackground: '#333',
     
      controlButtonBackground: "#12957b",
      controlButtonHoverBackground: "#2e495e",
      controlButtonIconHoverColor: "#fff",
      controlButtonIconColor: "#fff",
     
      checkboxActiveBackground: "#2e495e",
      checkboxInactiveBackground: "#ede1e1",
      checkboxActiveCircleBackground: "#00c58e",
      checkboxInactiveCircleBackground: "#f44336",
      checkboxDisabledBackground: "#ddd",
      checkboxDisabledCircleBackground: "#fff"
    },


    necessary: [
      {
        name:  'Noodzakelijke cookies',
        description:  'Gebruikt om de cookiepermissie te onthouden.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Tagmanager',
        identifier: 'ga',
        description:  'Met Google Tagmanager beheren wij onze verschillende meetpixels. Waaronder Google Analytics en Clarity van Microsoft.',
        initialState: true,
        src:  'https://www.googletagmanager.com/gtm.js?id=GTM-T5VM9W7',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
       

        // AANGEPAST : https://gitlab.com/broj42/nuxt-cookie-control/-/issues/39
        accepted: () => window.$nuxt.$gtm.init('GTM-T5VM9W7'),
       
        // orgineel. uit docs:  
        // accepted: () =>{
        //   window.dataLayer = window.dataLayer || [];
        //   window.dataLayer.push({
        //     'gtm.start': new Date().getTime(),
        //     event: 'gtm.js'
        //   });
        // },

        // accepted: () => {
        //   window.dataLayer = window.dataLayer || [];
        //   function gtag() {
        //     dataLayer.push(arguments);
        //   }
        //   gtag("js", new Date());
        //   gtag("config", "GTM-PM4DL28");
        // },




      declined: () =>{
// decline start - om aantal gedeclined mensen te meten

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
});
gtag("set", "ads_data_redaction", true);

// decline end
        }
      }
    ]
  },

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