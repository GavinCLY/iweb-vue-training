<template>
  <div class="compo-user-list">
    <template v-for="user in userList">
      <div class="user-item">
        <i></i><span>{{user.name}}</span>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'user-list',
    props: {
      userList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less-loader">
  .compo-user-list{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    color: #ccc;

    .user-item{
      padding: 4px 10px;
      border-radius: 4px;
      color: #fff;
    }
    .user-item:hover{
      cursor: pointer;
      background-color: #888;
    }
  }
</style>