import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RepoView from '@/views/RepoView.vue'
import SingleRepoView from '@/views/SingleRepoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/repos",
      name: 'repos',
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
      component: RepoView,
      
    },
    {
      path: '/repo/:name',
      name: "SingleRepoView",
      props: true,
      component: SingleRepoView
    }
  ]
})

export default router


