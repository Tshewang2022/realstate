import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import { Blogs, ContactUs, Gallery, OurAgents, Projects } from '@/views'

import AboutUs from '../views/AboutUs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'menu',
      component: AboutUs
    }
  ]
})

export default router
