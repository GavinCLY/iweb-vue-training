<template>
  <!-- 确定轮播图宽度  -->
  <div class="container">
    <div class="carousel" :style="{ width: width + 'px' }">
      <!-- 轮播图容器的宽度，为单个轮播图*图个数  -->
      <!-- 将鼠标事件绑定在容器上，实现拖拽、切换处理 -->
      <div class="item-wrap" :class="[smooth && 'smooth']"
           @mousedown="mousedown"
           @mousemove="mousemove"
           @mouseup="mouseup"
           :style="{
          width: width * items.length + 'px',
          transform: transformX
        }">
        <!-- 渲染单个轮播图 -->
        <div class="item" v-for="(item, itemIndex) in items" :key="item.id">
          {{ item.val }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // 接受外部参数
//    props: [
//      'width',  // 轮播图单个宽度
//      'items',  // 轮播图数组
//      'init'    // 初始序号
//    ],

    data: function () {
      return {
        // 如果不接受外部参数的话，可直接在组件内定义宽度、内容、序号
         width: 300,
         index: 0,
         items: [
           { id: 1, val: '1' },
           { id: 2, val: '2' },
           { id: 3, val: '3' }
         ],
//        index: this.init,
        mouse: {
          isDown: false,  // 鼠标是否按下
          startX: 0,      // 鼠标按下时，对应屏幕的X轴位置
          disX: 0 // 鼠标拖动距离
        },
        smooth: false   // 是否开启过渡效果
      }
    },

    computed: {
      // 标记轮播图容器的translateX偏移量
      // 和图片宽度、当前序号、鼠标拖动距离相关
      // 这三个值发生变化时，transformX会随之发生变化，并自动渲染dom
      transformX: function () {
        return 'translateX(' + (-this.width * this.index + this.mouse.disX) + 'px)';
      }
    },

    methods: {
      // 设置当前序号
      setIndex: function (index) {
        this.index = index;
      },

      // 鼠标按下事件
      // 记录是否按下，按下时的X轴位置，关闭过渡效果
      mousedown: function (e) {
        this.mouse.isDown = true;
        this.mouse.startX = e.clientX;  // offsetX
        this.smooth = false;
      },

      // 鼠标移动事件
      // 计算鼠标X轴移动距离
      mousemove: function (e) {
        if (!this.mouse.isDown) return;
        var disX = e.clientX - this.mouse.startX;
        this.mouse.disX = disX; // 赋值后会影响计算属性transformX，从而影响容器的transform: translate值，实现拖动效果
      },

      mouseup: function () {
        if (!this.mouse.isDown) return;
        // 拖动距离影响最后展示序号
        // 向右拖动超过单个宽度的1/4且不是第一张时，序号-1
        if (this.mouse.disX > this.width / 4 && this.index != 0)
          this.index -= 1;
        // 向左拖动超过单个宽度的1/4且不是最后一张时，序号+1
        if (this.mouse.disX < -this.width / 4 && this.index != this.items.length - 1)
          this.index += 1;
        // 重置鼠标拖动相关属性，并将拖动距离和初始X轴位置置为0
        this.mouse = {
          isDown: false,
          startX: 0,
          disX: 0
        };
        // 打开过渡效果
        this.smooth = true;
      }
    }
  }
</script>

<style>
  .carousel {
    overflow: hidden;
  }
  .item-wrap {
    display: flex;
  }
  .item {
    flex: 1;
    height: 300px;
    background: red;
    color: white;
    border: 1px solid black;
  }
  .smooth {
    transition: all 0.5s;
  }
</style>
