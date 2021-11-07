<template>
 <section class="text-gray-200 bg-gray-900">
	<article>
      
<div class="flex justify-center max-w-6xl py-16 mx-auto ">
            <div>

             <!-- <h1 class="font-bold">  {{ blog.title }}</h1>
             <p>   {{ blog.description }}<br> -->
             Door: {{blog.door}}
         <nuxt-content :document="blog" class="text-gray-200 md:prose-lg xl:prose-xl" />
            <br>
            <br>
            <hr>

            <p>Laatst bewerkt op: {{ formatDate(blog.updatedAt) }}</p>
 
            </div>
</div>


  </article>
</section>
</template>

<script>
export default {
 async asyncData({ $content, params }) {
      const blog = await $content('blog', params.slug).fetch()


      const [prev, next] = await $content('blog')
      .only(['title', 'slug', 'volgorde'])
      .sortBy('volgorde', 'asc')
      .where({ title: { $ne: 'Over directic' } })
      .surround(params.slug)
      .fetch()

      return { blog,
               prev,
               next
                }
    },
      methods: {
    formatDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric'  }
      return new Date(date).toLocaleDateString('en', options)
    }
    },

 head() {
    return {
      title: this.blog.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blog.description },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://directic.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: this.blog.title },
        { hid: 'og:description', property: 'og:description', content: this.blog.description },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://directic.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.blog.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.blog.description },
      ],
      link: [
          { hid: "canonical", rel: "canonical", href: `https://directic.nl` + this.$route.fullPath  },
      ]
    }
  }
}
</script>

<style>
.prose h1  {color:white}
.prose h2  {color:white}
</style>