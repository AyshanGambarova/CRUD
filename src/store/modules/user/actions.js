import axios from 'axios'
import {FETCH_USERS, FETCH_USER, SET_USERS, SET_USER, CREATE_USER, EDIT_USER} from './constants'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'

let text = '';
let color='';
export default {
  async [CREATE_USER]({commit}, creatingUser) {
    try {
      const response = await $http({
        method: 'POST',
        data: creatingUser,
        url: `/users`
      })
      commit(CREATE_USER, response.data)
      text = 'User created successfully.'
      color='success'
      Snackbar.show({
        text,
        color
      })
    } catch (error) {
      console.log(error)
      text = 'Something went wrong,try again.',
      color='red darken-2'
      Snackbar.show({
        text,
        color
      })
    }
  },
  async [FETCH_USERS]({commit}, query) {
    try {
      const response = await $http({
        method: 'GET',
        params: query,
        url: `/users`
      })
      commit(SET_USERS, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [EDIT_USER]({commit}, {userId, editUser}) {
    try {
      const response = await $http({
        method: 'PUT',
        data: editUser,
        url: `/users/${userId}`
      })
      text = 'User edited successfully.'
      color='success'
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
      const response = await $http({
        method: 'GET',
        url: `/users/${userId}`
      })
      commit(SET_USER, response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
