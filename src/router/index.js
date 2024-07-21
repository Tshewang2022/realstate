import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import { Blogs, ContactUs, Gallery, OurAgents, Projects } from '@/views'

import AboutUs from '../views/AboutUs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/about_us',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/our_agents',
      name: 'ourAgents',
      component: OurAgents
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/contact_us',
      name: 'contactUs',
      component: ContactUs
    }
  ]
})

export default router
