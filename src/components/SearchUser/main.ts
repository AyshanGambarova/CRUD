import {EnumStoreNamespace} from './../../enums/index'
import {TUser} from '@/types/User'
import {FETCH_USERS} from '@/store/modules/user/constants'
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    // #region States
    const $store = useStore()
    // let obj = ref({
    //   name: '',
    //   gender: '',
    //   email: '',
    //   status: 'active'
    // })
    let obj = ref<TUser>(<TUser>{
      name: '',
      gender: '',
      email: '',
    })
    // const items = ref(['male', 'female'])
    let items = ref<string[]>(['male', 'female'])

    // #endregion

    // #region Methods
    function searchUser() {
      $store.dispatch(EnumStoreNamespace.USER + '/' + FETCH_USERS, obj.value)
      obj.value = {
        id: 0,
        name: '',
        gender: '',
        email: '',
        status: 'active'
      }
    }

    // #endregion

    return {
      obj,
      items,
      searchUser
    }
  }
}
