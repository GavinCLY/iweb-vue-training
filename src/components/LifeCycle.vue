<template>
  <div class="lifecycle red" ref="wrap">
    生命周期
    <input type="text" class="form-control" v-model="a">
  </div>
</template>

<script>

export default {

  data () {
    return {
      a: 1
    }
  },

  methods: {
    open () {
      console.log('open');
    }
  },

  beforeCreate: function() {
    console.log('beforeCreate', this.a);
  },
  created: function() {
    this.interval = setInterval(function () {
      console.log(new Date());
    }, 1000);
    console.log('created', this.a);
  },
  beforeMount: function() {
    console.log('beforeMount', this.$refs.wrap);
  },
  mounted: function() {
    // 此时能访问 $ref
    this.open();
    console.log('mounted', this.$refs.wrap);
  },
  beforeUpdate: function() {
    console.log('beforeUpdate', this.a)
  },
  updated: function() {
    console.log('updated', this.a)
  },
  beforeDestroy: function() {
    // 此时还能访问实例
    this.interval && clearInterval(this.interval);
    console.log('beforeDestroy', this.a);
  },
  destroyed: function() {
    // 此时已无法访问实例
    console.log('destroyed', this.a);
  },
  activated: function () {
    console.log('activated')
  },
  deactivated: function () {
    console.log('deactivated')
  }
}
</script>

<style scoped >
  .container {
    padding: 20px;
  }
</style>
