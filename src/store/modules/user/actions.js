import axios from 'axios'
import { FETCH_USERS,FETCH_USER, SET_USERS,SET_USER,CREATE_USER, EDIT_USER } from './constants';

export default { 
    async [CREATE_USER]({ commit }, obj) {
      try {
        const response = await axios.post(
          `https://gorest.co.in/public/v2/users`,
          obj,
          {
            headers: {
              authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
        commit(CREATE_USER, response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async [FETCH_USERS]({ commit }, query) {
      try {
        const response = await axios.get(
          "https://gorest.co.in/public/v2/users",
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
            params: query,
          }
        );
        const pages = response.headers["x-pagination-pages"];
        const paginationOptions = {
          pages,
        };
        commit(SET_USERS, response.data);
        commit('pagination/'+"SET_P_O", paginationOptions, {root: true});
      } catch (error) {
        console.log(error);
      }
    },
    async [EDIT_USER]({ commit }, { userId, obj }) {
      try {
        // await axios({
        //   method: 'PUT',
        //   headers: { 'authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351' },
        //   data: obj,
        //   url: `https://gorest.co.in/public/v2/users/${id}`,
        // })
        await axios.put(
          `https://gorest.co.in/public/v2/users/${userId}`,
          { ...obj },
          {
            headers: {
              authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    async [FETCH_USER]({ commit }, userId) {
      try {
        const response = await axios.get(
          `https://gorest.co.in/public/v2/users/${userId}`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
        commit(SET_USER, response.data);
      } catch (error) {
        console.log(error);
      }
    },
   }