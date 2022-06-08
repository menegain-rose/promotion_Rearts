<template>
  <main class="items-center text-center object-center">
    <div class="text-center">
      <h1 class="text-2xl my-4 font-raleway">Découvrez réarts !</h1>
  
      <p>
        Un site qui mélange l’imagination de vos enfants et le travail d’un artiste.
      </p>

      <h3 class="text-Red_primary">
        Un petit dessin pour lui, un grand souvenir pour vous
      </h3>
    </div>
      
      <div class="flex justify-center">
        <Bouton class="">
          <slot>Visiter  Réarts</slot>
        </Bouton>
      </div>

      <div class="flex justify-center">
        <img src="/icones/Logonoir.svg" class="w-60 h-auto m-8" alt="LogoRéarts">
      </div>
      
    <p>
    Vous connaissez peut-être l'artiste Thomas Romain, il est connu principalement pour redessiner les dessins de son enfant.
    </p>

    <div class="flex justify-around">
      <img src="/imageshome/enfant-bleu.png" class="w-60 h-auto my-3" alt="dessin d'enfant">
      <img src="/imageshome/artiste-bleu.png" class="w-60 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p>
      Des oeuvres uniques
    </p>

    <div class="flex justify-around">
      <img src="/imageshome/enfant-gris.png" class="w-60 h-auto my-3" alt="dessin d'enfant">
      <img src="/imageshome/artiste-gris.png" class="w-60 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p>
      Une expérience pour l'artiste et l'enfant
    </p>
    
    <div class="flex justify-around">
      <img src="/imageshome/enfant-violet.png" class="w-60 h-auto my-3" alt="dessin d'enfant">
      <img src="/imageshome/artiste-violet.png" class="w-60 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p>
      Un cadeau original
    </p>

    <p>
      Réarts donne un porcentage d'achat à des associations, et vous pourrez également faire des dons directement sur notre site.
    </p>

  </main>
</template>

<script>
import Bouton from "/src/components/icons/bouton.vue"



export default {

  components: { Bouton },
};
</script>