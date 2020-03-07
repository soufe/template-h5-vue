import { MUTATION_EXAMPLE } from './mutation-types'
export default {
  async mutationExample ({
    commit,
    state
  }) {
    // let res = await getData()
    let res = state.token
    commit(MUTATION_EXAMPLE, res)
  }
}
