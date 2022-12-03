import {createRouter, createWebHistory} from 'vue-router'
import Users from '@/views/Users/routes'
import Posts from '@/views/Users/views/Posts/routes'
import Products from '@/views/Products/routes'

const routes = [...Users, ...Posts, ...Products]

const router = createRouter({
  history: createWebHistory(),
  //@ts-ignore
  routes
})

export default router
