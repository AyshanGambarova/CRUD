import {EnumStoreNamespace} from '@/enums'
import {TUserGenerel} from '@/types/User'
import {defineComponent, ref, computed} from 'vue'
import {CREATE_USER} from '@/store/modules/user/constants'
import validations from '@/helpers/validations'
import {Action, Getter} from '@/helpers/store'

export default defineComponent({
  name: 'CreateUser',
  setup() {
    // #region States
    let creatingUser = ref<TUserGenerel>({
      name: '',
      gender: '',
      email: '',
      status: 'active'
    })
    let items = ref<string[]>(['male', 'female'])

    //Form validation
    let valid = ref<boolean>(true)
    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    // #endregion

    // #region Methods

    const actionCreateUser = (payload: any) => {
      Action({
        namespace: EnumStoreNamespace.USER,
        action: CREATE_USER,
        payload
      })
    }
    const getterSpinner = () => {
      return Getter({
        namespace: 'spinner',
        getter: 'getSpinner'
      })
    }
    async function createUser() {
      const {valid} = await form.value.validate()
      if (valid) {
        actionCreateUser(creatingUser.value)
      } else {
        alert('Form is invalid')
      }
      creatingUser.value = {
        name: '',
        gender: '',
        email: '',
        status: 'active'
      }
    }

    const getSpinner = computed(() => {
      return getterSpinner()
    })

    // #endregion

    return {
      creatingUser,
      valid,
      items,
      createUser,
      form,
      getSpinner,
      validations
    }
  }
})
