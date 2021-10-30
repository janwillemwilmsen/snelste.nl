<template>
  <div class="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg">
    <div class="flex-shrink-0">
      
   
      
     
        <NuxtLink :to="`/tooling/${tool.slug}`">
          <!-- <Nuxt-Link :to="'/tooling/' + item.slug" > -->
                <img class="rounded-t-lg" :src="'/tooling/' + tool.image"/>

                <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{tool.naam}}
              </div>
        </NuxtLink>
       
    </div>
    <!-- <div class="flex flex-col justify-between flex-1 p-6 bg-white">
      <div class="flex-1">
        
        <a v-if="item.url" :href="item.url" class="block">
          <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
            {{ item.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ item.description }}
          </p>
        </a>

     
      </div>
       
    </div> 
    
    
            <div class="max-w-xs mb-5 bg-white border border-gray-200 rounded-lg shadow-md ">

           
            
            
            </div>
          </Nuxt-link>
    
    
    -->
  </div>
</template>

<script>
export default{
  props: {
      tool: {
        type: Object,
        required: true
      }
    },

}
</script>
