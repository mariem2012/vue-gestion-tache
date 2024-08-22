import { createRouter, createWebHistory } from 'vue-router'
import TacheView from '../views/TacheView.vue'
import ProjetView from '../views/ProjetView.vue'
import AjoutTache from '@/components/Taches/AjoutTache.vue'
import ListTache from '@/components/Taches/ListTache.vue'
import AjoutProjet from '@/components/Projets/AjoutProjet.vue'
import ListProjet from '@/components/Projets/ListProjet.vue'
import ModifiTache from '@/components/Taches/ModifiTache.vue'

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
    },
    {

      path: '/ajoutprojet',
      component: AjoutProjet
    },
    {
      path: '/listprojet',
      component: ListProjet
    },
    // {
    //   path: '/modifietache',
    //   component: ModifiTache
    // }
    {
      path: '/modifietache/:id',  // Notez le paramètre dynamique :id
      component: ModifiTache,
      props: true  // Passer le paramètre comme props
    }
    
  ]
})

export default router
