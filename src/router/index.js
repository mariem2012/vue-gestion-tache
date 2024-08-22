import { createRouter, createWebHistory } from 'vue-router'
import TacheView from '../views/TacheView.vue'
import ProjetView from '../views/ProjetView.vue'
import AjoutTache from '@/components/Taches/AjoutTache.vue'
import ListTache from '@/components/Taches/ListTache.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TacheView
    },
    {
      path: '/projet',
      component: ProjetView
    },
    {
      path: '/ajoutlist',
      component: AjoutTache
    },
    {
      path: '/listtache',
      component: ListTache
    }

 
  ]
})

export default router
