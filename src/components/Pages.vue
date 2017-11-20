<template>
  <div class="container">
    <div class="row pages">
      <div class="container">
        <transition-group name="page">
          <div v-for="(page, index) in pages"
               :key="page.id"
               :class="['page', 'page_' + index]"
               v-if="pageIndex == index">
            <header>{{ page.name }}</header>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="row m-t">
      <div class="container">
        <div class="col-md-2 col-sm-2" v-for="(page, index) in pages" @click="toPage(page)">
          <div class="btn btn-primary">
            {{ page.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageIndex: 0,
        pages: [
          { id: 1, name: '首页' },
          { id: 2, name: '列表' },
          { id: 3, name: '详情' }
        ]
      }
    },

    methods: {
      toPage (page) {
        this.pageIndex = this.pages.findIndex(p => p.id == page.id);
      }
    }
  }
</script>

<style>
  .pages {
    position: relative;
    width: 100%;
    height: 300px;
  }
  .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
  }
  .page_0 {
    background: red;
  }
  .page_1 {
    background: yellow;
  }
  .page_2 {
    background: black;
  }

  .page-enter-active, .page-leave-active {
    transition: all 0.5s;
  }
  .page-enter {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
