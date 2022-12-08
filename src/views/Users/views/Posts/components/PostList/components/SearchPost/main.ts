import {TPostFilter} from '@/types/Post'
import {ref} from 'vue'
import {useRoute} from 'vue-router'

export default {
  emits: ['submitFilter'],
  setup(props: any, context: any) {
    // #region States
    const $route = useRoute()
    let searchingPost = ref<TPostFilter>(<TPostFilter>{})
    let userId = ref<number>(Number($route.params.id))
    // #endregion

    // #region Methods
    function searchPost() {
      context.emit('submitFilter', searchingPost.value)
    }
    // #endregion

    return {
      searchingPost,
      searchPost
    }
  }
}
