export default async () => {
// routes: async () => {
    const { $content } = require('@nuxt/content')
  
    const posts = await $content('video')
      .only(['path'])
      .fetch()
    const works = await $content('tooling')
      .only(['path'])
      .fetch()
    const zorks = await $content('dashboard')
      .only(['path'])
      .fetch()
    const plorks = await $content('blog')
      .only(['path'])
      .fetch()
    
  
    // Map and concatenate the routes and return the array.
    return []
      .concat(...works.map((w) => w.path))
      .concat(...posts.map((p) => p.path))
      .concat(...zorks.map((z) => z.path))
      .concat(...plorks.map((a) => a.path))
  }

// ==============
// export default function () {
//     this.nuxt.hook('generate:done', (context) => {
//       const routesToExclude = [] // Add any route you don't want in your sitemap. Potentially get this from an .env file.
//       const allRoutes = Array.from(context.generatedRoutes)
//       const routes = allRoutes.filter(route => !routesToExclude.includes(route))
  
//       this.nuxt.options.sitemap.routes = [...routes]
//     })
//   }

// =======================

            // export default async () => {
            //     const { $content } = require("@nuxt/content");
            //  poging 1
                                                // const files = await $content({ deep: true })
                                                // .without('/scrape')
                                                // .only(["slug"])
                                                // // .without(['scrape'])
                                                // // .find({ 'slug' : { '$nin' : ['scrape'] } })
                                                // .without({ 'dir' : { '$nin' : ['scrape'] } })
                                                // .fetch();


                // poging 2
                                                 // const files = await $content ({ deep: true }).where({ 'slug': { $contains: ['top', 'woman'] } }).fetch()
   
                // poging 3
            // deze twee regels zijn default. renderen ook de slugs in scraped jsons:
            //    const files = await $content({ deep: true }).fetch()
            //    return files.map((file) => (file.path === "/index" ? "/" : file.path));

                // poging 4
             // deze twee regels pakken de jsons in de data folder. creer ook sitemap links /data/etc:
            // const files = await $content('data',{ deep: true }).fetch()
            // return files.map((file) => (file.path === "/index" ? "/" : file.path));
 




    //
    // const whiteList = ['/datatool', '/video'];
    // const files = routes.filter(page => whiteList.includes(page.route));
    //  routes.splice(0, routes.length, ...files);
    //  return files;

// };

