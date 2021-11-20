<template>
     <div class="bg-red-300 ">        
         <p>
         query:  {{$route.query.over}}
         </p>

        <!-- <form action="/">
            <input type="text" :value="$route.query.over">
            <input type="submit" >
        </form> -->

        <form ref="form">
                <!-- <input name="over"  :value="$route.query.over"> -->
                <input name="over" v-model="over">
                <a href="#" v-on:click="submit">SUBMIT</a>
        </form>


     

       <p>

            PageSpeed Insights

        1  <a :href="'https://pagespeed.web.dev/report?url=' + this.$route.query.over"> pagespeed.web.dev {{$route.query.over }} </a><br><br>
        2  <a :href="publicPath + this.$route.query.over"> pagespeed.web.dev {{$route.query.over }} </a>

        3  <a :href="'https://pagespeed.web.dev/report?url=' +  $route.query.over"> pagespeed.web.dev {{$route.query.over }} </a><br><br>
        4  <a :href="publicPath + $route.query.over"> pagespeed.web.dev {{$route.query.over }} </a>

        5  <a :href="$route.query.over"> pagespeed.web.dev {{$route.query.over }} </a><br><br>
        <!-- 6  <a :href="{{$route.query.over}}"> pagespeed.web.dev {{$route.query.over }} </a> -->



        7  <a :href="this.over"> pagespeed.web.dev {{$route.query.over }} </a>
        <!-- 8  <a :href="{ over }"> pagespeed.web.dev {{$route.query.over }} </a> -->


        </p>     

      </div>    
</template>

<script>
export default { 
    data(){
   return {
     over: this.$route.query.over,
   publicPath: "https://pagespeed.web.dev/report?url="
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
    console.log(this.$route.query.over); // john
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