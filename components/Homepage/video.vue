<template>
  <div class="py-16 text-center bg-gray-100">

        <h2 class="text-2xl font-bold text-gray-900 myheading">
            Meer weten over website performance?
        </h2>

<div class="flex flex-wrap content-center justify-center w-full pt-8 mx-auto">


    <div v-for="video of videos" :key="video.slug">
        <!-- <Nuxt-link :to="{ name: 'video-slug', params: { slug: video.slug } }">
          <div class="m-2 ">
              <div class="bg-gray-500 w-44 h-28">img</div>
              {{ video.videonaam }}
          </div>
        </Nuxt-link> -->

            <lite-youtube
              :videoid="video.youtubeurl"
              :playlabel="video.videonaam"
                class="m-4 w-72"
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
    
    <Nuxt-link to="/video" class="px-4 py-2 text-sm font-medium text-gray-600 transition border border-gray-600 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-gray-600 active:bg-blue-700 focus:ring-blue-300"> Bekijk alle videos </Nuxt-link>


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
    .limit(2)
    .fetch();
  }
}
</script>

<style>

</style>