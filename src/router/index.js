import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ''
    },
    {
      path: '/about_us',
      name: "aboutUs",
      component: ""
    },{
      path: "/our_agents",
      name: 'ourAgents',
      component: ""
    },
    {
      path: "/gallery",
      name: 'gallery',
      component: ""
    },
    {
      path: "/contact_us",
      name: 'contactUs',
      component: ""
    }


  ]
})

export default router
