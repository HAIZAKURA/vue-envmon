import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path: '/env-mon',
    name: 'env-mon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "env-mon" */ '../views/EnvMon.vue')
    }
  },
  {
    path: '/pow-mon',
    name: 'pow-mon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "pow-mon" */ '../views/PowMon.vue')
    }
  },
  {
    path: '/dev-cfg',
    name: 'dev-cfg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "dev-cfg" */ '../views/DevCfg.vue')
    }
  },
  {
    path: '/acc-mgr',
    name: 'acc-mgr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "acc-mgr" */ '../views/AccMgr.vue')
    }
  },
  {
    path: '/air-mgr',
    name: 'air-mgr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "air-mgr" */ '../views/AirMgr.vue')
    }
  },
  {
    path: '/dat-que',
    name: 'dat-que',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "dat-que" */ '../views/DatQue.vue')
    }
  },
  {
    path: '/usr-mgr',
    name: 'usr-mgr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "usr-mgr" */ '../views/UsrMgr.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
