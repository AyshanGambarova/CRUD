import {defineComponent, onMounted, ref} from 'vue'
import EventBus from '@/utils/eventBus'
import {EnumEmitTypes} from '@/enums'
import {TSnackbar} from '@/types/Snackbar'

export default defineComponent({
  name: 'ComponentSnackbar',
  //@ts-ignore
  setup() {
    //#region States

    const $eventBus = EventBus()

    let snackbar = ref<boolean>(false)
    const settings = ref<TSnackbar>({
      text: '',
      timeout: 1000,
      color: ''
    })

    //#endregion

    //#region Hooks

    onMounted(() => {
      $eventBus.on(EnumEmitTypes.SNACKBAR_SHOW, (payload: TSnackbar) => {
        snackbar.value = true
        settings.value = {...payload}
      })
    })

    //#endregion

    return {
      snackbar,
      settings
    }
  }
})
