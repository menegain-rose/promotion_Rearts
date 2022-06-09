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
        <Bouton class=" m-3">
          <a href="https://rearts.leopold-ohnimus.fr"> 
              Découvrir Réarts
            </a>
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
      - Permettre à pleins d'autres enfants de recevoir ce genre de souvenirs uniques et inoubliables
    </h3>
    <h3 class="text-Red_primary">
      - Permettre d'aider des associations qui nous tiennent à coeur
    </h3>
    <h3 class="text-Red_primary">
      - Permettre à des artistes de gagner de l'argent en vendant leurs services. 
    </h3>

    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-bleu.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-bleu.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      Chaque artiste à un style propre à lui, <br>
      Nous offrons la possibilité aux artistes de montrer leurs compétences et des exemples de leur travail.
    </p>

    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-gris.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-gris.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      Réarts offre une expérience à l'artiste et à l'enfant. <br>
      Nh'ésitez plus, et venez partager un moment exceptionnel  ! 
    </p>
    
    <div class="flex justify-center items-center">
      <img src="/imageshome/enfant-violet.png" class="w-40 h-auto my-3" alt="dessin d'enfant">
      <img src="/icones/fleche-droite.png" class="w-14 h-auto m-3" alt="Fleche">
      <img src="/imageshome/artiste-violet.png" class="w-40 h-auto my-3" alt="dessin d'artiste">
    </div>

    <p class="my-10">
      N'hésitez plus, rejoingnez Réarts ! <br>
      Créez un compte et découvrez les différents artistes et associations sur notre site !
    </p>

  

  </main>
</template>

<script>
import Bouton from "/src/components/icons/bouton.vue"



export default {

  components: { Bouton },
};
</script>