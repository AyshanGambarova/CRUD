import {EnumStoreNamespace} from '@/enums/index'
import {TPostGenerel} from '@/types/Post'
import {CREATE_POST} from '@/store/modules/post/constants'
import {defineComponent, ref} from 'vue'
import {useRoute} from 'vue-router'
import validations from '@/helpers/validations'
import {Action} from '@/helpers/store'

export default defineComponent({
  name: 'CreatePost',
  setup() {
    // #region States

    let creatingPost = ref<TPostGenerel>(<TPostGenerel>{
      title: '',
      body: ''
    })
    const $route = useRoute()
    const userId = ref<number>(Number($route.params.id))

    //Form validation

    let valid = ref<boolean>(true)
    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    // #endregion

    // #region Methods
    const actionCreatePost = (payload?: any) => {
      Action({
        namespace: EnumStoreNamespace.POST,
        action: CREATE_POST,
        payload
      })
    }
    async function createPost() {
      const {valid} = await form.value.validate()
      if (valid) {
        actionCreatePost({ userId: userId.value, creatingPost: creatingPost.value})
      } else {
        alert('Form is invalid')
      }
      // creatingPost.value = {
      //   title: '',
      //   body: ''
      // }
    }

    // #endregion

    return {
      creatingPost,
      valid,
      createPost,
      form,
      validations
    }
  }
})
