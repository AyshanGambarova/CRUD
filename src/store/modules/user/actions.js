import axios from 'axios'
import { FETCH_USERS,FETCH_USER, SET_USERS,SET_USER,CREATE_USER, EDIT_USER } from './constants';
import $http from '@/utils/interceptors'

export default { 
    async [CREATE_USER]({ commit }, obj) {
      try {
        const response = await $http({
          method: 'POST',
          data: obj,
          url: `/users`,
        })
        commit(CREATE_USER, response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async [FETCH_USERS]({ commit }, query) {
      try {
        const response = await $http({
          method: 'GET',
          params: query,
          url: `/users`,
        })
        commit(SET_USERS, response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async [EDIT_USER]({ commit }, { userId, obj }) {
      try {
        const response=await $http({
          method: 'PUT',
          data: obj,
          url: `/users/${userId}`,
        })
        
      } catch (error) {
        console.log(error);
      }
    },
    async [FETCH_USER]({ commit }, userId) {
      try {
        const response = await $http({
          method: 'GET',
          url: `/users/${userId}`,
        })
        commit(SET_USER, response.data);
      } catch (error) {
        console.log(error);
      }
    },
   }