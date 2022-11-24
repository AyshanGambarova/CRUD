import axios from 'axios'
import {FETCH_POSTS, SET_POSTS, CREATE_POST, EDIT_POST} from './constants'
import $http from '@/utils/interceptors'

export default {
  async [FETCH_POSTS]({commit}, {userId, query}) {
    try {
      const response = await $http({
        method: 'GET',
        params: query,
        url: `/users/${userId}/posts`
      })
      commit(SET_POSTS, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [CREATE_POST]({commit}, {userId, obj}) {
    try {
      const response = await $http({
        method: 'POST',
        data: obj,
        url: `/users/${userId}/posts`
      })

      commit(CREATE_POST, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [EDIT_POST]({commit}, {postId, obj}) {
    try {
      const response = await $http({
        method: 'PUT',
        data: obj,
        url: `/posts/${postId}`
      })
    } catch (error) {
      console.log(error)
    }
  }
}
