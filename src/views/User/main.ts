import {defineComponent, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
// Store
import {GET_USER} from '@/store/modules/user/constants'

// Components
// import User from '@/components/User/index.vue'
// import CreatePost from '@/components/CreatePost/index.vue'
// import PostsList from '@/components/PostsList/index.vue'
// Enums
import {EnumStoreNamespace} from '@/enums'
// Types
import {TUser} from '@/types/User'

export default defineComponent({
  name: 'PageUser',
  //@ts-ignore
  // components: {User, CreatePost, PostsList},
  setup() {
    const $route = useRoute()

    console.log($route)
    debugger
    // const $store = useStore()
    // let isMountedUserDetails = ref<boolean>(false)
    // const getUserDetails = () => {
    //   return $store.getters[EnumStoreNamespace.USER + '/' + GET_USER]
    // }

    // watch(getUserDetails, (userDetails: TUser) => {
    //   isMountedUserDetails.value = !!userDetails
    // })

    return {
      // isMountedUserDetails
    }
  }
})
