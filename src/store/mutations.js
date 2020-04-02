import { MUTATION_EXAMPLE, ENTRY_URL } from './mutation-types'
export default {
  [MUTATION_EXAMPLE] (state) {
    state.token = ''
  },
  [ENTRY_URL] (state, payload) {
    state.entryUrl = payload.fullPath
  }
}
