import { ENTRY_URL } from './mutation-types'
export default {
  [ENTRY_URL] (state: { entryUrl: string }, payload: { fullPath: string }) {
    state.entryUrl = payload.fullPath
  }
}
