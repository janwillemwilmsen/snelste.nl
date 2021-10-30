<template>
 <div class="flex justify-center max-w-5xl py-16 mx-auto lg:justify-start ">
   <div>

  <h1> Performance tooling page </h1>


<div class="flex flex-col flex-wrap justify-center text-center md:flex-row">

 
      <div  v-for="tool in tools" :key="tool.slug" class="flex flex-col">
        <PostsCard :tool="tool" />
      </div>  


      <!-- <div v-for="tool in tools" :key="tool.slug" class="p-2 ">
          
     </div> -->

</div>

<!-- <pre>
    {{ tools }}
</pre> -->


  </div>
</div>
</template>

<script>
export default {
  
  
  async asyncData({ $content, params }) {
    // fetch our article here
    // const tools = await $content("tooling", params.slug)
    const tools = await $content("tooling")
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