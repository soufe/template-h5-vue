import { MUTATION_EXAMPLE, ENTRY_URL } from './mutation-types'
export default {
  [MUTATION_EXAMPLE] (state: any) {
    state.token = ''
  },
  [ENTRY_URL] (state: any, payload: any) {
    state.entryUrl = payload.fullPath
  }
}
