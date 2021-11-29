<template>
    <div class=" bg-woodsmoke-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>


<div class="max-w-5xl px-4 pb-16 mx-auto ">

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

</style>