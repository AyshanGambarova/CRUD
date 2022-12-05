import axios from 'axios'
import $http from '@/utils/interceptors/dummy'
// Components
import {defineComponent} from 'vue'
import validations from '@/helpers/validations'
import {ref} from 'vue'
import {TLoginUser} from '@/types/User'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'PageLogin',
  //@ts-ignore
  setup() {
    let creatingUser = ref<TLoginUser>({
      username: '',
      password: ''
    })
    const $router = useRouter()
    //Snackbar
    let snackbar = ref<boolean>(false)
    let text = ref<string>('')
    let timeout = ref<number>(2000)
    //Form validation
    let valid = ref<boolean>(true)
    const form = ref<HTMLFormElement>(<HTMLFormElement>{})

    async function submitLogin() {
      const {valid} = await form.value.validate()
      if (valid) {
        const response = await $http({
          method: 'POST',
          data: creatingUser.value,
          url: `/auth/login`
        })
        snackbar.value = true
        localStorage.setItem('token', response.data.token)
        // $router.push({path:'/'})
      } else {
        alert('Form is invalid')
      }
      creatingUser.value = {
        username: '',
        password: ''
      }
    }

    return {
      creatingUser,
      submitLogin,
      valid,
      form,
      snackbar,
      text,
      timeout,
      validations
    }
  }
})