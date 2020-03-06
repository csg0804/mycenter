import Vue from 'vue'
import Router from 'vue-router'

const Layout = r => require.ensure([], () => r(require('@/components/common/Layout')), 'Layout')
const Home = r => require.ensure([], () => r(require('@/components/home/Home')), 'Home')
const Works = r => require.ensure([], () => r(require('@/components/works/Works')), 'Works')
const My = r => require.ensure([], () => r(require('@/components/my/My')), 'My')

Vue.use(Router)

const routerlist = [
  { 
    path: '/', 
    name: 'layout', 
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home, meta: { title: "首页" } }
    ]
  },
  { 
    path: '/works', 
    name: 'layout', 
    component: Layout,
    children: [
      { path: '/works', name: 'works', component: Works, meta: { title: "作品列表" } }
    ]
  },
  { 
    path: '/my', 
    name: 'layout', 
    component: Layout,
    children: [
      { path: '/my', name: 'my', component: My, meta: { title: "个人中心" } }
    ]
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
