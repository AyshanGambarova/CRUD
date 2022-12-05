import {createRouter, createWebHistory} from 'vue-router'
//Auth
import Login from '@/views/Login/routes'
//Pages
import Users from '@/views/Users/routes'
import Posts from '@/views/Users/views/Posts/routes'
import Products from '@/views/Products/routes'
import {ref} from 'vue'

const routes = [...Users, ...Posts, ...Products, ...Login]

let isUserLoggedIn = ref<boolean>(false)
if (localStorage.getItem('token') != null) {
  isUserLoggedIn.value = true
} else {
  isUserLoggedIn.value = false
}

const router = createRouter({
  history: createWebHistory(),
  //@ts-ignore
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to.meta.needsAuth)

  if (to.meta.needsAuth && !isUserLoggedIn.value) {
    next('login')
  } else if (to.meta.needsAuth && isUserLoggedIn.value) {
    next('/')
  } else {
    next()
  }
})

export default router
