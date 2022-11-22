import axios from 'axios'
import { FETCH_POSTS, SET_POSTS,CREATE_POST,EDIT_POST } from './constants';

export default {
    async [FETCH_POSTS]({ commit }, {userId,query}) {
        try {
          const response = await axios.get(
            `https://gorest.co.in/public/v2/users/${userId}/posts`,
            {
              headers: {
                Authorization:
                  "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
              },
               params: query
            }
          );
          const pages = response.headers["x-pagination-pages"];
          const paginationOptions = {
            pages,
          };
          commit("pagination/"+"SET_P_O", paginationOptions, {root: true});
          commit(SET_POSTS, response.data);
        } catch (error) {
          console.log(error);
        }
      },
      async [CREATE_POST]({ commit }, { userId, obj }) {
        try {
          const response = await axios.post(
            `https://gorest.co.in/public/v2/users/${userId}/posts`,
            { ...obj },
            {
              headers: {
                authorization:
                  "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
              },
            }
          );
          commit(CREATE_POST, response.data);
        } catch (error) {
          console.log(error);
        }
      },
      async [EDIT_POST]({ commit }, { postId, obj }) {
        try {
          await axios({
            method: "PUT",
            headers: {
              authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
            data: obj,
            url: `https://gorest.co.in/public/v2/posts/${postId}`,
          });
        } catch (error) {
          console.log(error);
        }
      },
}