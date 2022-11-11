import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users:[],
    user:{},
  },
  getters: {
    getUsers:(state)=>state.users,
    getUser:(state)=>state.user
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const data = await axios.get('https://gorest.co.in/public/v2/users', {
          headers: {
            'Authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
          commit('SET_USERS', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
    async deleteUser({ commit },id) {
      try {
        await axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
          headers: {
            'Authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
        }
        catch (error) {
            console.log(error)
        }
    },
    async editUser({ commit },{id,obj}) {
      console.log('obj', obj);
      try {
        // await axios({
        //   method: 'PUT',
        //   headers: { 'authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351' },
        //   data: obj,
        //   url: `https://gorest.co.in/public/v2/users/${id}`,
        // })
        await axios.put(`https://gorest.co.in/public/v2/users/${id}`, 
        {...obj},
        {
          headers: {
            'authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
        }
        catch (error) {
            console.log(error)
        }
    },
    async getUser({ commit },id) {
      try {
        const data = await axios.get(`https://gorest.co.in/public/v2/users/${id}`, {
          headers: {
            'Authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
          commit('SET_USER', data.data)
          console.log(data.data);
        }
        catch (error) {
            console.log(error)
        }
    },
  },
  modules: {
  }
})
