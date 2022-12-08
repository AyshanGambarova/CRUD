import {EnumStoreNamespace} from '@/enums/index'
import {TUser, TUserFilter} from '@/types/User'
import {EDIT_USER, FETCH_USERS, GET_USERS} from '@/store/modules/user/constants'
import {onMounted, computed, ref, watch} from 'vue'
import {useStore} from 'vuex'
import $http from '@/utils/interceptors'
import Snackbar from '@/helpers/snackbar'
// Components
import SearchUser from './components/SearchUser/index.vue'
import {Action, Getter} from '@/helpers/store'

export default {
  components: {SearchUser},
  setup() {
    // #region States
    const page = ref<number>(1)
    const payloadFilter = ref<TUserFilter>(<TUserFilter>{})
    const dialog = ref<boolean>(false)
    const dialog2 = ref<boolean>(false)
    const deletingUserId = ref<number>(0)
    const editingUserId = ref<number>(0)
    let obj = ref<TUser>(<TUser>{
      id: 0,
      name: '',
      email: '',
      status: 'active'
    })
    // #endregion

    // #region Methods
    const actionFetchUsers = (payload?: any) => {
      Action({
        namespace: EnumStoreNamespace.USER,
        action: FETCH_USERS,
        payload
      })
    }

    function deletingUser(userId: number) {
      dialog2.value = true
      deletingUserId.value = userId
    }
    async function deleteUser() {
      try {
        const response = await $http({
          method: 'DELETE',
          url: `/users/${deletingUserId.value}`
        })
        dialog2.value = false
        actionFetchUsers()
        const text = 'User deleted successfully.'
        const color = 'success'
        Snackbar.show({
          text,
          color
        })
      } catch (error) {
        console.log(error)
      }
    }
    function editingUser(user: TUser) {
      dialog.value = true
      editingUserId.value = user.id
      obj.value = {...user}
    }
    function editUser() {
      Action({
        namespace: EnumStoreNamespace.USER,
        action: EDIT_USER,
        payload: {
          userId: editingUserId.value,
          editUser: obj.value
        }
      })
      dialog.value = false
      actionFetchUsers()
    }

    function handleSubmitFilter(filterPayload: any) {
      page.value = 1
      payloadFilter.value = {...filterPayload}
      const paginationObj = {page: page.value}
      actionFetchUsers({...payloadFilter.value, ...paginationObj})
    }
    // #endregion

    // #region Hooks
    onMounted(() => {
      actionFetchUsers()
    })

    // #endregion

    //#region Computed

    const getPaginationOptions = computed(() => {
      return Getter({
        namespace: 'pagination',
        getter: 'getPaginationOptions'
      })
    })

    const getSpinner = computed(() => {
      return Getter({
        namespace: 'spinner',
        getter: 'getSpinner'
      })
    })

    const getUsers = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.USER,
        getter: GET_USERS
      })
    })

    //#endregion

    //#region Watch

    //Get current page number
    watch(page, () => {
      const paginationObj = {page: page.value}
      actionFetchUsers({...payloadFilter.value, ...paginationObj})
    })

    //#endregion

    return {
      getUsers,
      page,
      dialog,
      dialog2,
      obj,
      getPaginationOptions,
      editingUser,
      editUser,
      deletingUser,
      deleteUser,
      getSpinner,
      handleSubmitFilter
    }
  }
}
