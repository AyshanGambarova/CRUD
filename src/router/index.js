import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home/routes'
import User from '@/views/User/routes'

const routes = [...Home, ...User]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
