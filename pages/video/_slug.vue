<template>
    
       <div class="bg-gray-900">
      
<div class="max-w-5xl pt-20 pb-16 mx-auto ">



  <div class="flex flex-col flex-wrap p-4 m-4 bg-gray-800 rounded-2xl ">
          <div class="self-center pt-8 md:place-self-end">
              <!-- <a :href="speedlify.urlwebsite"> -->
                <!-- <img class="w-32 h-32 p-4 border-4 border-white rounded-full -mt-28 bg-gray-50 " :alt="speedlify.naam" :src="speedlify.logourl"/> -->
                  <!-- <div class="flex w-32 h-32 bg-contain rounded-full -mt-28 bg-red-50">
                               <img class="justify-center block m-auto align-middle"  style=" width:100px;"  :alt="speedlify.naam" :src="speedlify.logourl"/>
                            </div> -->
              <!-- </a> -->
          </div>
         
         
          <h1 class="block mt-8 text-3xl text-left text-gray-100 md:-mt-8 myheading">
            {{ video.videonaam }}
          </h1> 
          <div class="text-sm ">
             {{ video.door }}
          </div>


    <!-- <div class="flex flex-col py-4 text-xl text-gray-200 md:flex-row"> -->


      




      
 <lite-youtube
              :videoid="video.youtubeurl"
              :playlabel="video.videonaam"
                class="w-full mx-auto mt-8"
              params="controls=1&modestbranding=2&rel=1&enablejsapi=1"
            />
 
        <div class="p-8 prose-xl text-gray-50 ">
            {{ video.omschrijvinglang }}
        </div>
    <!-- </div> -->
 

  <!-- <img class="z-50 w-4/6 mx-auto -mb-10 border border-white border-opacity-50 rounded-lg shadow-2xl " :alt="speedlify.alttekst" :src="'/dashboard/' + speedlify.image"/> -->



  <!-- <div class="pt-8 pb-8 pl-8 text-xl rounded-lg bg-gray-50">
    <div class="pt-8 mx-auto text-center">
      <a class="underline" target="_blank" :href="speedlify.url">    {{ speedlify.urldescription }} </a>
    </div>
  </div> -->

<!-- {{ speedlify.url }} -->
</div>

           <!-- {{ video.videonaam }}

  <pre>
 
    {{ video }}

</pre>   -->

</div>
                        <div class="flex flex-col justify-around w-full p-0 py-10 mx-auto md:flex-row">

                                    <NuxtLink v-if="prev" :to="{ name: 'video-slug', params: { slug: prev.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 left rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                      <p class="mb-2 text-sm font-bold align-middle">👈 Vorige video</p> 
                                            {{ prev.videonaam }}
                                      </div>
                                    </NuxtLink>
                                
                                      <NuxtLink v-if="next" :to="{ name: 'video-slug', params: { slug: next.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 right rounded-xl">
                                      <div class="p-4 text-xl text-center ">
                                        <p class="mb-2 text-sm font-bold align-middle">Volgende video 👉</p> 
                                            {{ next.videonaam }}
                                      </div>
                                      </NuxtLink>
                        </div>





    </div>

</template>

<script>
export default {
     async asyncData({ $content, params }) {
    // fetch our article here
    const video = await $content("video", params.slug).fetch();
    const [prev, next] = await $content('video')
      .only(['title', 'slug','videonaam'])
    //   .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      video,
      prev,
      next
    }

  },

    head() {
    return {
      title: this.video.seotitle,
      meta: [
        { hid: 'description', name: 'description', content: this.video.metadescription },
        // Open Graph
        // { hid: 'og:url', property: 'og:url', content: `https://snelste.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath }, 
        { hid: 'og:title', property: 'og:title', content: this.video.seotitle },
        { hid: 'og:description', property: 'og:description', content: this.video.metadescription },
        // OG image = default uit config
        
        // Twitter Card --> img komt uit config
        { hid: 'twitter:url', property: 'twitter:url', content: this.$config.baseURL + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.video.seotitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.video.metadescription }
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