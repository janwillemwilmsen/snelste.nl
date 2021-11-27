<template>
<section class="">


	<div class="max-w-xl pb-16 mx-auto">
			<h2 class="nieuwstitel"> {{ title }}</h2>
     <p class="nieuwssubtitel"> {{ subtitle }} </p>



<form action="https://internet.nl/site/" method="POST">
  
  <!-- <label for="internetnl-site-url">Jouw website-domeinnaam:</label> -->
  <input :value="$route.query.over" id="internetnl-site-url" type="text" name="url" placeholder="www.example.nl" class="hidden ">
  <button class="block w-full px-4 py-2 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded internetnl w-62 md:mt-0 hover:bg-indigo-500" >
     Test {{$route.query.over }}
  </button>
</form>


<!-- <a target="_blank" :href="publicPath + $route.query.over" class="block px-4 py-2 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded w-62 md:mt-0 hover:bg-indigo-500"> Test {{$route.query.over }} </a> -->

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
     over: this.$route.query.over,
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
//     let queries = JSON.parse(JSON.stringify(this.$route.query.over));
//     queries.origin = this.userOrigin;
//     queries.destination = this.userDestination;
//     this.$router.replace({ query: queries });
//   }
// }
 
  }
</script>


<style >

</style>