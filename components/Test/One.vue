<template>
<section class="">


	<div class="flex flex-col items-stretch h-full max-w-xl mx-auto">
			<h2 class="text-lg nieuwstitel "> {{ title }}</h2>
     <p class="h-full nieuwssubtitel"> {{ subtitle }} </p>


<a target="_blank" :href="publicPath + $route.query.over" class="block w-64 px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded hover:bg-gray-500 w-62 md:mt-0"> &raquo; Test {{$route.query.over }}  </a>

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
      data(){
   return {
     over: this.$route.query.over,
     publicPath: "https://pagespeed.web.dev/report?url="
    }
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
  }
 
  }
</script>


<style >

</style>