<template>
    <div class="bg-woodsmoke-900">

    <PageTitle>
           {{ title }}
    </PageTitle>
     <PageSubTitle>
            {{ description }}
     </PageSubTitle>


   
<div class="flex flex-col flex-wrap justify-center max-w-5xl pb-16 mx-auto ">

    <div v-for="blog of blogs" :key="blog.slug">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
        <div class="p-4 m-4 transition duration-500 border border-gray-800 rounded bg-opacity-10 hover:bg-gray-900 ">
                    <p class="text-gray-500 text-opacity-50 bg-opacity-75 ">
                        {{ blog.description }}
                    </p>

                    <h2 class="text-2xl text-indigo-200 nieuwstitel md:text-4xl">
                        {{ blog.title }}
                    </h2>

                   
                    <div>
                        <div class="pt-2 text-gray-400 hover:underline">Lees meer</div>
                    </div>
        </div>
      </NuxtLink>
      </div>
      </div>
   </div>
</template>

<script>
export default {
    data() {
      return {
        title: "Weblog",
        description:
          'Published videos from conferences around the world both in house and virtual'
      }
    },
  
  async asyncData({ $content, params }) {
    const blogs = await $content("blog", params.slug)
      .only(["title", "description", "slug"])
      .sortBy("volgorde", "asc")
      .where({ hide: { $ne: true } })
      .fetch();

    return {
      blogs,
    };
  },
};
</script>

<style>
</style>