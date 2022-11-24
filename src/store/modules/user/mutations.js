import {SET_USERS, SET_USER, CREATE_USER} from './constants'

export default {
  [SET_USER](state, user) {
    state.user = user
  },
  [SET_USERS](state, users) {
    state.users = users
  },
  [CREATE_USER](state, user) {
    state.users.unshift(user)
  }
}
