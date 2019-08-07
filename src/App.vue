<template>
    <div>
        <BaseContent class="App">
            <BaseCorners />

            <BaseNavigation />

            <div class="App_content">
                <div class="App_contentLeft"></div>
                <div class="App_contentRight">
                    <transition name="router-transition" mode="in-out">
                        <router-view/>
                    </transition>
                </div>
            </div>

            <PanelSwitch class="App_panel" :isLeft="isLeft" />
        </BaseContent>
    
        <PanelValues :is-loaded="state.loaded" :is-home="isHome" />
    </div>
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
        isHome:false,
        state: {
            loaded: false
        }
    }),
    created () {
        this.$router.beforeEach((to, from, next) => {
            this.isLeft = to.meta.isLeft
            this.isHome = to.name === 'Homepage' ? true : false

            next()
        })
    },
    mounted () {
        this.isLeft = this.$route.meta.isLeft ? this.$route.meta.isLeft : false
        this.isHome = this.$route.name === 'Homepage' ? true : false

        setTimeout(() => {
            this.state.loaded = true
        }, 2500)
    }
}
</script>

<style lang="scss">
    @import "assets/scss/base.scss";

    .App_content {
        height: 100%;
        position: relative;
        z-index: 2;
        display: flex;
    }

    .App_contentLeft {
        width: 45%;
        max-width: 400px;
        flex-shrink: 0;
    }

    .router-transition-enter-active {
        transition-duration: 1350ms;
    }
</style>
