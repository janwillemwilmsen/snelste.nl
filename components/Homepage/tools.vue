<template>
  <div class="py-16 text-center bg-gray-200">

        <h2 class="text-2xl text-gray-700 myheading">
            Website performance tooling
        </h2>
        <p class="text-xl text-gray-600">
          Bekijk de tools die je kunt gebruiken voor het monitoren van je website.
        </p>


<div class="flex flex-wrap content-center justify-center w-full pt-8 mx-auto">


    <div v-for="tool of tools" :key="tool.slug" class="p-2 m-2 ">
        <Nuxt-link :to="{ name: 'tooling-slug', params: { slug: tool.slug } }">
          <div class="block w-56 m-2 break-words transition duration-1000 bg-white rounded-lg hover:shadow-2xl">
              <!-- <div class="bg-gray-500 w-44 h-28">img</div> -->
              <img class="border-b border-gray-300 rounded-t-lg" :src="'/tooling/' + tool.image" :alt="tool.alttekst"/>
              <p class="p-2 text-sm text-gray-800 opacity-90">
              {{ tool.naam }}
              </p>
          </div>

        

        </Nuxt-link>
    </div>
</div>
    <br><br>
    
    <Nuxt-link to="/tooling" class="px-4 py-2 text-sm font-medium text-gray-800 transition border border-gray-800 rounded-md focus:outline-none focus:ring hover:text-white hover:bg-gray-600 active:bg-blue-700 focus:ring-blue-300"> Bekijk alle tools </Nuxt-link>


  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: []
    }
  },

  async fetch() {
    this.tools = await this.$content("tooling")
    .limit(3)
    .fetch();
  }
}
</script>

<style>

</style>