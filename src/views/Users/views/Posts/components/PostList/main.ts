import {EnumStoreNamespace} from '@/enums/index'
import {TPost, TPostFilter} from '@/types/Post'
import {onMounted, computed, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {EDIT_POST, FETCH_POSTS, GET_POSTS} from '@/store/modules/post/constants'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'
import {Action, Getter} from '@/helpers/store'
// Components
import SearchPost from './components/SearchPost/index.vue'

export default {
  components: {SearchPost},
  setup() {
    // #region States
    const $route = useRoute()
    const page = ref<number>(1)
    const payloadFilter = ref<TPostFilter>(<TPostFilter>{})
    let userId = ref<number>(Number($route.params.id))
    const dialog = ref<boolean>(false)
    const dialog2 = ref<boolean>(false)
    const deletingPostId = ref<number>(0)
    const editingPostId = ref<number>(0)
    let obj = ref<TPost>(<TPost>{
      id: 0,
      title: '',
      body: ''
    })

    // #endregion

    // #region Methods
    const actionFetchUserPosts = (payload?: any) => {
      Action({
        namespace: EnumStoreNamespace.POST,
        action: FETCH_POSTS,
        payload
      })
    }
    function deletingPost(postId: number) {
      dialog2.value = true
      deletingPostId.value = postId
    }
    async function deletePost() {
      try {
        const response = await $http({
          method: 'DELETE',
          url: `/posts/${deletingPostId.value}`
        })
        dialog2.value = false
        actionFetchUserPosts({userId: userId.value})
        const text = 'Post deleted successfully.'
        const color = 'success'
        Snackbar.show({
          text,
          color
        })
      } catch (error) {
        console.log(error)
      }
    }
    function editingPost(post: TPost) {
      dialog.value = true
      editingPostId.value = post.id
      obj.value = {...post}
    }
    function editPost() {
      Action({
        namespace: EnumStoreNamespace.POST,
        action: EDIT_POST,
        payload: {
          postId: editingPostId.value,
          editPost: obj.value
        }
      })
      dialog.value = false
      actionFetchUserPosts({userId: userId.value})
    }

    function handleSubmitFilter(filterPayload: any) {
      page.value = 1
      payloadFilter.value = {...filterPayload}
      const paginationObj = {page: page.value}
      const query = {...payloadFilter.value, ...paginationObj}
      actionFetchUserPosts({query, userId: userId.value})
    }
    // #endregion

    // #region Computed
    const getPaginationOptions = computed(() => {
      return Getter({
        namespace: 'pagination',
        getter: 'getPaginationOptions'
      })
    })
    const getUserPosts = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.POST,
        getter: GET_POSTS
      })
    })

    // #endregion

    // #region Hooks
    onMounted(() => {
      actionFetchUserPosts({userId: userId.value})
    })
    // #endregion

    // #region Watch
    //Get current page number
    watch(page, () => {
      const paginationObj = {page: page.value}
      const query = {...payloadFilter.value, ...paginationObj}
      actionFetchUserPosts({query, userId: userId.value})
    })
    // #endregion

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
      deletePost,
      handleSubmitFilter
    }
  }
}
