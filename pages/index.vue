<template>
  <div>


<div class="z-0 block w-full p-8 bg-indigo-900 md:p-16 header">



    <div class="w-full pt-40 text-center text-white"  >
      <h1 class="max-w-2xl mx-auto text-5xl font-bold text-center myheading">
        Monitor website performance over tijd
      </h1>
      
      <p class="max-w-3xl pt-4 mx-auto text-2xl text-gray-400">
          Krijg geautomatiseerd inzicht in de Web Vitals en andere metrics. Benchmark je eigen website of die van je concurrenten.
            <!-- Zonder Lighthouse op te starten. -->
      </p>
      

      <div class="flex flex-row justify-center max-w-3xl pt-4 mx-auto text-2xl text-gray-400">
          <div class="m-2"> 
             <Nuxt-link to="/blog/zelf-maken">
                  <button class="px-4 py-2 text-sm font-medium text-white transition bg-blue-600 border-0 rounded-md focus:outline-none focus:ring hover:bg-blue-700 active:bg-blue-700 focus:ring-blue-300" type="submit">
              Zelf maken   
                  </button>
             </Nuxt-link>

          </div>
          <div class="m-2"> 
                         <Nuxt-link to="/blog/laten-maken">
                <button class="px-4 py-2 text-sm font-medium text-blue-700 transition border border-blue-600 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300" type="submit"> 
                  Laten maken 
                </button>
                         </Nuxt-link>

           
          </div>
      </div>


      <!-- Snelste is 'dedicated to website performance', en maakt overzichtelijke dashboards op maat.  -->


    </div>
</div>
    <HomepageTheImage/>
    <HomepageDashboard/>
    <HomepageTheFeatures/>
    <HomepageVideo/>
    <HomepageCta/>
    <HomepageNieuws/>
    <HomepageTools/>
     <!-- <input v-model="message" type="text">

    <p class="text-gray-600 ">{{ message }}</p> -->
 
  </div>
</template>

<script> 


export default {


// data: {
//             message: 'Enter message'
//         },

   head() {
    return {
      title: this.$config.homepageSeoTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.$config.homepageMetaDescription },
        // Open Graph
        // { hid: 'og:url', property: 'og:url', content: `https://snelste.nl` + this.$route.fullPath },
        { hid: 'og:url', property: 'og:url', content: this.$config.baseURL + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath }, 
        { hid: 'og:title', property: 'og:title', content: this.$config.homepageSeoTitle },
        { hid: 'og:description', property: 'og:description', content: this.$config.homepageMetaDescription },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$config.homepageSeoTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$config.homepageMetaDescription }
      ],
      link: [
        // { hid: "canonical", rel: "canonical", href: this.$config.baseURL + this.$route.params.slug },
        { hid: "canonical", rel: "canonical", href: this.$config.baseURL + this.$route.fullPath },
    ]
    }
  }

}
</script>

<style>
 
 .header{
   /* background: url('~assets/header.png') ; */
   background: url('~assets/wave-haikei.svg') ;
   background-position: top;
   /* filter: grayscale(100%); */
   /* filter:  blur(10px); */
   background-size:cover;
   /* background-position: 0px 50px; */
   background-repeat: no-repeat;
   z-index: 0;
 }
/* .header:before {
  content: '';
  background: rgba(7, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
} */

</style>