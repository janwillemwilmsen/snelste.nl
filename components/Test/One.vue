<template>
<section class="">


	<div class="flex flex-col items-stretch h-full max-w-xl mx-auto">
			<h2 class="text-lg nieuwstitel ">hierr {{ title }}</h2>
     <p class="h-full nieuwssubtitel"> {{ subtitle }} {{ this.url }} {{ this.url_data }}</p>


<!-- <a target="_blank" :href="publicPath + $route.query.url" class="block px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded md:w-64 hover:bg-gray-500 md:mt-0"> &raquo; Test {{$route.query.url }}  </a> -->
<!-- <a target="_blank" :href="publicPath + this.url" class="block px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded md:w-64 hover:bg-gray-500 md:mt-0"> &raquo; Test {{$route.query.url }}  </a> -->
<!-- <a target="_blank" :href="publicPath + this.$route.params.url" class="block px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded md:w-64 hover:bg-gray-500 md:mt-0"> &raquo; Test {{$route.query.url }}  </a> -->
<a target="_blank" :href="publicPath + this.url_data" class="block px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded md:w-64 hover:bg-gray-500 md:mt-0"> &raquo; Test {{$route.query.url }}  </a>

   <!-- <table class="newstable">
   <tbody>
    <tr v-for="blog of blogs" :key="blog.slug">
          
          <td> 
           <a :href="blog.slug">  
                <div class="flex flex-col ">
                 <div class="nieuwsartikeltitel"> {{blog.title}}</div>
                  <div class="lowercase nieuwsartikeltijd"> {{blog.time}} </div>
                </div>
              </a>    
          </td> 
 
      </tr>
   </tbody>
 </table> -->

	</div>
</section>
</template>
 
<script>



  export default {

    name: 'cards',
      data(){
   return {
     url: this.$route.query.url,
     url_data: this.$route.params.url,
     publicPath: "https://pagespeed.web.dev/report?url="
    }
      },

    mounted () {
    this.init()
    this.url_data=this.$route.query.url
  },

  methods: {
    init () {
      console.log(this.$route);  //should return object
      console.log(this.$route.params); //should return object 
      console.log(this.$route.params.url); //should return id of URL param 
      console.log(this.$route.query);
      // console.log(this.$route.query);
    },
  },

     props: {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    // url: {
    //    type: String,
    //   required: false,
    // }
  }
 
  }
</script>


<style >

</style>