import Vue from 'vue'
import VueRouter from 'vue-router'
import Stordc from '../views/Stordc'
import Intmov from '../views/Intmov'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Stordc,
    meta: { title: 'LAMEP APP' }
  },
  {
    path: '/intmov',
    component: Intmov,
    meta: { title: 'LAMEP APP' }
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
