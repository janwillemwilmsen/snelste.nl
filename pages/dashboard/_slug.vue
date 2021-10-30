<template>
    
    <div class="bg-gray-900">
<!--       
    <PageTitle>
           {{ speedlify.naam }}
    </PageTitle>
     <PageSubTitle>
           {{ speedlify.seotitle }}
     </PageSubTitle> -->


<div class="max-w-5xl pt-20 pb-16 mx-auto ">
 
 
 
  <div class="flex flex-col flex-wrap p-4 m-4 bg-gray-800 rounded-2xl ">
          <div class="self-center pt-8 md:place-self-end">
              <a :href="speedlify.urlwebsite">
                <!-- <img class="w-32 h-32 p-4 border-4 border-white rounded-full -mt-28 bg-gray-50 " :alt="speedlify.naam" :src="speedlify.logourl"/> -->
                  <div class="flex w-32 h-32 bg-contain rounded-full -mt-28 bg-red-50">
                               <img class="justify-center block m-auto align-middle"  style=" width:100px;"  :alt="speedlify.naam" :src="speedlify.logourl"/>
                            </div>
              </a>
          </div>
         
         
          <h1 class="block mt-8 text-3xl text-left text-gray-100 md:-mt-8 myheading">
            {{ speedlify.naam }}
          </h1> 
  


    <!-- <div class="flex flex-col py-4 text-xl text-gray-200 md:flex-row"> -->


      


        <div class="p-8 prose-xl text-gray-50 ">
            {{ speedlify.omschrijving }}
        </div>

      



    <!-- </div> -->
 

  <img class="z-50 w-4/6 mx-auto -mb-10 border border-white border-opacity-50 rounded-lg shadow-2xl " :alt="speedlify.alttekst" :src="'/dashboard/' + speedlify.image"/>



  <div class="pt-8 pb-8 pl-8 text-xl rounded-lg bg-gray-50">
    <div class="pt-8 mx-auto text-center">
      <a class="underline" target="_blank" :href="speedlify.url">    {{ speedlify.urldescription }} </a>
    </div>
  </div>

<!-- {{ speedlify.url }} -->
</div>
</div>



<!-- <pre class="text-gray-200 ">
 
    {{ speedlify }}


    "slug": "eon",
  "id": "1",
  "naam": "E.ON Dashboard",
  "metadescription": "meta-1",
  "seotitle": "seo-1",
  "url": "https://eon-speedlify.vercel.app/",
  "omschrijving": "omschrijf-1",
  "image": "eon.png",
  "logourl": "https://www.essent.nl/dist/essent/browser/assets/logo.svg",
  "dir": "/dashboard",
  "path": "/dashboard/eon",
  "extension": ".json",
  "createdAt": "2021-10-14T18:26:03.713Z",
  "updatedAt": "2021-10-20T19:43:02.350Z"

</pre> -->
                        <div class="flex flex-col justify-around w-full p-0 py-16 mx-auto md:flex-row">
                                      <!-- DIT IS DE FOLDER / DIRECTORY naam uhhh -->
                                    <NuxtLink v-if="prev" :to="{ name: 'dashboard-slug', params: { slug: prev.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 left rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                      <p class="mb-2 text-sm font-bold align-middle">👈 Vorige</p> 
                                            {{ prev.tool }}
                                              {{ prev.naam }}
                                      </div>
                                    </NuxtLink>
                                
                                      <NuxtLink v-if="next" :to="{ name: 'dashboard-slug', params: { slug: next.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 right rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                        <p class="mb-2 text-sm font-bold align-middle">Volgende 👉</p> 
                                            {{ next.naam }}
                                            
                                      </div>
                                      </NuxtLink>
                        </div>
    </div>

</template>

<script>
export default {
     async asyncData({ $content, params }) {
    // fetch our article here
    const speedlify = await $content("dashboard", params.slug).fetch();
    const [prev, next] = await $content('dashboard')
      .only(['title', 'slug', 'naam'])
      // .only(['slug'])
    //   .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      speedlify,
      prev,
      next
    }

  },

    head() {
    return {
      title: this.speedlify.seotitle,
      meta: [
        { hid: 'description', name: 'description', content: this.speedlify.metadescription },
        // Open Graph
        // { hid: 'og:url', property: 'og:url', content: `https://snelste.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath }, 
        { hid: 'og:title', property: 'og:title', content: this.speedlify.seotitle },
        { hid: 'og:description', property: 'og:description', content: this.speedlify.metadescription },
        // OG image = default uit config
        
        // Twitter Card --> img komt uit config
        { hid: 'twitter:url', property: 'twitter:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.speedlify.seotitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.speedlify.metadescription }
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

</style>