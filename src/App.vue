<template>
  <BaseContent class="App">
    <BaseCorners />

    <div class="App_content" :class="{ 'is-left': isLeft }">
        <BaseNavigation />
        <router-view/>
    </div>

    <PanelSwitch class="App_panel" :isLeft="isLeft" />
  </BaseContent>
</template>

<script>
import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import PanelSwitch from '@/components/PanelSwitch'
import BaseNavigation from '@/components/BaseNavigation'

export default {
  name: 'App',
  components: { BaseCorners, BaseContent, PanelSwitch, BaseNavigation },
  data: () => ({
    isLeft: false
  }),
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.isLeft = to.meta.isLeft

      next()
    })
  },
  mounted () {
    this.isLeft = this.$route.meta.isLeft ? this.$route.meta.isLeft : false
  }
}
</script>

<style lang="scss">
  @import "assets/scss/base.scss";

  .App_content {
    height: 100%;
    width: 45%;
    position: relative;
    z-index: 2;
  }
  
  .test-enter-active,
  .test-leave-active {
    transition-duration: 1s;
  }

  .App_content.is-left {
    margin-left: 45%;
    width: 60%;
  }
</style>
