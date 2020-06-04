import axios from 'axios'
import {REQUESTING,REQUEST_SUCCESS,REQUEST_ERROR} from './mutations-types'

export default {
  search({commit},searchName) {
    commit(REQUESTING)
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        const users = response.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          username: item.login
        }))
        commit(REQUEST_SUCCESS, {users})
      })
      .catch(error => {
        commit(REQUEST_ERROR, {msg: '请求失败'})
      })
  }
}
