import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    user: {},
    userPosts: [],
    paginationOptions: {},
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
    getUserPosts: (state) => state.userPosts,
    getPaginationOptions: (state) => state.paginationOptions
    
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    CREATE_USER(state, user) {
      state.users.unshift(user);
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USER_POSTS(state, postsArr) {
      state.userPosts = postsArr;
    },
    SET_P_O(state, paginationOptions) {
      state.paginationOptions = paginationOptions;
    },
    CREATE_USER_POST(state, postObj) {
      state.userPosts.unshift(postObj);
      //Merge arrays
      // state.userPosts = [...[userPost], ...state.userPosts]
    },
  },
  actions: {
    async createUser({ commit }, obj) {
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
        commit("CREATE_USER", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers({ commit }, query) {
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
        commit("SET_P_O", paginationOptions);
        commit("SET_USERS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser({ commit }, id) {
      try {
        await axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
          headers: {
            Authorization:
              "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async editUser({ commit }, { id, obj }) {
      try {
        // await axios({
        //   method: 'PUT',
        //   headers: { 'authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351' },
        //   data: obj,
        //   url: `https://gorest.co.in/public/v2/users/${id}`,
        // })
        await axios.put(
          `https://gorest.co.in/public/v2/users/${id}`,
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
    async getUser({ commit }, id) {
      try {
        const response = await axios.get(
          `https://gorest.co.in/public/v2/users/${id}`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
        commit("SET_USER", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUserPosts({ commit }, id) {
      try {
        const response = await axios.get(
          `https://gorest.co.in/public/v2/users/${id}/posts`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
        commit("SET_USER_POSTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createPost({ commit }, { id, obj }) {
      try {
        const response = await axios.post(
          `https://gorest.co.in/public/v2/users/${id}/posts`,
          { ...obj },
          {
            headers: {
              authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
        commit("CREATE_USER_POST", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePost({ commit }, { postId, userId }) {
      try {
        await axios.delete(
          `https://gorest.co.in/public/v2/users/${userId}/posts/${postId}`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    async editPost({ commit }, { userId, postId, obj }) {
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
  },
  modules: {},
});
