<template>
    <div class="bg-gray-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>
  

 


<div class="flex flex-col flex-wrap content-center justify-center max-w-5xl pb-16 mx-auto text-center md:flex-row">

      <div v-for="tool in tools" :key="tool.slug" class="p-2 ">
          <Nuxt-Link :to="'/tooling/' + tool.slug" >
            <div class="max-w-xs mb-5 bg-white border border-gray-200 rounded-lg shadow-md ">

            <img class="rounded-t-lg" :src="'/tooling/' + tool.image"/>
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{tool.naam}}
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
    const tools = await $content("tooling", params.slug)
    // .sortBy('date', 'desc')
       .limit(7)
    .fetch();

    return { tools };
  },

    head() {
    return {
     
      meta: [
        { hid: 'description', name: 'description', content: this.$config.toolspageSeoTitle },
        // Open Graph
      
        { hid:      "og:title",         property: "og:title",             content: this.$config.toolspageSeoTitle },
        { hid:      "og:description",   property: "og:description",       content: this.$config.toolspageMetaDescription },
        { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + this.$route.fullPath },

        // Twitter Card
        { hid: 'twitter:title',         name: 'twitter:title',        content: this.$config.toolspageSeoTitle },
        { hid: 'twitter:description',   name: 'twitter:description',  content: this.$config.toolspageMetaDescription },
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