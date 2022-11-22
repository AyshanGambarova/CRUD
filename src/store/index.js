import { createStore } from "vuex";

import {user} from './modules/user'
import {post} from './modules/post'
import {pagination} from './modules/pagination'

export default createStore({
  modules: {
    user,
    post,
    pagination
  },
});
