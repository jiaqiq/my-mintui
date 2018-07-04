import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/pages/home'
import lazyLoad from '@/components/pages/lazyLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/lazyLoad',
      name: 'lazyLoad',
      component: lazyLoad
    }
  ]
})
