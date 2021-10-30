<template>
    <div class="bg-gray-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>


<div class="max-w-5xl pb-16 mx-auto">

    <NieuwsBlogFive class="text-gray-900" title="WebPageTest" subtitle="De 'one and only'. Grondlegger van de performance test tooling."/>
    <NieuwsBlogFour title="Web.dev" subtitle=" Web.dev is van Google. Web.dev geeft tips over het verbeteren van de performance van je website. "/>
    <NieuwsBlogOne title="Erwin Hofman" subtitle="Performance specialist uit Nederland. Schrijft ook blogs..."/>
    <NieuwsBlogTwo title="GT Metrix" subtitle=" Bekend van de uptime monitor. Schrijven ook over performance."/>
    <NieuwsBlogThree title="Measure.Works" subtitle=" Nederlands bedrijf ...."/>

</div>

    </div>
  <!-- </div> -->
</template>

<script>
export default {
   data() {
      return {
        title: "Laatste nieuws ",
        description:
          'Headlines van websites die over websiteperformance schrijven, gemakkelijk scanbaar'
      }
    },

}
</script>

<style>
.nieuwstitel { font-size: 2rem;  color:#c7d2fe;}
.nieuwssubtitel {font-size: 1.4rem;  color: #7f889b; margin-bottom: 20px;}

.nieuwsartikeltitel {font-size: 1.2rem;}

.newstable {width:100%; }
.newstable tr:nth-child(even){
  background-color: lightblue;
}
.newstable tr:nth-child(odd){
  background-color:lightgray;
}
.newstable td {padding:6px 0 6px 8px;}

</style>