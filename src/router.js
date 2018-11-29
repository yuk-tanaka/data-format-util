import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Email from './views/Email.vue'
import Zip from './views/Zip.vue'
import Pref from './views/Pref.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/email',
      name: 'Email',
      component: Email,
    },
    {
      path: '/zip',
      name: 'Zip',
      component: Zip,
    },
    {
      path: '/pref',
      name: 'Pref',
      component: Pref,
    }
  ]
})
