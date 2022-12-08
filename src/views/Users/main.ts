// Components
import {defineComponent} from 'vue'
import CreateUser from './components/CreateUser/index.vue'
import UsersList from './components/UserList/index.vue'

export default defineComponent({
  name: 'PageUsers',
  //@ts-ignore
  components: {CreateUser, UsersList},
  setup() {}
})
