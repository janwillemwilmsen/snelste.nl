<template>
    <div class="bg-gray-900">

      <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>

    <TestTheTest />
    <TestOne  title="pagespeed.web.dev" subtitle="Pagespeed is tooling van Google. Onderzoek o.a. de Web Vitals van een website. Lijkt op de Lighthouse test die met een browser kunt uitvoeren. "/>
    <TestTwo  title="wave.webaim.org" subtitle="Onderzoek de toegangkelijkheid van je website.  "/>
    <TestThree  title="securityheaders.com" subtitle="Onderzoek de serverheader. Of er security technisch zwakke punten zijn."/>
    <TestFour  title="sitecheck.sucuri.net" subtitle="Malware,spam en blacklist checker. Test je site o.a. in Google Safe browsing, McAfee, Yandex en Opera."/>
    <TestFive  title="internet.nl" subtitle="IPv6, DNSSEC, CSP, X-Content, X-Frame checker."/>
     


  </div>

</template>

<script>
export default {
   data() {
      return {
        title: "Test websites ",
        description:
          'Snelheid, toegankelijkheid, serverheaders, you name it'
      }
    },

}
</script>

<style>

</style>