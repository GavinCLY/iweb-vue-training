<template>
  <div class="container">
    <div class="row red">
      <form class="form-horizontal">
        <div :class="['form-group', 'has-feedback', username.value && !username.error && 'has-success', username.error && 'has-error']">
          <label for="username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="username" v-model="username.value">
            <span v-show="username.value && !username.error" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            <!-- <transition name="fade"> -->
            <div class="error" v-if="username.error">{{ username.error }}</div>
            <!-- </transition>  -->
          </div>
        </div>
        <div :class="['form-group', 'has-feedback', pwd.value && !pwd.error && 'has-success', pwd.error && 'has-error']">
          <label for="pwd" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd" v-model="pwd.value">
            <span v-show="pwd.value && !pwd.error" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            <transition name="fade">
              <div class="error" v-if="pwd.error">{{ pwd.error }}</div>
            </transition>
          </div>
        </div>
        <div :class="['form-group', 'has-feedback', repwd.value && !repwd.error && 'has-success', repwd.error && 'has-error']">
          <label for="repwd" class="col-sm-2 control-label">重复密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="repwd" v-model="repwd.value">
            <span v-show="repwd.value && !repwd.error" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            <transition name="fade">
              <div class="error" v-if="repwd.error">{{ repwd.error }}</div>
            </transition>
          </div>
        </div>
        <div class="form-group">
          <label for="gender" class="col-sm-2 control-label">性别</label>
          <div class="col-sm-10">
            <label class="radio-inline">
              <input type="radio" name="gender" id="gender" value="1" v-model="gender">男
            </label>
            <label class="radio-inline">
              <input type="radio" name="gender" id="gender" value="2" v-model="gender">女
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="hobby" class="col-sm-2 control-label">关注</label>
          <div class="col-sm-10">
            <label class="checkbox-inline">
              <input type="checkbox" name="hobby" id="hobby" value="html" v-model="hobby">html
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="hobby" id="hobby" value="css" v-model="hobby">css
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="hobby" id="hobby" value="js" v-model="hobby">js
            </label>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary" @click.prevent="register">注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: {
          value: '',
          error: false
        },
        pwd: {
          value: '',
          error: false
        },
        repwd: {
          value: '',
          error: false
        },
        gender: '',
        hobby: []
      }
    },

    watch: {
      'username.value' (val, oldVal) {
        console.log(val, oldVal)
        let error = '';
        if (!val) error = '用户名不能为空';
        this.username.error = error;
      },
      'pwd.value' (val) {
        let error = '';
        if (!val) error = '密码不能为空';
        if (!(val.match(/[a-z]/g) && val.match(/[0-9]/g))) error = '密码需包含英文和数字';
        this.pwd.error = error;
      },
      'repwd.value' (val) {
        let error = '';
        if (!val) error = '密码不能为空';
        if (!(val.match(/[a-z]/g) && val.match(/[0-9]/g))) error = '密码需包含英文和数字';
        if (this.pwd.value != val) error = '密码输入不一致';
        this.repwd.error = error;
      }
    },

    computed: {
      hobbies () {
        return this.hobby.join(',')
      }
    },

    methods: {
      hasError () {
        const { username, pwd, repwd } = this;
        if (username.error
          || pwd.error
          || repwd.error
        ) {
          return true
        } else {
          return false
        }
      },

      register () {
        if (this.hasError()) return;
        const { username, pwd, gender, hobbies } = this;
        console.log(username.value, pwd.value, gender, hobbies);
      }
    }
  }
</script>

<style scoped>
  .error {
    padding-top: 5px;
    font-size: 12px;
    color: #a94442;
    position: absolute;
    right: 0px;
    transform: translateX(100%);
    top: 4px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  .red {
    color: red !important;
  }
</style>
