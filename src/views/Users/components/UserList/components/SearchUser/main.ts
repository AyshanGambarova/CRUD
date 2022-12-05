import {EnumStoreNamespace} from '@/enums/index'
import {TUser} from '@/types/User'
import {FETCH_USERS} from '@/store/modules/user/constants'
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    // #region States
    const $store = useStore()
    let obj = ref<TUser>(<TUser>{})
    let items = ref<string[]>(['male', 'female'])

    // #endregion

    // #region Methods
    function searchUser() {
      $store.dispatch(EnumStoreNamespace.USER + '/' + FETCH_USERS, obj.value)
    }

    // #endregion

    return {
      obj,
      items,
      searchUser
    }
  }
}
