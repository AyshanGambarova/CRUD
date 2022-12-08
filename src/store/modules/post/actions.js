import axios from 'axios'
import {FETCH_POSTS, SET_POSTS, CREATE_POST, EDIT_POST} from './constants'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'
import {apiCreateUserPost, apiEditUserPost, apiGetUserPosts} from '@/apis/post'

let text = ''
let color = ''
export default {
  async [FETCH_POSTS]({commit}, {userId, query}) {
    try {
      const response = await apiGetUserPosts({userId, query})
      commit(SET_POSTS, response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [CREATE_POST]({commit}, {userId, creatingPost}) {
    try {
      const response = await apiCreateUserPost(userId, creatingPost)
      text = 'Post created successfully.'
      color = 'success'
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
      const response = await apiEditUserPost(postId, editPost)
      text = 'Post edited successfully.'
      color = 'success'
      Snackbar.show({
        text,
        color
      })
    } catch (error) {
      console.log(error)
    }
  }
}
