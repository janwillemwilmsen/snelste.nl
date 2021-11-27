<template>
<div class="pb-24 bg-woodsmoke-900">


<!-- <div class="content" :style="{background: `url(${item.img})`}"> -->


  <vue-horizontal class="p-10">
    <section v-for="item in items" :key="item.i" class="block my-2 blok rounded-2xl" >
              <div class="bg-gray-700 ring-4 ring-blue-300 rounded-xl">  
                <div class="flex px-4 py-3 bg-blue-200 rounded-t-xl">
                <div class="mr-6">
                    <span class="inline-block w-3 h-3 mr-1 bg-blue-400 rounded-full"></span>
                    <span class="inline-block w-3 h-3 mr-1 bg-blue-400 rounded-full"></span>
                    <span class="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
                </div>
                <div class="flex-1 mr-4 bg-blue-100 rounded"></div>
                </div>
 
        <!-- <div class="w-full h-96 " :style="@media (min-width: 768px){ backgroundImage : 'url(' + encodeURI(item.file) + ')' }" style=" background-repeat:no-repeat; background-size: contain;"> -->
        <!-- <div class="w-full h-96 " :style="{ backgroundImage : 'url(' + encodeURI(item.file) + ')' }" style=" background-repeat:no-repeat; background-size: contain;"> -->
<div class="pb-2 ">

                <img :src="item.file" class="hidden md:block" :alt="item.alttekst"/>
                <img :src="item.file2" class="visible mx-auto md:hidden" :alt="item.alttekst"/>
</div>
</div>


<div class="pt-4 mx-auto font-sans text-xl antialiased text-center ">

      <p class="inline-block text-gray-200 mypara ">{{ item.title }}</p>
      <p class="inline-block text-gray-200 mypara " v-html="item.content"> </p>
        
</div>

      </section>
    <!-- </div> -->
<section class=" blok">
    
    <div class="flex flex-col items-stretch content-center justify-end my-auto text-center h-96 md:h-52">

      <div class="text-2xl text-white ">Bekijk voorbeelden</div>
      <div><a href="/dashboard" class="text-gray-400 underline "> performance dashboards </a></div>
    </div>
    </section>

  </vue-horizontal>
</div>
</template>

<script>
export default ({
  
//   data() {
//     return {
//       items: [...Array(20).keys()].map((i) => {
//         return {i, title: `Item ${i}`, content: `Border box ${i}`};
//       }),
//     }
//   }

data() {
    return{
    items: [
    //   { title: 'Foo', content: 'blaaa', file: '~assets' },
      { title: 'Dashboard:', content: 'ranglijst van alle urls die gemeten worden.', file: '/img/dashboard-overview.png', file2: '/img/dashboard-overview-mobile.png', alttekst:'imagalt'},
      { title: 'Lighthouse metrics:', content: 'snelheid, web standaarden, seo en toegangkelijkheid. ', file: '/img/lighthouse.png', file2: '/img/lighthouse-mobile.png', alttekst:'imagalt' },
      { title: '(Core) Web Vitals:', content: 'van LCP tot TTI.', file: '/img/web-vitals.png', file2: '/img/web-vitals-mobile.png', alttekst:'imagalt' },
      { title: 'Resources:', content: 'bij veranderingen opletten ;-) ', file: '/img/html.png', file2: '/img/html-mobile.png', alttekst:'imagalt' },
    //   { title: 'Bekijk voorbeelden', content: '<a href="/dashboard"> performance dashboards </a>',   }
    ]
  }
  }

});
</script>

<style scoped>

div.v-hl-btn-next {margin-left: 10px;}

.vue-horizontal {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
   
}
section.blok {
  padding: 16px 24px;
  /* border-radius: 4px; */
  margin-right: 24px;
  box-sizing: border-box;
  width: 100%;
  /* width: calc((100% - (3 * 24px)) / 4); */
}
</style>