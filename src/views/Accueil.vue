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
      
      <div class="flex justify-center mt-7">
        <Bouton class="">
          <slot>Visiter  Réarts</slot>
        </Bouton>
      </div>

      <div class="flex justify-center">
        <img src="/icones/Logonoir.svg" class="w-60 h-auto m-8" alt="LogoRéarts">
      </div>
      
    <p class="mb-8">
    Vous connaissez peut-être l'artiste Thomas Romain, <br>
    il est connu principalement pour redessiner les dessins de son enfant.
    </p>
    <h3 class="text-Red_primary">
      Nos principes sont : 
    </h3>
    <h3 class="text-Red_primary">
      - permettre à pleins d'autres enfants de recevoir se genre de souvenirs uniques et inoubliables
    </h3>
    <h3 class="text-Red_primary">
      - permettre d'aider des associations qui nous tiennent à coeur
    </h3>
    <h3 class="text-Red_primary">
      - permettre à des artistes de gagner de l'argent en vendant leurs services et 
    </h3>

    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-bleu.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-bleu.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      Passer 
    </p>

    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-gris.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-gris.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      Une expérience pour l'artiste et l'enfant
    </p>
    
    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-violet.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-violet.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      N'hésitez plus, rejoingnez réarts ! <br>
      Créez un compte et découvrez les différents artistes et associations sur notre compte !
    </p>

  

  </main>
</template>

<script>
import Bouton from "/src/components/icons/bouton.vue"



export default {

  components: { Bouton },
};
</script>