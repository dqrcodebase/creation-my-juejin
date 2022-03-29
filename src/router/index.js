import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV).default

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: _import('Home/index'),
    meta: {
      title: '掘金 - 代码不止，掘金不停'
    }
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/pins',
    name: 'pins',
    component: _import('Pins/index'),
  },
  {
    path: '/404',
    name: '404',
    component: _import('404/index'),
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
