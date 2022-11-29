import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home/routes'
import User from '@/views/User/routes'
import Products from '@/views/Products/routes'

const routes = [...Home, ...User,...Products]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
