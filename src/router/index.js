import { createRouter, createWebHistory } from 'vue-router'
import TacheView from '../views/TacheView.vue'
import ProjetView from '../views/ProjetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tache', 
      component: TacheView
    },
    {
      path: '/projet',
      name: 'projet',
      component: ProjetView
    }
 
  ]
})

export default router
