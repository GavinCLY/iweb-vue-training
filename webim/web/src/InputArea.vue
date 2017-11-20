<template>
  <div class="compo-input-area">
    <input v-model="msgContent"/>
    <a @click="send">发送</a>
  </div>
</template>

<script>
  export default {
    name: 'input-area',
    data(){
      return {
        msgContent: ''
      }
    },
    methods: {
      send(json) {
        this.$parent.send({
          type: 'message',
          data: this.msgContent
        })
      }
    }
  }
</script>

<style lang="less-loader">
  .compo-input-area{
    display: flex;

    input{
      flex: auto;
      height: 30px;
    }
    a{
      flex: 0 0 80px;
      background-color: #999;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
  }
</style>