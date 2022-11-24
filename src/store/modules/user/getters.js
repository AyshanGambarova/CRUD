import {GET_USERS, GET_USER} from './constants'

export default {
  [GET_USERS]: (state) => state.users,
  [GET_USER]: (state) => state.user
}
