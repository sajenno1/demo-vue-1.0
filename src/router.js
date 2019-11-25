import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//路由懒加载--性能优，推荐使用
const newView = require('@/views/NewView');
const NewView = resolve => require.ensure([], () => resolve(newView), 'SOME-VIEWS');



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/newview',
      name: 'newview',
      component: NewView
    }
  ]
})
