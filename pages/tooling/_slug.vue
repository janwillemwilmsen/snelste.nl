<template>
    
   <div class="bg-gray-900">
     <div class="max-w-5xl pt-20 pb-16 mx-auto ">
        <!-- tool page : {{ tool.naam }} -->
        <div class="flex flex-col flex-wrap p-4 m-4 bg-gray-800 rounded-2xl ">

                <div class="self-center pt-8 md:place-self-end">
                      <!-- <a :href="tool.url" target="_blan"> -->
                            <div class="flex w-32 h-32 bg-contain rounded-full -mt-28 bg-red-50">
                               <img class="justify-center block m-auto align-middle"  style=" width:100px;"  :src="tool.logourl"/>
                            </div>
                      <!-- </a> -->
                      <!-- :alt="tool.naam" -->
                  <!-- :style="{background: `url(${tool.logourl})`}"  -->

                               
                  </div>
         
            
              <h1 class="block mt-8 text-3xl text-left text-gray-100 md:-mt-8 myheading">
                {{ tool.naam }}
              </h1> 
 
              <div class="p-8 prose-xl text-gray-50 ">
                  {{ tool.omschrijving }}



              </div>
 
              <img class="z-50 w-4/6 mx-auto -mb-10 border border-white border-opacity-50 rounded-lg shadow-2xl " :alt="tool.alttekst" :src="'/tooling/' + tool.image"/>
  
              <div class="pt-8 pb-8 pl-8 text-xl rounded-lg bg-gray-50">
                <div class="pt-8 mx-auto text-center">
                  <a class="underline" target="_blank" :href="tool.url">    {{ tool.url }} </a>
                </div>
              </div>




   </div>
<!-- <pre>
 
    {{ tool }}
  "slug": "speedcurve-com",
  "id": "1",
  "naam": "speedcurve.com",
  "metadescription": "meta1",
  "seotitle": "seo-1",
  "url": "https://www.speedcurve.com/",
  "omschrijving": "omschrijf1",
  "type": "betaald",
  "image": "speedcurve.com.png",
  "dir": "/tooling",
  "path": "/tooling/speedcurve-com",
  "extension": ".json",
  "createdAt": "2021-10-14T18:26:34.100Z",
  "updatedAt": "2021-10-17T19:17:24.094Z"
</pre> -->
                        <div class="flex flex-col justify-around w-full p-0 mx-auto my-20 md:flex-row">
                                      <!-- DIT IS DE FOLDER / DIRECTORY naam uhhh -->
                                    <NuxtLink v-if="prev" :to="{ name: 'tooling-slug', params: { slug: prev.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 left rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                      <p class="mb-2 text-sm font-bold align-middle">👈 Vorige</p> 
                                            {{ prev.tool }}
                                              {{ prev.naam }}
                                      </div>
                                    </NuxtLink>
                                
                                      <NuxtLink v-if="next" :to="{ name: 'tooling-slug', params: { slug: next.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 right rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                        <p class="mb-2 text-sm font-bold align-middle">Volgende 👉</p> 
                                            {{ next.naam }}
                                            
                                      </div>
                                      </NuxtLink>
                        </div>
 
    </div>
    </div>

</template>

<script>
export default {
     async asyncData({ $content, params }) {
    // fetch our article here
    const tool = await $content("tooling", params.slug).fetch();
    const [prev, next] = await $content('tooling')
      .only(['title', 'slug', 'naam'])
      // .only(['slug'])
    //   .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      tool,
      prev,
      next
    }

  },

    head() {
    return {
      title: this.tool.seotitle,
      meta: [
        { hid: 'description', name: 'description', content: this.tool.metadescription },
        // Open Graph
        // { hid: 'og:url', property: 'og:url', content: `https://snelste.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath }, 
        { hid: 'og:title', property: 'og:title', content: this.tool.seotitle },
        { hid: 'og:description', property: 'og:description', content: this.tool.metadescription },
        // OG image = default uit config
        
        // Twitter Card --> img komt uit config
        { hid: 'twitter:url', property: 'twitter:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.tool.seotitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.tool.metadescription }
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