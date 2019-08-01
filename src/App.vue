<template>
  <transition name="test" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import "assets/scss/base.scss";
  
  .test-enter-active,
  .test-leave-active {
    transition-duration: 3s;
  }
</style>
