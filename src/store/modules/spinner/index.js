import state from './state'
import getters from './getters'
import mutations from './mutation'

export const spinner = {
  namespaced: true,
  state,
  getters,
  mutations
}
