<template>
    <div class="bg-gray-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>

 
<div class="flex flex-col flex-wrap content-center justify-center max-w-5xl pb-16 mx-auto text-center md:flex-row">

      <div v-for="video in videos" :key="video.slug" class="p-2 ">
        
            <div class="max-w-xs mb-5 bg-white border border-gray-200 rounded-lg shadow-md ">

            <!-- <img class="rounded-t-lg" :src="'/dashboard/' + video.image"/> -->
 <!-- params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1" -->
            <lite-youtube
              :videoid="video.youtubeurl"
              :playlabel="video.videonaam"
                class="w-80"
                params="controls=1&modestbranding=2&rel=0&enablejsapi=1"
            />

              <Nuxt-Link :to="'/video/' + video.slug" >
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{video.videonaam}}
              </div>
              </Nuxt-link>
            
            </div>
     </div>

</div>

<!-- <pre>
    {{ tools }}
</pre> -->


  </div>
</template>

<script>
export default {
   data() {
      return {
        title: "Debbie's videos from conference talks",
        description:
          'Published videos from conferences around the world both in house and virtual'
      }
    },

 async asyncData({ $content, params }) {
    // fetch our article here
    const videos = await $content("video", params.slug)
    // .sortBy('date', 'desc')
    .fetch();

    return { videos };
  },

    head() {
    return {
     
      meta: [
        { hid: 'description', name: 'description', content: this.$config.videopageSeoTitle },
        // Open Graph
      
        { hid:      "og:title",         property: "og:title",             content: this.$config.videopageSeoTitle },
        { hid:      "og:description",   property: "og:description",       content: this.$config.videopageMetaDescription },
        { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + this.$route.fullPath },

        // Twitter Card
        { hid: 'twitter:title',         name: 'twitter:title',        content: this.$config.videopageSeoTitle },
        { hid: 'twitter:description',   name: 'twitter:description',  content: this.$config.videopageMetaDescription },
        { hid: 'twitter:url',           property: 'twitter:url',      content: this.$config.baseURL + this.$route.fullPath },
        // { hid:  "twitter:image",        name: "twitter:image",        content: "kl",}
       ],
      link: [
        { hid: "canonical", rel: "canonical", href: this.$config.baseURL + this.$route.fullPath },
    ]
    }
  }


}
</script>

<style>

</style>