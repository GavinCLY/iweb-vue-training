import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login.vue'
import AnimationArray from '../components/AnimationArray.vue'
import Carousel from '../components/Carousel.vue'
import LifeCycle from '../components/LifeCycle.vue'
import Pages from '../components/Pages.vue'
import Register from '../components/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/animation',
      name: 'Animation',
      component: AnimationArray
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
