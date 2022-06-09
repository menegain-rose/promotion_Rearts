import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import MLegal from '../views/MLegal.vue'
import Apropos from '../views/Apropos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/MLegal', name: 'MLegal', component: MLegal },
    { path: '/Apropos', name: 'Apropos', component: Apropos },
  ]
})

export default router
