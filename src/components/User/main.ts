import {EnumStoreNamespace} from './../../enums/index'
import {onMounted, computed, defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {GET_USER, FETCH_USER} from '@/store/modules/user/constants'

export default defineComponent({
  name: 'ComponentUserDetail',
  setup() {
    // #region States
    const $store = useStore()
    const $route = useRoute()

    console.log($route)
    debugger
    const userId = ref<number>(Number($route.params.id))

    // #endregion

    // #region Hooks
    const getUser = computed(() => {
      return $store.getters[EnumStoreNamespace.USER + '/' + GET_USER]
    })

    onMounted(() => {
      $store.dispatch(EnumStoreNamespace.USER + '/' + FETCH_USER, userId.value)
    })

    // #endregion

    return {
      getUser
    }
  }
})
