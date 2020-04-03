import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home')

Vue.use(Router)

const routerlist = [
  { 
    path: '/', 
    name: 'home',
    component: Home,
    meta: { title: "首页" }
  }
]

const router = new Router({
  routes: routerlist
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;
