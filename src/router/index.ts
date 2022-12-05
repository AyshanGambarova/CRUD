import {createRouter, createWebHistory} from 'vue-router'
//Auth
import Login from '@/views/Login/routes'
//Pages
import Users from '@/views/Users/routes'
import Posts from '@/views/Users/views/Posts/routes'
import Products from '@/views/Products/routes'
import {ref} from 'vue'

const routes = [...Users, ...Posts, ...Products, ...Login]

let haveToken = ref<boolean>(false)
if (localStorage.getItem('token') != null) {
  haveToken.value = true
} else {
  haveToken.value = false
}

const router = createRouter({
  history: createWebHistory(),
  //@ts-ignore
  routes
})
router.beforeEach((to, from, next) => {
  console.log('from', from)
  if ('needsToken' in to.meta && to.meta.needsToken && !haveToken.value) {
    next('/login')
    console.log('to', to)
    console.log('1', 'needsToken' in to.meta) //rootun adinin duzgunluyun yoxlamaq ucun
  } else if ('needsToken' in to.meta && !to.meta.needsToken && haveToken.value) {
    //token var amma login registere kecmek istiyirse bu hal
    next('/')
    console.log('2', 'needsToken' in to.meta)
    console.log('to', to)
  } else if (!('needsToken' in to.meta)) {
    //duzgun olmayan root adi olduqda bu hal
    next('/login')
  } else {
    next()
    console.log('to', to)
    console.log('3', 'needsToken' in to.meta)
  }
  //Problems
  //*****loginnen esas sehifeye kecir amma refreshden sonra

  //Snackbar componenti yarat ve error message interceptorda tutub yaz
  //searchpost duzelt
})

export default router
