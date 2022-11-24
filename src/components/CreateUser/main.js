import {defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
import {CREATE_USER} from '@/store/modules/user/constants'

export default defineComponent({
  name: 'CreateUser',
  setup() {
    // #region States
    const store = useStore()
    let obj = ref({
      name: '',
      gender: '',
      email: '',
      status: 'active'
    })
    let items = ref(['male', 'female'])

    //Form validation
    let valid = ref(true)
    let nameRules = ref([(v) => !!v || 'Required'])
    let emailRules = ref([(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'])

    // #endregion

    // #region Methods
    async function createUser() {
      const {valid} = await this.$refs.form.validate()
      if (valid) {
        store.dispatch('user/' + CREATE_USER, obj.value)
        alert('User created')
      } else {
        alert('Form is invalid')
      }
      obj.value = {
        name: '',
        gender: '',
        email: '',
        status: 'active'
      }
    }

    // #endregion

    return {
      obj,
      valid,
      nameRules,
      emailRules,
      items,
      createUser
    }
  }
})
