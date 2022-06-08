<template>
  <header class="relative bg-black-primary flex justify-between items-center h-20 pl-4">

      <RouterLink to="/" class="flex h-full items-center -ml-6">
        <img src="/icones/Logoblanc.svg" class="w-auto h-24 mt-5" alt="Logo Réarts">
      </RouterLink>


      <nav class="flex pr-8 pl-5 h-full">
        <div class="pr-5 h-full flex items-center">
          <RouterLink to="/Apropos">
              <h3>A propos</h3>
          </RouterLink>
        </div>
        <div class="relative z-50 h-full flex items-center">
          <Bouton class=" m-3">
            <RouterLink to="/Inscription" class=" m-3">
            <slot>S'inscrire</slot>
            </RouterLink>
          </Bouton>
        </div>
      </nav>

  </header>


  <main class="bg-blanc-primary mx-5 my-8">
  <RouterView />
  </main>


  <footer>
    <section class="flex flex-col items-center text-center bg-HeadFoot text-PrincipalyText pt-4 pb-8 bg-black-primary text-blanc-primary">
      <div class="flex items-center">
        <img class="w-28 h-auto -mx-6" src="/icones/Logoblanc.svg" alt="">
        <h3 class="font-comfortaa font-normal text-xl">éarts</h3>
      </div>
        <span class="font-comfortaa font-normal text-lg ">Nous rejoindre</span>
      <div>
        <Facebook class="fill-blanc-primary inline-block m-3 mx-3"></Facebook>
        <Instagram class="fill-blanc-primary inline-block m-3 mx-3"></Instagram>
        <Youtube class="fill-blanc-primary inline-block m-3 mx-3"></Youtube>
      </div>
        <Bouton class=" m-3">
          <RouterLink to="/Inscription" class=" m-3">
          <slot>S'inscrire</slot>
            </RouterLink>
        </Bouton>

        <RouterLink to="/Mlegal" class=" m-3">
          <span>Mentions légales</span>
        </RouterLink>

    </section>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { MenuIcon } from "@heroicons/vue/outline"
import Facebook from "/src/components/icons/facebook.vue";
import Instagram from "/src/components/icons/instagram.vue";
import Youtube from "/src/components/icons/youtube.vue";
import croix from "/src/components/icons/croix.vue";
import Bouton from "/src/components/icons/bouton.vue"



export default {

  components: { 
    RouterLink,
    RouterView,
    MenuIcon, 
    Facebook, 
    Instagram, 
    Youtube, 
    croix, 
    Bouton },
};
</script>