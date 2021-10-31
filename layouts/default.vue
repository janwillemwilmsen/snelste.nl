<template>
  <div>
    <TheHeader/>
    <nuxt />
    <TheFooter/>
    <CookieControl>
  <template v-slot:bar>
  <!-- <div class="wall" ></div> -->
   <h3>Cookie instellingen</h3>
    <p>We gebruiken cookies om deze site te laten functioneren en te analyseren.   
      <!-- (you can use $ cookies.text.barDescription) -->
      </p>
  <div class="wall" id="wall" style="display: block;" ></div>
    

</template>

      <template v-slot:modal >
          <h3 class="">Cookies op snelste.nl</h3>
          <!-- <p>Modal description</p> -->
      </template>
</CookieControl>
  </div>
</template>

<script>
// import Cookie from "@/components/Cookie.vue";
export default {
  data() {
    return {
      cookies: this.$cookies,   
    };
  }
 
};

  
</script>

<style>
/* de wall is min-1, de cookiepopup +1, de detailmodal +300 --- Z-INDEX */

 .cookieControl__Modal {
   z-index: 300;
 }


/*  verbergt buttons in de modal met detail info van cookies.  */ 
.cookieControl__ModalButtons button:not(:first-child)
 {
   display:none;
}

.wall{

  /* display: none; */
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7)
}

 .cookieControl__Bar--bottom-full{
   z-index: 200;
   width:50%;
   max-width: 350px;
   margin:auto;
   margin-bottom:25%;
 }

 .cookieControl__BarContainer{
    display: flex;
     flex-direction: column;
    
 }

.cookieControl__BarButtons {
  margin-top: 20px;
}

 /* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 0px) and (max-device-width : 640px) {
.cookieControl__Bar--bottom-full{
   width:80%;
   margin:auto;
   margin-top:20% !important;
   margin-bottom:50% !important;
 }

.cookieControl__BarButtons{
  /* background-color: red; */
     display: flex;
     flex-direction: column;
     
 }

.cookieControl__BarButtons > button
{
  /* flex:1 1 auto; */
  font-size: 12px;
  text-align:center;
  margin-bottom:5px; 
}


.cookieControl__Bar button + button {
    margin-left: 0px;
}

}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
.cookieControl__Bar--bottom-full{
   width:80%;
   margin:auto;
   margin-top: 5% !important;
   margin-bottom:5% !important;
 }
}
 

 </style>