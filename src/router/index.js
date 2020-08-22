import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Projects from '../views/Projects.vue';
import Inquiries from '../views/Inquiries.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/:name',
    name: 'Project',
    component: Projects,
    props: true
  },
  {
    path: '/inquiries',
    name: 'Inquiries',
    component: Inquiries
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function() {
    return {x: 0, y: 0}
  }
})

export default router
