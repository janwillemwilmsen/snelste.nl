<template>
  <header>
    <div class="flex flex-col items-center justify-center py-4 bg-blue-900 md:flex-row ">
        

        


            <div class="max-w-lg ">
                    <nuxt-link to="/" class="home">
                    <div class="flex flex-row w-32 p-1 mx-auto border-opacity-25 bg-gradient-to-r from-blue-700 to-pink-500 rounded-3xl">
                        <!-- <div><img src="~assets/icons/snelste.png" alt="Snelste" class="w-8 h-8 mx-auto "> </div> -->
                        <div><img src="~assets/icons/snelste.svg" alt="Snelste" class="w-8 h-8 mx-auto "> </div>
                        <div class="px-2 text-2xl font-light text-blue-900 myheading">snelste</div>
                    </div>
                    </nuxt-link> 

                    
            </div>

        

          <div class="">

                    <!-- Mobile menu -->
                    <div class="w-40 px-2 pb-4 mx-auto mt-4 sm:hidden ">

                    <div @click="isOpen  = !isOpen "   class="flex justify-center text-center focus:outline-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-20 h-6 text-blue-700 fill-current hover:text-blue-500">
                            <path v-if="!isOpen" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>


                    <!-- dekstop menu -->
                    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 text-center sm:block">
                        
                        <nav class=""  role="navigation">
                                <ul class="">
                                    <li v-for="(item, index) in navItems" :key="index" class="p-2 font-semibold text-gray-200 rounded hover:text-gray-700 sm:inline-block hover:bg-gray-200"> 
                                        <nuxt-link :to="item.path" class="block">
                                        {{ item.text }} 
                                        </nuxt-link>
                                    </li>
                                </ul>
                    
                        </nav>
                    
                    </div>
 
          </div>

      
       

        
    </div>
</header>
</template>

<script>
export default {
  name: 'isOpen',
  data: function() {
    
  },


    name: 'Navigation',
    data: function() {
        return {
             isOpen: false,
            navItems: [
                // {path: '/', text:'Home'},
                {path: '/nieuws', text:'Nieuws'},
                {path: '/video', text:'Video'},
                {path: '/tooling', text:'Tooling'},
                {path: '/dashboard', text:'Dashboard'},
                {path: '/blog', text:'Blog'},
                    ]
        }
    }
}
 
</script>

<style>
ul .nuxt-link-active { text-decoration: underline;}
 

</style>