import { ENTRY_URL } from './mutation-types'

function getData (team: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(team)
    }, 3000)
  })
}

export default {
  async entryUrl (context: { commit: any }) {
    const res = await getData('sfe')
    context.commit(ENTRY_URL, res)
  }
}
