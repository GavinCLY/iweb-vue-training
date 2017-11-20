<template>
  <div class="row">
    <div class="container">
      <transition :appear="appear" name="text" v-if="animations[0]" @after-enter="next">
        <div class="">第一行字</div>
      </transition>
      <transition :appear="appear" name="text" v-if="animations[1]" @after-enter="next">
        <div class="">第二行字</div>
      </transition>
      <transition :appear="appear" name="text" v-if="animations[2]" @after-enter="next">
        <div class="">第三行字</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appear: true,
        index: -1,
        animations: [0, 0, 0, 0]
      }
    },

    methods: {
      next () {
        if (this.index == this.animations.length - 1) return;
        this.index += 1;
        this.animations.splice(this.index, 1, 1);
      }
    },

    mounted () {
      this.next();
    }
  }
</script>

<style>
  .text-enter-active, .text-leave-active {
    transition: all 0.5s linear 1s;
  }
  .text-enter {
    opacity: 0;
    transform: translateY(100%);
  }
</style>
