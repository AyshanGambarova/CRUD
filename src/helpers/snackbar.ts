import {EnumEmitTypes} from '@/enums'
import EventBus from '@/utils/eventBus'

const $eventBus = EventBus()

export default {
  show(payload: any) {
    $eventBus.emit(EnumEmitTypes.SNACKBAR_SHOW, payload)
  }
}
