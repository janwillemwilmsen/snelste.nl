<template>
<section class="">


	<div class="flex flex-col items-stretch h-full max-w-xl mx-auto">
    	<h2 class="nieuwstitel"> {{ title }}</h2>
     <p class="h-full nieuwssubtitel "> {{ subtitle }} </p>



<form action="https://internet.nl/site/" method="POST"  target="_blank">
  
  <!-- <label for="internetnl-site-url">Jouw website-domeinnaam:</label> -->
  <input :value="$route.query.url" id="internetnl-site-url" type="text" name="url" placeholder="www.example.nl" class="hidden ">
  <button class="block px-4 py-1 m-6 mx-auto text-base font-medium text-center text-white break-all transition-colors duration-500 transform bg-gray-400 border border-gray-600 rounded md:w-64 hover:bg-gray-500 md:mt-0" >
     &raquo; Test {{$route.query.url }}
  </button>
</form>


<!-- <a target="_blank" :href="publicPath + $route.query.url" class="block px-4 py-2 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded w-62 md:mt-0 hover:bg-indigo-500"> Test {{$route.query.url }} </a> -->

   <!-- <table class="newstable">   + publicPathEnd
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
     url: this.$route.query.url,
     publicPath: "https://internet.nl/site/",
    //  publicPathEnd: "&followRedirects=on"

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
  },

  

//   watch: {
//   userOrigin() {
//     this.update();
//   },
//   userDestination() {
//     this.update();
//   }
// },
//   methods: {
//   update() {
//     // Make a clean copy of the current query
//     let queries = JSON.parse(JSON.stringify(this.$route.query.url));
//     queries.origin = this.userOrigin;
//     queries.destination = this.userDestination;
//     this.$router.replace({ query: queries });
//   }
// }
 
  }
</script>


<style >

</style>