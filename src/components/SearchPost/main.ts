import {EnumStoreNamespace} from './../../enums/index'
import {TPost} from './../../types/Post'
import {FETCH_POSTS} from '@/store/modules/post/constants'
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    // #region States
    const $store = useStore()
    const $route = useRoute()
    // let obj = ref({
    //   title: '',
    //   body: ''
    // })
    let obj = ref<TPost>(<TPost>{
      title: '',
      body: ''
    })
    // let userId = route.params.id
    let userId = ref<number>(Number($route.params.id))

    // #endregion

    // #region Methods
    function searchPost() {
      $store.dispatch(EnumStoreNamespace.POST + '/' + FETCH_POSTS, {
        userId: userId.value,
        query: obj.value
      })
      obj.value = {
        id: 0,
        title: '',
        body: ''
      }
    }

    // #endregion

    return {
      obj,
      searchPost
    }
  }
}
