<template>
  <!-- <div class="py-24 text-center bg-woodsmoke-800"> -->
  <div class="py-24 text-center bg-woodsmoke-900">

        <h2 class="text-4xl text-gray-100 opacity-80 myheading">
            Bekijk een voorbeeld
        </h2>
        <p>
         
        </p>


<div class="flex flex-wrap items-stretch content-center justify-center w-full pt-8 mx-auto">
    <div v-for="speed of speedlify" :key="speed.slug" class="self-auto block w-24 h-16 m-4 text-center break-words align-middle transition duration-500 rounded-lg shadow-2xl hover:bg-woodsmoke-700 bg-woodsmoke-800 bg-opacity-90 md:h-32 md:w-40 item place-self-center">
        <Nuxt-link :to="{ name: 'dashboard-slug', params: { slug: speed.slug } }">
           <div >
              <!-- <img class="rounded-t-lg" :src="'/dashboard/' + speed.image"/> -->
              <img class="w-24 px-2 py-1 md:w-40 place-self-center" :src="speed.logourl" :alt="speed.alttekst"/>
              <!-- {{ speed.naam }} -->
          </div>
        </Nuxt-link>
    </div>



</div>
    <br>
    <br>

    <Nuxt-link to="/dashboard" class="underline">
              <button type="submit" class="px-4 py-2 text-sm font-medium text-gray-700 underline transition duration-1000 rounded-md hover:no-underline mypara focus:outline-none focus:ring hover:text-gray-800 hover:bg-gray-300 active:bg-blue-700 focus:ring-blue-300"> 
                   of bekijk ze allemaal.
                </button>
    </Nuxt-link>
<br>
    <!-- <Nuxt-link to="/blog/zelf-maken" class="underline"> Zelf eentje maken? </Nuxt-link>  -->



  </div>
</template>

<script>
export default {
  data() {
    return {
      speedlify: []
    }
  },

  async fetch() {
    this.speedlify = await this.$content("dashboard")
    .limit(8)
    .fetch();
  }
}
</script>

<style>

</style>