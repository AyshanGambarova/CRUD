import axios from 'axios'
import {FETCH_POSTS, SET_POSTS, CREATE_POST, EDIT_POST} from './constants'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'

let text = '';
let color='';
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
  async [CREATE_POST]({commit}, {userId, creatingPost}) {
    try {
      const response = await $http({
        method: 'POST',
        data: creatingPost,
        url: `/users/${userId}/posts`
      })
      text = 'Post created successfully.'
      color='success'
      Snackbar.show({
        text,
        color
      })
      commit(CREATE_POST, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [EDIT_POST]({commit}, {postId, editPost}) {
    try {
      const response = await $http({
        method: 'PUT',
        data: editPost,
        url: `/posts/${postId}`
      })
      text = 'Post edited successfully.'
      color='success'
      Snackbar.show({
        text,
        color
      })
    } catch (error) {
      console.log(error)
    }
  }
}
