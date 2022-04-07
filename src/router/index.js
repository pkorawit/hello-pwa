import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'signin',

    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainLayoutView.vue'),
    children: [
      { path: "", name: "", component: () => import("../views/HomeView.vue") },
      {
        path: '/fav',
        name: 'favorite',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/addnew',
        name: 'addnew',
        component: () => import('../views/AddNewView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
