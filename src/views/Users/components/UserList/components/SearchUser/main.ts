import {TUserFilter} from '@/types/User'
import {ref} from 'vue'

export default {
  emits: ['submitFilter'],
  setup(props: any, context: any) {

    // #region States
    let searchingUser = ref<TUserFilter>(<TUserFilter>{})
    let items = ref<string[]>(['male', 'female'])
    // #endregion

    // #region Methods
    function searchUser() {
      context.emit('submitFilter', searchingUser.value)
    }
    // #endregion

    return {
      searchingUser,
      items,
      searchUser
    }
  }
}
