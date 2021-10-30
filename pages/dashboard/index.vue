<template>
    <div class="bg-gray-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>

   


<div class="flex flex-col flex-wrap justify-center max-w-5xl pb-16 mx-auto text-center md:flex-row">

      <div v-for="speed in speedlify" :key="speed.slug" class="p-2 ">
          <Nuxt-Link :to="'/dashboard/' + speed.slug" >
            <div class="max-w-xs mb-5 bg-white border border-gray-200 rounded-lg shadow-md ">

            <img class="rounded-t-lg" :src="'/dashboard/' + speed.image"/>
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{speed.naam}}
              </div>
            
            </div>
          </Nuxt-link>
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
        title: "Website performance tooling",
        description:
          'Published videos from conferences around the world both in house and virtual'
      }
    },
  

 async asyncData({ $content, params }) {
    // fetch our article here
    const speedlify = await $content("dashboard", params.slug)
    .limit(4)
    // .sortBy('date', 'desc')
    .fetch();

    return { speedlify };
  },

    head() {
    return {
     
      meta: [
        { hid: 'description', name: 'description', content: this.$config.speedlifypageSeoTitle },
        // Open Graph
      
        { hid:      "og:title",         property: "og:title",             content: this.$config.speedlifypageSeoTitle },
        { hid:      "og:description",   property: "og:description",       content: this.$config.speedlifypageMetaDescription },
        { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + this.$route.fullPath },

        // Twitter Card
        { hid: 'twitter:title',         name: 'twitter:title',        content: this.$config.speedlifypageSeoTitle },
        { hid: 'twitter:description',   name: 'twitter:description',  content: this.$config.speedlifypageMetaDescription },
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