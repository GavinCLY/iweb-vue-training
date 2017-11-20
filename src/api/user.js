import axios from './index'

export default {
  login (username, password) {
    return axios({
      method: 'post',
      url: '/api/user/login',
      data: {
        username,
        password
      }
    })
  }
}