import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'Toolbar',
  //@ts-ignore
  setup() {
    const $store = useStore()

    //Stordan get eliyib eyni zamanda set elemet ucun meselen toggle kimi asagidaki kimi edirik
    const drawer = computed({
      get() {
        return $store.getters['drawer/getDrawer']
      },
      set(value) {
        $store.commit('drawer/SET_DRAWER', value)
      }
    })

    return {
      drawer
    }
  }
})
