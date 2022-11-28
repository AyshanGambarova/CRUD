import { EnumStoreNamespace } from './../../enums/index';
import {TPost} from './../../types/Post'
import {CREATE_POST} from '@/store/modules/post/constants'
import {defineComponent, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'CreatePost',
  setup() {
    // #region States

    // let obj = ref({
    //   title: '',
    //   body: ''
    // })
    let obj = ref<TPost>(<TPost>{
      id:0,
      title: '',
      body: ''
    })
    const $store = useStore()
    const $route = useRoute()
    // let userId = $route.params.id
    const userId = ref<number>(Number($route.params.id))

    //Form validation

    // let valid = ref(true)
    let valid = ref<boolean>(true)
    let titleRules = ref([(v: string) => !!v || 'Required'])
    let bodyRules = ref([(v: string) => !!v || 'Required'])

    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    // #endregion

    // #region Methods

    async function createPost() {
      const {valid} = await form.value.validate()
      if (valid) {
        $store.dispatch(EnumStoreNamespace.POST+'/' + CREATE_POST, {
          userId: userId.value,
          obj: obj.value
        })
        alert('Post created')
      } else {
        alert('Form is invalid')
      }
      obj.value = {
        id:0,
        title: '',
        body: ''
      }
    }

    // #endregion

    return {
      obj,
      valid,
      titleRules,
      bodyRules,
      createPost,
      form
    }
  }
})