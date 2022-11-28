import {defineComponent, ref, watch} from 'vue'
import {useStore} from 'vuex'
// Store
import {GET_USER} from '@/store/modules/user/constants'

// Components
import User from '@/components/User/index.vue'
import CreatePost from '@/components/CreatePost/index.vue'
import PostsList from '@/components/PostsList/index.vue'
// Enums
import {EnumStoreNamespace} from '@/enums'
// Types
import {TUser} from '@/types/User'

export default defineComponent({
  name: 'PageUser',
  //@ts-ignore
  components: {User, CreatePost, PostsList},
  setup() {
    const $store = useStore()
    let isMountedUserDetails = ref<boolean>(false)

    //ts examlpe
    // const userDataObject = ref<TUser>(<TUser>{})
    // const userDataArray = ref<TUser[]>([])
    // const userDataArrayExample = ref<string[]>(['test', '1'])

    const getUserDetails = () => {
      return $store.getters[EnumStoreNamespace.USER + '/' + GET_USER]
    }

    watch(getUserDetails, (userDetails: TUser) => {
      isMountedUserDetails.value = !!userDetails
    })

    return {
      isMountedUserDetails
    }
  }
})
