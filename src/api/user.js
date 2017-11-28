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
  },

  getName: function () {
    // http://localhost:8080/api/users POST
    return axios({
      url: '/api/name',
      method: 'get' // post, put, delete
    })
  },

  getGender: function () {
    return axios({
      url: '/api/gender',
      method: 'get' // post, put, delete
    })
  },

  // 发起多个请求，并等待请求都返回后再进行之后的逻辑
  getAll: function () {
    return axios
      .all([this.getName(), this.getGender()])
      .then(axios.spread(function (name, gender) {
        // Both requests are now complete
        console.log('all finished', name, gender);
        return { name, gender }
      }));
  }

}
