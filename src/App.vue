<template>
  <BaseContent class="App">
    <BaseCorners />

    <div class="App_content" :class="{ 'is-left': isLeft }">
        <BaseNavigation />
        <router-view/>
        <PanelValues :is-loaded="state.loaded"/>
    </div>

    <PanelSwitch class="App_panel" :isLeft="isLeft" />
  </BaseContent>
</template>

<script>
import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import PanelSwitch from '@/components/PanelSwitch'
import PanelValues from '@/components/PanelValues'
import BaseNavigation from '@/components/BaseNavigation'

export default {
  name: 'App',
  components: { BaseCorners, BaseContent, PanelSwitch, BaseNavigation, PanelValues },
  data: () => ({
    isLeft: false,
    state: {
      loaded: false
    }
  }),
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.isLeft = to.meta.isLeft

      next()
    })
  },
  mounted () {
    this.isLeft = this.$route.meta.isLeft ? this.$route.meta.isLeft : false

    setTimeout(() => {
      this.state.loaded = true
    }, 2000)
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
