import {EnumStoreNamespace} from '@/enums'
import {TUser} from '@/types/User'
import {defineComponent, ref, computed} from 'vue'
import {useStore} from 'vuex'
import {CREATE_USER} from '@/store/modules/user/constants'
import validations from '@/helpers/validations'

export default defineComponent({
  name: 'CreateUser',
  setup() {
    // #region States
    const $store = useStore()
    let obj = ref<TUser>({
      id: 0,
      name: '',
      gender: '',
      email: '',
      status: 'active'
    })
    let items = ref<string[]>(['male', 'female'])

    //Form validation
    let valid = ref<boolean>(true)
    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    //Snackbar
    let snackbar = ref<boolean>(false)
    let text = ref<string>('User added')
    let timeout = ref<number>(2000)

    // #endregion

    // #region Methods
    async function createUser() {
      const {valid} = await form.value.validate()
      if (valid) {
        $store.dispatch(EnumStoreNamespace.USER + '/' + CREATE_USER, obj.value)
        snackbar.value = true
      } else {
        alert('Form is invalid')
      }
      obj.value = {
        id: 0,
        name: '',
        gender: '',
        email: '',
        status: 'active'
      }
    }

    const getSpinner = computed(() => {
      return $store.getters['spinner/getSpinner']
    })

    // #endregion

    return {
      obj,
      valid,
      items,
      createUser,
      form,
      snackbar,
      text,
      timeout,
      getSpinner,
      validations
    }
  }
})
