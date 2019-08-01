<template>
  <BaseContent class="App" :class="{ 'is-left': isLeft }">
    <BaseCorners />

    <transition name="test" mode="out-in">
      <div class="App_left">
          <BaseNavigation />
          <transition name="test" mode="out-in">
            <router-view/>
          </transition>
      </div>
    </transition>

    <PanelSwitch class="App_right" :isLeft="isLeft" />
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

  .App_left {
    height: 100%;
    width: 45%;
  }
  
  .test-enter-active,
  .test-leave-active {
    transition-duration: 1s;
  }

  .App.is-left {
    .App_left {
      margin-left: 45%;
      width: 60%;
    }
  }
</style>
