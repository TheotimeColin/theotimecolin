<template>
    <div>
        <BaseContent class="App" :class="{ 'is-left': isLeft, 'is-center': isCenter, 'is-right': isRight }">
            <BaseCorners />

            <BaseNavigation />

            <div class="App_content">
                <div class="App_contentLeft">
                    <PanelValues :is-static="true" />
                </div>
                <div class="App_contentRight">
                    <transition name="router-transition" mode="in-out">
                        <router-view/>
                    </transition>
                </div>
            </div>

            <PanelSwitch class="App_panel" ref="panelSwitch" />
        </BaseContent>
    
        <PanelValues :is-loaded="state.loaded" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

import { UPDATE_STEP } from '@/store/types/mutation-types'
import { LOAD_PROJECTS } from '@/store/types/action-types'

import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import PanelSwitch from '@/components/PanelSwitch'
import PanelValues from '@/components/PanelValues'
import BaseNavigation from '@/components/BaseNavigation'

export default {
    name: 'App',
    components: { BaseCorners, BaseContent, PanelSwitch, BaseNavigation, PanelValues },
    data: () => ({
        transitionLeft: false,
        state: {
            loaded: false
        }
    }),
    computed: {
        ...mapState('sliderAnimation', {
            isLeft: state => state.steps['is-left'].active,
            isRight: state => state.steps['is-right'].active,
            isCenter: state => state.steps['is-center'].active,
            isAnimating: state => state.animating
        })
    },
    created () {
        this.$router.beforeEach((to, from, next) => {
            this.transitionLeft = to.meta.isLeft

            next()
        })
    },
    watch: {
        transitionLeft (v) {
            if (v) {
                this.$refs.panelSwitch.goLeft()
            } else {
                this.$refs.panelSwitch.goRight()
            }
        }
    },
    async mounted () {
        this.transitionLeft = this.$route.meta.isLeft

        await this.$store.dispatch(`projects/${LOAD_PROJECTS}`)
        
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

    .App.is-left {

        .App_contentLeft {
            width: 400px;
            overflow: hidden;
        }
    }

    .App_contentLeft {
        width: 45%;
        flex-shrink: 0;
    }

    .router-transition-enter-active {
        transition-duration: 1350ms;
    }
</style>
