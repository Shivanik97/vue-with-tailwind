import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('../components/ArticleCard.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/LoginComp.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/ContactForm.vue')
    }
  ]
})

export default router
