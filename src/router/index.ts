import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: () => import('@/views/ClothesView.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('@/views/LocationView.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('@/views/ScheduleView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/MenuView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    }
  ]
})

export default router
