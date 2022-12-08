import { computed, defineComponent, ref} from "vue"
import { useStore } from "vuex"
import {useRouter} from 'vue-router'


export default defineComponent({
  name: 'Sidebar',
   //@ts-ignore
  setup() {
    const $store = useStore()
    const $router = useRouter()
    const drawer = computed(() => {
      return $store.getters['drawer/getDrawer']
    })
    async function logout() {
      localStorage.removeItem('token')
      await $router.push({path:'/'})
    }
    
    return {
      drawer,
      logout
    }
  }
})
