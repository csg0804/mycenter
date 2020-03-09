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
    component: Layout,
    redirect: { name: 'home' },
    children: [
      { path: '/', name: 'home', component: Home, meta: { title: "首页" } }
    ]
  },
  { 
    path: '/works', 
    component: Layout,
    redirect: { name: 'works' },
    children: [
      { path: '/works', name: 'works', component: Works, meta: { title: "我的项目" } }
    ]
  },
  { 
    path: '/my', 
    component: Layout,
    redirect: { name: 'my' },
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
