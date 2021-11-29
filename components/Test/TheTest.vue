<template>
     <div class="">        
         <!-- <p>
         query:  {{$route.query.over}}
         </p> -->

        <!-- <form action="/">
            <input type="text" :value="$route.query.over">
            <input type="submit" >
        </form> -->
<div class="max-w-3xl pb-16 mx-auto">
      
      <div class="flex flex-col justify-center py-8 mx-8 space-x-4 space-y-4 text-center bg-blue-600 md:space-y-0 md:flex-row rounded-2xl">

       <h2 class="text-3xl text-woodsmoke-700 myheading ">
               Test :
          </h2>
        <form ref="form" class="self-center h-12 mx-auto">
                <!-- <input name="over"  :value="$route.query.over"> -->
                <input name="over" v-model="over" placeholder="Vul je domeinnaam.nl of domein.com in" class="w-56 p-2 text-gray-900 border border-gray-300 rounded-lg  md:w-72 bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                <!-- <a href="#" v-on:click="submit">SUBMIT</a> -->
        </form>
      </div>

       
       
</div>
      </div>    
</template>

<script>
export default { 
    data(){
   return {
     over: this.$route.query.over,
   
    }
  },  
 methods : {
    submit : function(){
      this.$refs.form.submit()
    }
  },
// methods: {
//       appendQueryToUrl() {
//           this.$router.replace({query: {over: this.filterData.genre}})
//       }
// },
 

  created() {
    console.log(this.$route.query.over); 
  },
watch: {
    over(newVal) {
        this.$router.push({ query: { ...this.$route.query, over: newVal } });
    },
    '$route.query.over': function(val) {
        this.over = val;
    }
}

 
}
</script>

<style>

</style>


    <!-- 6  <a :href="{{$route.query.over}}"> pagespeed.web.dev {{$route.query.over }} </a> -->
        <!-- 8  <a :href="{ over }"> pagespeed.web.dev {{$route.query.over }} </a> -->