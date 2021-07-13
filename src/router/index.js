import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simpson1_8',
    name: 'Simpson1_8',
    component: () => import('@/views/ViewSimpson1_8.vue')
  },
  {
    path: '/trapecio',
    name: 'Trapecio',
    component: () => import('@/views/ViewTrapecio.vue')
  },
  {
    path: '/simpson3_8',
    name: 'Simpson3_8',
    component: () => import('@/views/ViewSimpson3_8.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
