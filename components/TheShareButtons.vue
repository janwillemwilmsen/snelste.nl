<template>
 <div class="flex flex-row justify-center sharebuttongroup ">

   <!-- Sharenetwork wordt de ahref -->
   <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.key"
    :style="{backgroundColor: network.color}"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    class="self-start m-2 border border-gray-800 rounded md:w-32 btn btn-labeled"
  >   

    <!-- 
      {{ sharing.url }}<br><br>
      {{ sharing.title }}<br><br> 
    -->
    <!-- :url="socialUrl" -->
 

    
    
      <span class="inline-block btn-label ">
         <div v-html="network.image" class="px-2 pt-2" />
       </span>
       <span class="hidden pt-2 text-sm align-top  md:inline-block btn-text md:visible"> {{ network.name }}   </span>
  </ShareNetwork>
</div>
<!-- 
<ShareNetwork
    network="facebook"
    :url="fbSocialUrl"
    title="metatekst"
    :description="metatekst"
    :quote="metatekst"
    hashtags="vuejs,vite"
  >
    Share on Facebook
</ShareNetwork> -->

</template>

<script>
// Twitter actually has its own meta tags for Twitter Cards, but if Twitter robots cannot find any, Twitter uses Open Graph tags instead
// twitter
// resolution of at least 280x150px and that the file size is not more than 1MB //  featured in your tweet to be no smaller than 300 x 157

// li
// Minimum image dimensions: 1200 (w) x 627 (h) pixels
// Recommended ratio: 1.91:1

// fb
//  if Facebook doesn’t find the og:title tag on your page, it uses the meta title instead.
// URL provided is not shown on Facebook newsfeed, only domain is visible.
// og
// OG image is 1200 pixels x 627 pixels (1.91/1 ratio)
// if image that is smaller than 400 pixels x 209 pixels, it will render as a much smaller thumbnail
// og:type This is how you describe the kind of object you are sharing: blog post, video, picture, or whatever
// og type if you don’t define a type, Facebook will read it as “website” by default.
// og descr og title 



// <meta property=“og:image” content=“http://example.com/picture.jpg ” />

// <meta property="og:image:width" content="1200" />

// <meta property="og:image:height" content="627" />

// import TwitterLogo from "~/assets/icons/twitter.svg";
// import FacebookLogo from "~/assets/icons/facebook.svg";
// import WhatsappLogo from "~/assets/icons/whatsapp.svg";

export default {
    // components: 
    //   { TwitterLogo, FacebookLogo, WhatsappLogo },
    
       
    data () {
    return {
      sharing: {
       url: 'https://snelste.nl' + this.$route.fullPath,
        title: this.$config.testpageMetaDescription,
        description: this.$config.testpageSeoTitle,
        quote: 'tips n trics',
        hashtags: 'seo, a11y',
        twitterUser: '' 
      },
      networks: [
        // { network: 'facebook', name: 'Facebook', icon: 'user-secret', color: '#1877f2' },
        // static map wordt niet uitgerend door Nuxt....daarom niet noemen in url....
        // { network: 'facebook', name: 'Facebook', icon: 'facebook', color: '#1877f2', image: `<img src="/icons/facebook.svg?data" width="24px" />`},
        // { network: 'twitter', name: 'Twitter', icon: 'twitter', color: '#1da1f2', image: `<img src="/icons/twitter.svg" width="24px" />`},
        // { network: 'whatsapp', name: 'Whatsapp', icon: 'whatsapp', color: '#25d366', image: `<img  src="/icons/whatsapp.svg" width="24px"  />`}
     
        { network: 'whatsapp', name: 'Whatsapp',  color: '#2563eb', image: `<img  src="/social/exp/whatsapp.svg" width="24px" style="background:white; border-radius:3px;"  alt="Deel dit op Whatsapp" />`},
        { network: 'facebook', name: 'Facebook',  color: '#2563eb', image: `<img src="/social/exp/facebook.svg?data" width="24px" style="background:white; border-radius:3px;" alt="Deel dit op Facebook" />`},
        { network: 'twitter', name: 'Twitter',  color: '#2563eb', image: `<img src="/social/exp/twitter.svg" width="24px" style="background:white; border-radius:3px;"  alt="Deel dit op Twitter" />`},
        { network: 'linkedin', name: 'LinkedIn',  color: '#2563eb', image: `<img  src="/social/exp/linkedin.svg" width="24px" style="background:white; border-radius:3px;"  alt="Deel dit op LinkedIn" />`}
              
          ]
    }
  },



computed: {
    // socialUrl: function () {
    //   return 'https://snelste.nl' + this.$route.fullPath
    // }
   
},

// created() {
//   console.log(this.sharing.url);
// }

// metatekst: function() {
//     return this.metaInfo
    
//   },
//   Stitle: function() {
//              return this.metaOmschrijving
//           }

//   } 


}

// document.getElementById("url").textContent = document.URL;

</script>

<style scoped>
/* 
.sharebuttongroup a {margin: 0 8px 8px 0; }
.sharebuttongroup svg {height: 20px;}  


.btn-label {position: relative;left: -12px;display: inline-block;padding: 6px 12px;background: rgba(0,0,0,0.15);border-radius: 3px 0 0 3px;border:0;}
.btn-labeled {padding-top: 0;padding-bottom: 0;color: rgb(255, 255, 255); }
.btn-text {color:#150e0e;} */
</style>


// https://www.facebook.com/sharer/sharer.php?
// u=https%3A%2F%2Fnews.vuejs.org%2Fissues%2F180
// &title=Say%20hi%20to%20Vite!%20A%20brand%20new%2C%20extremely%20fast%20development%20setup%20for%20Vue.
// &description=This%20week%2C%20I%E2%80%99d%20like%20to%20introduce%20you%20to%20%22Vite%22%2C%20which%20means%20%22Fast%22.%20It%E2%80%99s%20a%20brand%20new%20development%20setup%20created%20by%20Evan%20You.
// &quote=The%20hot%20reload%20is%20so%20fast%20it%27s%20near%20instant.%20-%20Evan%20You
// &hashtag=%23vuejs


// https://www.facebook.com/sharer/sharer.php?
// u=https%3A%2F%2Fsnelste.nl%2Ftest%3Fover%3Dwww.nu.nl
// &title=Hey%20maat%2C%20lees%20dit%20eens%3A
// &description=Dashboard%20website%20performance
// &quote=&hashtag=