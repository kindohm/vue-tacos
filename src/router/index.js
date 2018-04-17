import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RandomTaco from '@/components/RandomTaco'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hi',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'RandomTaco',
      component: RandomTaco
    }
  ]
});
