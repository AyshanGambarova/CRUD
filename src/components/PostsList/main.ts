import {EnumStoreNamespace} from './../../enums/index'
import {TPost} from './../../types/Post'
import {onMounted, computed, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import axios from 'axios'

// Components
import SearchPost from '@/components/SearchPost/index.vue'
import {EDIT_POST, FETCH_POSTS, GET_POSTS} from '@/store/modules/post/constants'

export default {
  components: {SearchPost},
  setup() {
    // #region States
    const $route = useRoute()
    const $store = useStore()

    // const page = ref(1)
    const page = ref<number>(1)
    // let userId = $route.params.id
    let userId = ref<number>(Number($route.params.id))
    // const dialog = ref(false)
    const dialog = ref<boolean>(false)
    // const dialog2 = ref(false)
    const dialog2 = ref<boolean>(false)
    // const deletingPostId = ref(null)
    const deletingPostId = ref<number>(0)
    // const editingPostId = ref(null)
    const editingPostId = ref<number>(0)
    // const obj = ref({
    //   title: '',
    //   body: ''
    // })
    let obj = ref<TPost>(<TPost>{
      id: 0,
      title: '',
      body: ''
    })

    // #endregion

    // #region Methods
    function deletingPost(postId: number) {
      dialog2.value = true
      deletingPostId.value = postId
    }
    async function deletePost() {
      await axios
        .delete(`https://gorest.co.in/public/v2/posts/${deletingPostId.value}`, {
          headers: {
            Authorization: 'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
        .then(() => {
          dialog2.value = false
          fetchUserPosts(userId.value)
        })
    }
    function editingPost(post: TPost) {
      dialog.value = true
      editingPostId.value = post.id
      obj.value = {...post}
    }
    function editPost() {
      $store
        .dispatch(EnumStoreNamespace.POST + '/' + EDIT_POST, {
          postId: editingPostId.value,
          obj: obj.value
        })
        .then(() => {
          fetchUserPosts(userId.value)
          dialog.value = false
        })
    }
    function fetchUserPosts(userId: number, query?: object) {
      $store.dispatch(EnumStoreNamespace.POST + '/' + FETCH_POSTS, {userId, query})
    }

    // #endregion

    // #region Hooks
    const getPaginationOptions = computed(() => {
      return $store.getters['pagination/getPaginationOptions']
    })
    const getUserPosts = computed(() => {
      return $store.getters[EnumStoreNamespace.POST + '/' + GET_POSTS]
    })
    onMounted(() => {
      fetchUserPosts(userId.value)
    })

    //Get current page number
    watch(page, () => {
      let query = {page: page.value}
      fetchUserPosts(userId.value, query)
    })

    // #endregion

    return {
      obj,
      getUserPosts,
      getPaginationOptions,
      page,
      dialog,
      dialog2,
      editingPost,
      editPost,
      deletingPost,
      deletePost
    }
  }
}
