<template>
  <div class="page">
    <div class="chat-widnow">
      <div class="left-widnow">
        <UserList :userList="userList"></UserList>
      </div>
      <div class="right-widnow">
        <MessageList :messageList="messageList"></MessageList>
        <InputArea></InputArea>
      </div>
    </div>
  </div>
</template>

<script>
  import MessageList from './MessageList.vue'
  import InputArea from './InputArea.vue'
  import UserList from './UserList.vue'

  export default {
    name: 'app',
    data(){
      return {
        messageList: [],
        userList: []
      }
    },
    components: {
      MessageList,
      InputArea,
      UserList
    },
    created(){

    },
    methods: {
      uuid(){
        return Math.random().toString(36)
      },

      send(json) {
        json.from = this.name
        this.socket.send(JSON.stringify(json))
      }
    },

    mounted(){
      let uid = this.uid = this.uuid()
      let name = this.name = '游客' + this.uid
      let socket = this.socket = new WebSocket(`ws://192.168.1.26:8008?uid=${uid}&name=${name}`)

      socket.onopen = (evt) => {
        console.log('connected')
        this.open = true
      }

      socket.onmessage = (evt) => {
        let data = JSON.parse(evt.data)
        console.log(data);
        switch(data.type){
          case 'join':
            this.userList = data.data
          break
          case 'message':
            this.messageList.push(data)
          break
          case 'history':
            this.messageList = data.data
          break
          case 'leave':
          break
        }
      }

      socket.onclose = (evt) => {
        this.open = false
      }
    }
  }
</script>

<style lang="less-loader">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .page{
    color: #222;
    padding: 50px;

    .chat-widnow{
      width: 640px;
      height: 400px;
      margin: 0 auto;
      border: 1px #ccc solid;
      border-radius: 4px;
      background-color: #444;
      color: #aaa;
      display: flex;

      .left-widnow{
        flex: 0 0 200px;
        padding: 20px;
      }

      .right-widnow{
        flex: auto;
        background-color: #f5f5f5;
        padding: 20px;
      }
    }
  }
</style>