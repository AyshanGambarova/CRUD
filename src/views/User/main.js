import {defineComponent, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {GET_USER} from '@/store/modules/user/constants'

// Components
import User from '@/components/User/index.vue'
import CreatePost from '@/components/CreatePost/index.vue'
import PostsList from '@/components/PostsList/index.vue'

export default defineComponent({
  name: 'PageUser',
  components: {User, CreatePost, PostsList},
  setup() {
    const store = useStore()
    let isMountedUserDetails = ref(false)

    const getUserDetails = () => {
      return store.getters['user/' + GET_USER]
    }

    watch(getUserDetails, (userDetails) => {
      isMountedUserDetails.value = !!userDetails
    })

    return {
      isMountedUserDetails
    }
  }
})
