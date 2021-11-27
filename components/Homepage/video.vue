<template>
  <div class="py-24 bg-gray-50">



       <div class="max-w-3xl px-4 mx-auto md:px-0">
          <div class="text-lg uppercase opacity-50 text-woodsmoke-600 mypara">Kennis</div>
        <h2 class="text-4xl font-bold text-gray-900 myheading">
            Meer weten over website performance?
        </h2>
      
        <p class="max-w-2xl py-4 mypara">
          We hebben een serie videos samengesteld over webperformance.<br>
          Van oudere videos over de werking van internet, browsers, servers en websites. Tot recente videos over de Web Vitals en hoe je die verbetert.
        </p>
     
<!-- <div class="flex flex-wrap content-center justify-center pt-8 mx-auto "> -->
<div class="flex flex-wrap content-center justify-center pt-8 mx-auto md:justify-self-start md:content-start">


    <div v-for="video of videos" :key="video.slug" class=" w-80">
        <!-- <Nuxt-link :to="{ name: 'video-slug', params: { slug: video.slug } }">
          <div class="m-2 ">
              <div class="bg-gray-500 w-44 h-28">img</div>
              {{ video.videonaam }}
          </div>
        </Nuxt-link> -->

            <lite-youtube
              :videoid="video.youtubeurl"
              :playlabel="video.videonaam"
                class=" w-72"
              params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
            />

              <Nuxt-Link :to="'/video/' + video.slug" >
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{video.videonaam}}
              </div>
              </Nuxt-link>


    </div>
</div>
    <br><br>
    
    <!-- <Nuxt-link to="/video" class="px-4 py-2 text-sm font-medium text-gray-600 underline transition duration-1000 rounded-md hover:no-underline focus:outline-none focus:ring hover:text-white hover:bg-gray-600 active:bg-blue-700 focus:ring-blue-300"> Bekijk alle videos </Nuxt-link> -->
<!-- border border-gray-600 -->

<div class="mypara">


  <div class="font-bold ">Nog meer weten?</div>
    Bekijk <Nuxt-link to="/video" class="underline">alle videos</Nuxt-link>,  lees het <Nuxt-link to="/nieuws" class="underline">actueel nieuws</Nuxt-link> of onderzoek  <Nuxt-link  class="underline" to="/tooling">website performance tooling</Nuxt-link>. 
</div>



 </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: []
    }
  },

  async fetch() {
    this.videos = await this.$content("video")
    // .limit(2)
    // .search('Over', 'Optimize')
    .where({ videonaam: { $in: ['Optimize for Core Web Vitals', 'video-naam-3'] } })
    .fetch();
  }
}
</script>

<style>

</style>