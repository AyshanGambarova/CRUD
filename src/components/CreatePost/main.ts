import {EnumStoreNamespace} from './../../enums/index'
import {TPost} from './../../types/Post'
import {CREATE_POST} from '@/store/modules/post/constants'
import {defineComponent, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import validations from '@/helpers/validations'

export default defineComponent({
  name: 'CreatePost',
  setup() {
    // #region States

    let obj = ref<TPost>(<TPost>{
      id: 0,
      title: '',
      body: ''
    })
    const $store = useStore()
    const $route = useRoute()
    const userId = ref<number>(Number($route.params.id))

    //Form validation

    let valid = ref<boolean>(true)
    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    // #endregion

    // #region Methods

    async function createPost() {
      const {valid} = await form.value.validate()
      if (valid) {
        $store.dispatch(EnumStoreNamespace.POST + '/' + CREATE_POST, {
          userId: userId.value,
          obj: obj.value
        })
        alert('Post created')
      } else {
        alert('Form is invalid')
      }
      obj.value = {
        id: 0,
        title: '',
        body: ''
      }
    }

    // #endregion

    return {
      obj,
      valid,
      createPost,
      form,
      validations
    }
  }
})
