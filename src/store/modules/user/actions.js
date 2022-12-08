import {FETCH_USERS, FETCH_USER, SET_USERS, SET_USER, CREATE_USER, EDIT_USER} from './constants'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'
import {apiGetUsers, apiGetUser, apiEditUser, apiCreateUser} from '@/apis/user'

let text = ''
let color = ''
export default {
  async [CREATE_USER]({commit}, creatingUser) {
    try {
      const response = await apiCreateUser(creatingUser)
      commit(CREATE_USER, response.data)
      text = 'User created successfully.'
      color = 'success'
      Snackbar.show({
        text,
        color
      })
    } catch (error) {
      console.log(error)((text = 'Something went wrong,try again.')), (color = 'red darken-2')
      Snackbar.show({
        text,
        color
      })
    }
  },
  async [FETCH_USERS]({commit}, query) {
    try {
      const response = await apiGetUsers(query)
      commit(SET_USERS, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [EDIT_USER]({commit}, {userId, editUser}) {
    try {
      //*2 parametri 1 obyekt kimi gonderende bele gonderirik
      // const payload = {
      //   userId: userId,
      //   editUser: editUser
      // }
      // const response = await apiEditUser({userId, editUser})

      //*2 ayri paramert kimi gonderende bele gonderirik
      const response = await apiEditUser(userId, editUser)

      text = 'User edited successfully.'
      color = 'success'
      Snackbar.show({
        text,
        color
      })
    } catch (error) {
      console.log(error)
    }
  },
  async [FETCH_USER]({commit}, userId) {
    try {
      const response = await apiGetUser(userId)
      commit(SET_USER, response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
