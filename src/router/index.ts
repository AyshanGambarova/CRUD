import {createRouter, createWebHistory} from 'vue-router'
//Auth
import Login from '@/views/Login/routes'
//Pages
import Users from '@/views/Users/routes'
import Posts from '@/views/Users/views/Posts/routes'
import Products from '@/views/Products/routes'

const routes = [...Users, ...Posts, ...Products, ...Login]

const router = createRouter({
  history: createWebHistory(),
  //@ts-ignore
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.needsToken
  let haveToken: boolean = localStorage.getItem('token') != null

  if (requiresAuth && !haveToken) {
    next('/login')
  } else if (!requiresAuth && haveToken) {
    next('/')
  } else if (!('needsToken' in to.meta)) {
    next('/login')
  } else {
    next()
  }

  //Snackbar componenti yarat ve error message interceptorda tutub yaz
  //searchpost duzelt
})

export default router
