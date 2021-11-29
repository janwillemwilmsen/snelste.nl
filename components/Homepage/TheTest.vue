<template>
     <div class="pt-12 pb-24 bg-blue-700 bg-gradient-to-br ">        
         <!-- <p>
         query:  {{$route.query.over}}
         </p> -->

        <!-- <form action="/">
            <input type="text" :value="$route.query.over">
            <input type="submit" >
        </form> -->
<div class="max-w-md p-10 py-16 m-10 mx-auto md:max-w-5xl rounded-2xl">

    <div class="max-w-3xl ">
        <div class="text-lg text-white uppercase opacity-50 mypara"> Url diagnostiek</div>
            <h2 class="pb-8 text-5xl text-woodsmoke-900 opacity-80 myheading">
               Snel inzicht in een url nodig?
            </h2>
    </div>

    <div class="flex flex-col justify-center max-w-5xl p-8 space-x-4 space-y-4 text-center md:space-y-0 md:flex-row bg-woodsmoke-800 rounded-2xl">

        <div class="mx-auto md:w-6/12 ">

        
          <p class="text-woodsmoke-100 opacity-80 mypara">
            Doe de AdHoc test! Een handig hulpmiddel om snel inzichten te verkrijgen over een specifieke pagina. 
          </p>
          </div>


        <div class=" md:w-6/12">

                <form ref="form" class="w-full "  action="/test">
                        <!-- <input name="over"  :value="$route.query.over"> -->
                        <input name="over" v-model="over" placeholder="Vul je domeinnaam.nl of domein.com in" class="bg-gray-100  w-full xl:w-9/12 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5">
                        <!-- <a href="#" v-on:click="submit">SUBMIT</a> --><br>

                          <!-- <input type="button">
                        <a href="#" >
                        <input  value="test" class="">
                        </a> -->

                        <button  type="submit" class="px-8 py-1 m-2 font-medium text-white transition bg-blue-600 border-0 rounded-md focus:outline-none focus:ring hover:bg-blue-400 active:bg-blue-700 focus:ring-blue-300"><div class="inline-block testbttn"></div> <div class="inline-block text-base testtext">Test</div></button>


                </form>
        </div>


      </div>

</div>


<div class="grid w-11/12 grid-cols-3 gap-3 mx-auto text-center md:w-11/12 lg:grid-cols-6 justify-items-center">
  <div class="mypara listitem">LCP</div>
  <div class="mypara listitem">FCP</div>
  <div class="mypara listitem">TBT</div>
  <div class="mypara listitem">A11Y</div>
  <div class="mypara listitem">Server headers</div>
  <div class="mypara listitem">SEO</div>
  
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
// watch: {
//     over(newVal) {
//         this.$router.push({ query: { ...this.$route.query, over: newVal } });
//     },
//     '$route.query.over': function(val) {
//         this.over = val;
//     }
// }

 
}
</script>

<style>
.testtext {display:inline-block;margin-top:-10px; padding-top: -10px  ;}

.testbttn:before {
content: ' ';
width: 25px;
  height: 16px;
  display: inline-block;
    opacity: 0.8;
  /* margin-top:10px; */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'%3E%3Cpath d='M0.827148 8C0.827148 12.2812 4.2959 15.75 8.57715 15.75C12.8584 15.75 16.3271 12.2812 16.3271 8C16.3271 3.71875 12.8584 0.25 8.57715 0.25C4.2959 0.25 0.827148 3.71875 0.827148 8ZM14.8271 8C14.8271 11.4688 12.0146 14.25 8.57715 14.25C5.1084 14.25 2.32715 11.4688 2.32715 8C2.32715 4.5625 5.1084 1.75 8.57715 1.75C12.0146 1.75 14.8271 4.5625 14.8271 8ZM8.88965 3.96875C8.76465 3.8125 8.51465 3.8125 8.3584 3.96875L7.76465 4.5625C7.6084 4.71875 7.6084 4.96875 7.76465 5.09375L9.95215 7.1875H4.95215C4.7334 7.1875 4.57715 7.375 4.57715 7.5625V8.4375C4.57715 8.65625 4.7334 8.8125 4.95215 8.8125H9.95215L7.76465 10.9375C7.6084 11.0625 7.6084 11.3125 7.76465 11.4688L8.3584 12.0625C8.51465 12.2188 8.76465 12.2188 8.88965 12.0625L12.7021 8.28125C12.8584 8.125 12.8584 7.90625 12.7021 7.75L8.88965 3.96875Z' fill='white'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
}


.listitem {  width:90%;  padding:1px; margin:2px;   display: block; color: #8ba6eb; font-weight: 400; font-size: 1.5em; }

.listitem:before {
  content: ' ';
  width: 25px;
  height: 21px;
  display: inline-block;
  opacity: 0.2;
  margin-right: 6px;
    margin-left: -1em;
  /* margin-right: 20px; */
	background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='svg845' version='1.1' viewBox='0 0 24 24' height='24' width='24'%3E%3Cmetadata id='metadata851'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cdefs id='defs849' /%3E%3Cpath style='fill:%23fafeff;fill-opacity:1;stroke:none;stroke-width:0.75' id='path843' d='M 18.21375,4.375 9.75,13.05025 5.7855,9.292 3,12.079 9.75,18.625 21,7.16125 Z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;

}
</style>
 
    <!-- 6  <a :href="{{$route.query.over}}"> pagespeed.web.dev {{$route.query.over }} </a> -->
        <!-- 8  <a :href="{ over }"> pagespeed.web.dev {{$route.query.over }} </a> -->