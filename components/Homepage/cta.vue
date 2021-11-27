<template>
  <section class="cta ">
    <!-- <div class="py-16 cta ">
    
    
      <div class="container block px-4 mx-auto text-white h-96 md:h-80">

          <div class="flex flex-col md:flex-row">

              <div class=" md:w-1/2">
                    
 sm:bg-red-600 md:bg-green-600 xl:bg-pink-400 lg:bg-yellow-300 bg-blue-400 bg-purple-400

                  
                              
                    
                                               
                                  <div class="self-center mx-auto text-xl text-left text-gray-400 md:text-2xl place-self-center ">
                                    
                                            <p class="font-bold text-left text-white md:leading-loose" >
                                                Monitor de LCP / FID en CLS van je website. Geautomatiseerd.
                                            </p>
                                     
                                      <p class="md:leading-loose ">Meerdere urls, zonder Lighthouse te starten, met historie. </p>
                                  </div>
                       
                        
                      

              </div>
              <div class=" md:w-1/2">

                  


                        <div class="self-center pt-8 mx-auto ml-0 text-xl text-gray-400 md:text-2xl md:leading-loose place-self-center md:pt-0 md:ml-8">
                              <p>Snelste maakt dashboards op maat. </p>
                              <p class="pt-4">
                                  <button type="submit" class="p-4 py-2 text-sm font-medium text-white transition bg-blue-500 border-0 rounded-md focus:outline-none focus:ring hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300">
                                    Vertel me meer 
                                  </button>
                              </p>
                        </div>
                        

                   
                    
                  
              
              </div>
          </div>


        
      



      </div>




    </div> -->

<div class="max-w-6xl px-6 py-24 mx-auto bg">
            <div class="px-8 py-12 md:px-20 md:flex md:justify-between bg-woodsmoke-800 rounded-2xl">
                <div class="p-4 md:w-1/2">
                    <h3 class="text-2xl font-semibold text-left text-white myheading"> Monitor de LCP / FID en CLS van je website. Geautomatiseerd.</h3>
                    <p class="max-w-md mt-4 text-xl text-gray-400">Meerdere urls, zonder Lighthouse te starten, met historie.</p>
                </div>
                <div class="p-4 md:w-1/2 ">
                  <p class="mb-4 text-xl text-gray-400">Snelste maakt dashboards op maat. <br></p>
                  <nuxt-link 
                  class="block w-40 px-4 py-2 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-blue-600 rounded md:mt-0 hover:bg-blue-500" 
                  to="/blog/laten-maken">Vertel me meer</nuxt-link>
                </div>
            </div>


             <div class="px-8 py-12 mt-12 md:px-20 bg-woodsmoke-800 rounded-2xl">

                  <div class="text-3xl text-center text-white myheading">Volg @snelstenl op twitter for more</div>

             </div>
        </div>


  </section>
</template>

<script>
export default {

}
</script>

<style>
.cta{
   background-image: linear-gradient(to right bottom, rgb(79, 70, 229), rgb(30, 58, 138), rgb(14, 165, 233));
   /* background: url('~assets/wave-cta.svg') ; */
   /* background-size:cover; */
   /* filter: grayscale(100%); */
}
</style>

