import $store from '@/store'

export function Action({namespace, action, payload}: any) {
  $store.dispatch(namespace + '/' + action, payload)
}

export function Getter({namespace, getter}: any) {
  return $store.getters[namespace + '/' + getter]
}
