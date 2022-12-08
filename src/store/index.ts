import {createStore} from 'vuex'
import {user} from './modules/user'
import {post} from './modules/post'
import {pagination} from './modules/pagination'
import {spinner} from './modules/spinner'
import {drawer} from './modules/drawer'

export default createStore({
  modules: {
    user,
    post,
    pagination,
    spinner,
    drawer
  }
})
