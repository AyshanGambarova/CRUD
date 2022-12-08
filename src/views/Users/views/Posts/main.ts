import {defineComponent, ref, watch} from 'vue'
import {useStore} from 'vuex'
// Store
import {GET_USER} from '@/store/modules/user/constants'
// Components
import User from './components/User/index.vue'
import CreatePost from './components/CreatePost/index.vue'
import PostsList from './components/PostList/index.vue'
// Enums
import {EnumStoreNamespace} from '@/enums'
// Types
import {TUser} from '@/types/User'
import {Getter} from '@/helpers/store'

export default defineComponent({
  name: 'PagePosts',
  //@ts-ignore
  components: {User, CreatePost, PostsList},
  setup() {
    const $store = useStore()
    let isMountedUserDetails = ref<boolean>(false)

    const getterUserDetails = () => {
      return Getter({
        namespace: EnumStoreNamespace.USER,
        getter: GET_USER
      })
    }

    watch(getterUserDetails, (userDetails: TUser) => {
      isMountedUserDetails.value = !!userDetails
    })

    return {
      isMountedUserDetails
    }
  }
})
