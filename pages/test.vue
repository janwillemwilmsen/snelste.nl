


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

  

    <TestOne class="max-w-xl zoekitem"  title="pagespeed.web.dev" subtitle="Onderzoek o.a. de web vitals van een website.  "/>
    <!-- <TestTwo class="max-w-xl zoekitem"  title="wave.webaim.org" subtitle="Onderzoek de toegangkelijkheid van je website.  "/> -->
     
  </div>




<div class="pt-8 pb-4 text-center text-gray-300 mypara">
  Security checkers:
</div>
  <div class="grid grid-cols-1 gap-4 p-8 md:p-0 md:grid-cols-2">
<!-- 
    <TestThree class="max-w-xl zoekitem"  title="securityheaders.com" subtitle="Onderzoek de serverheaders. Of er security technisch zwakke punten zijn."/>
    <TestFour class="max-w-xl zoekitem"  title="sitecheck.sucuri.net" subtitle="Malware,spam en blacklist checker. Test je site o.a. in Google Safe browsing, McAfee, Yandex en Opera."/>
    <TestFive class="max-w-xl zoekitem"  title="internet.nl" subtitle="IPv6, DNSSEC, CSP, X-Content, X-Frame checker."/>
      -->
  </div>


  </div>


<Social/>

  </div>

</template>

<script>
import Social from '../components/Test/Social.vue'
export default {
  components: { Social },
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
        { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + this.$nuxt.$route.fullPath },
        // { hid:      "og:url",           property: "og:url",               content: this.$config.baseURL + this.$config.baseDir },
        { hid:      "og:image",         property: "og:image",             content: this.$config.baseURL + '/social/test-tool-share.png'},
        { hid:      "og:image:width",   property: "og:image:width",       content: "1200" },
        { hid:      "og:image:height",  property: "og:image:height",      content: "627" },

        // Twitter Card
        { hid: 'twitter:title',         name: 'twitter:title',        content: this.$config.testpageSeoTitle },
        { hid: 'twitter:description',   name: 'twitter:description',  content: this.$config.testpageMetaDescription },
        { hid: 'twitter:url',           property: 'twitter:url',      content: this.$config.baseURL + this.$nuxt.$route.fullPath },
        { hid: "twitter:image",         name: "twitter:image",        content: this.$config.baseURL + '/social/test-tool-share-twitter.png'}
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
  padding:10px 10px 0 10px;
}

</style>