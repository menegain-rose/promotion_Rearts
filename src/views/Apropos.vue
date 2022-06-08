<template>
    <main>
        <h2>A propos</h2>

        <p>
            L'apparition de "Réarts" à débuté en janvier 2022, par 3 étudiants en BUT MMI à Montbéliard. <br> <br>
            Maxence Cante, Léopold Ohnimus, et Rose Menegain ont créé ce site web pour offrir de nouveaux souvenirs aux enfants. <br> <br>
            Dans cet univers, les dessins d'enfants prendront donc vie avec l'un des styles particuliers de nos artistes présents sur le site.
            Les trois fondateurs de Réarts ont donc mis leurs compétences à profit pour vous satisfaire.
        </p>


        <h4 class="pt-6">
            Contactez-nous en cas de problèmes
        </h4>

        <div class="h-96 -mt-20"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-Gris_Clair w-full shadow rounded p-6 sm:p-12 -mt-72">
                <form action="" method="post">
                    <div class="md:flex items-center">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Email</label>
                            <input type="text" class="font-comfortaa text-white-primary p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-Red_primary rounded" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-6">
                        <div class="w-full flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Objet</label>
                            <input type="text" class="font-comfortaa text-white-primary p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-Red_primary rounded"/>
                        </div>
                        
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-6">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Message</label>
                            <textarea type="text" class="h-40 text-base font-comfortaa text-white-primary p-3 focus:outline-none focus:border-blue-700 mt-4 bg-Red_primary border-0 rounded"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <Bouton class="mt-6  focus:ring-2 focus:ring-offset-1 focus:ring-red-900 focus:outline-none">
                            Send message
                        </Bouton>
                    </div>
                </form>
            </div>
        </div>
    </main>


</template>

<script>
import Bouton from "/src/components/icons/bouton.vue";

export default {
    components: {
        Bouton,

    }
}

</script>
