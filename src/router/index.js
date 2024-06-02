import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RepoView from '@/views/RepoView.vue'
import SingleRepoView from '@/views/SingleRepoView.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
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
      path: '/repo/:name/:id',
      name: "SingleRepoView",
      props: true,
      component: SingleRepoView
    },
    {
      path: '/:catchAll(.*)',
      name: "not-found",
      component: () => import("../views/NotFoundView.vue")
    },
    {
      path: '/repo/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/repo/' + to.params.afterEvent }
      }
    },
    {
      path: "/404/:resource",
      name: "404Resource",
      props: true,
      component: () => import("../views/NotFoundView.vue")
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: () => import('../views/NetworkErrorView.vue')
    }
  ]
})

export default router


