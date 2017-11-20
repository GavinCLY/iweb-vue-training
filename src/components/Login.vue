<template>
  <div class="container">
    <div class="row">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="username" v-model="username">
          </div>
        </div>
        <div class="form-group">
          <label for="pwd" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary" @click.prevent="login">登录</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import userSrv from '../api/user'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      login () {
        const { username, password } = this
        userSrv
          .login(username, password)
          .then(rep => {
            console.log(rep)
          })
      }
    }
  }
</script>
