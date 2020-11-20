import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const column = () => import('@/views/column.vue')
const Login = () => import('@/views/Login.vue')
const Home = () => import('@/views/Home.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/column',
    name: 'column',
    component: column
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
