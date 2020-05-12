import { MUTATION_EXAMPLE } from './mutation-types'
export default {
  async mutationExample (commit: any, state: any) {
    // let res = await getData()
    const res = state.token
    commit(MUTATION_EXAMPLE, res)
  }
}
