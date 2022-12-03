import { computed, defineComponent, ref} from "vue"
import { useStore } from "vuex"


export default defineComponent({
  name: 'Sidebar',
   //@ts-ignore
  setup() {
    const $store = useStore()
    const drawer = computed(() => {
      return $store.getters['drawer/getDrawer']
    })
    
    return {
      drawer
    }
  }
})
