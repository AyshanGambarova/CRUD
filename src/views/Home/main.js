// Components
import CreateUser from '@/components/CreateUser/index.vue'
import UsersList from '@/components/UsersList/index.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PageHome',
  components: {CreateUser, UsersList},
  setup() {}
})
