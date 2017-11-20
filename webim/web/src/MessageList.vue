<template>
  <div class="compo-message-list">
    <template v-for="msg in messageList">
      <div class="message-item">
        <p class="user"><i></i>{{msg.from}}</p>
        <p class="content">{{msg.data}}</p>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'message-list',
    props: {
      messageList: {
        type: Array,
        required: true
      }
    },
    methods: {
      send(json) {
        this.socket.send(JSON.stringify(json))
      }
    },
  }
</script>

<style lang="less-loader">
  .compo-message-list{
    height: 340px;
    overflow-x: hidden;
    overflow-y: auto;
    color: #222;

    .message-item{
      padding-bottom: 10px;
      .user{
        color: #ccc;
        i{
          display: inline-block;
          width: 18px;
          height: 18px;
          background-color: #888;
          border-radius: 100%;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>