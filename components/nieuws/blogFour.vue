<template>
<section class="">


	<div class="pt-16">
			<h2 class="nieuwstitel"> {{ title }}</h2>
     <p class="nieuwssubtitel"> {{ subtitle }} </p>


   <table class="newstable">
   <tbody>
    <tr v-for="blog of blogs" :key="blog.slug" >
             
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
 </table>

	</div>
</section>
</template>
 
<script>
  export default {
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
  data() {
    return {
      blogs: []
    }
  },

  async fetch() {
    this.blogs = await this.$content("/scrape/bloglist4")
    .limit(8)
    .fetch();
  }
 
  }
</script>


<style >

</style>