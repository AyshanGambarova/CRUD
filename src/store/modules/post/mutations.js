import {SET_POSTS, CREATE_POST} from './constants'

export default {
  [SET_POSTS](state, postsArr) {
    state.userPosts = postsArr
  },
  [CREATE_POST](state, postObj) {
    state.userPosts.unshift(postObj)
    //Merge arrays
    // state.userPosts = [...[userPost], ...state.userPosts]
  }
}
