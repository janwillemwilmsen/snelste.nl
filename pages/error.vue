<template>
  <div style="padding:50px;">
         
         
    <form ref="form" class="self-center h-12 mx-auto">
        <!-- <input name="url"  :value="$route.query.url"> -->
        <input name="url" v-model="url" placeholder="Vul je domeinnaam.nl of domein.com in" class="w-56 p-2 text-gray-900 border border-gray-300 rounded-lg md:w-72 bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
        <!-- <a href="#" v-on:click="submit">SUBMIT</a> -->
    </form>


    <a target="_blank" :href="publicPath + this.$route.query.url" style=" background-color:gray;padding:10px;"> 
    &raquo; Test {{ $route.query.url }} 
    </a>


  </div>
</template>

<script>
export default {
   data(){
   return {
    url: this.$route.query.url,
    publicPath: "https://pagespeed.web.dev/report?url="
   
    }
     },  
 methods : {
    submit : function(){
      this.$refs.form.submit()
    }
  },
  created() {
    console.log(this.$route.query.url); 
  },

watch: {
    url(newVal) {
        this.$router.push({ query: { ...this.$route.query, url: newVal } });
    },
    '$route.query.url': function(val) {
        this.url = val;
    }
}
}
</script>

<style>

</style>