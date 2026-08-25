import Atractivos from '@/Views/atractivos.vue'
import Contacto from '@/Views/contacto.vue'
import Gastronomia from '@/Views/gastronomia.vue'
import Home from '@/Views/home.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/atractivos', component: Atractivos},
    { path: '/gastronomia', component: Gastronomia},
    { path: '/contacto', component: Contacto}
  ]
})

export default router