


<template>

<!-- CANONICAL URL HARDGECODEERD  -->

    <div class="bg-gray-900">

      <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>
<div class="max-w-5xl px-4 pb-16 mx-auto ">

    <TestTheTest />


<div class="pb-4 text-center text-gray-300 mypara">
  SEO checkers:
</div>
  <div class="grid grid-cols-1 gap-4 p-8 md:p-0 md:grid-cols-2">

  

    <TestOne class="max-w-xl zoekitem"  title="pagespeed.web.dev" subtitle="Pagespeed is tooling van Google. Onderzoek o.a. de Web Vitals van een website. Lijkt op de Lighthouse test die met een browser kunt uitvoeren. "/>
    <TestTwo class="max-w-xl zoekitem"  title="wave.webaim.org" subtitle="Onderzoek de toegangkelijkheid van je website.  "/>
     
  </div>




<div class="pt-8 pb-4 text-center text-gray-300 mypara">
  Security checkers:
</div>
  <div class="grid grid-cols-1 gap-4 p-8 md:p-0 md:grid-cols-2">

    <TestThree class="max-w-xl zoekitem"  title="securityheaders.com" subtitle="Onderzoek de serverheader. Of er security technisch zwakke punten zijn."/>
    <TestFour class="max-w-xl zoekitem"  title="sitecheck.sucuri.net" subtitle="Malware,spam en blacklist checker. Test je site o.a. in Google Safe browsing, McAfee, Yandex en Opera."/>
    <TestFive class="max-w-xl zoekitem"  title="internet.nl" subtitle="IPv6, DNSSEC, CSP, X-Content, X-Frame checker."/>
     
  </div>


  </div>


 <TheShareButtons />

  </div>

</template>

<script>
export default {
   data() {
      return {
        title: "Test websites ",
        description: "Snelheid, toegankelijkheid, serverheaders, you name it"
      }
    },


       head() {
    return {
     
      meta: [
        { hid: 'description', name: 'description', content: this.$config.testpageSeoTitle },
        // Open Graph
      
        { hid:      "og:title",         property: "og:title",             content: this.$config.testpageSeoTitle },
        { hid:      "og:description",   property: "og:description",       content: this.$config.testpageMetaDescription },
        { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + '/test' },

        // Twitter Card
        { hid: 'twitter:title',         name: 'twitter:title',        content: this.$config.testpageSeoTitle },
        { hid: 'twitter:description',   name: 'twitter:description',  content: this.$config.testpageMetaDescription },
        { hid: 'twitter:url',           property: 'twitter:url',      content: this.$config.baseURL + '/test' },
        // { hid:  "twitter:image",        name: "twitter:image",        content: "kl",}
       ],
      link: [
        { hid: "canonical", rel: "canonical", href: this.$config.baseURL + '/test' },
    ]
    }
  }

}
</script>

<style>

.zoekitem { 
  background: #272a2f;
  border-radius: 1rem;
  padding:10px 0 0 20px;
}

</style>