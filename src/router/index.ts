import { createRouter, createWebHistory } from 'vue-router'
import PartnersView from '../views/PartnersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'partenaires',
      component: PartnersView
    }
  ]
})

export default router
