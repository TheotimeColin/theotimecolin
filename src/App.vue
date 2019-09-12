<template>
    <div>
        <BaseCorners />
        
        <BaseContent class="App" :class="{ 'is-left': isLeft, 'is-center': isCenter, 'is-right': isRight, 'is-window-s': windowSmall, [lastState]: true }">
            

            <BaseNavigation />

            <div class="App_content">
                <div class="App_contentLeft" v-if="!windowSmall">
                    <PanelValues :is-static="true" />
                </div>
                <simplebar class="App_contentRight" ref="contentRight">
                    <transition name="router-transition" mode="in-out">
                        <router-view :key="$route.params.id" />
                    </transition>
                </simplebar>
            </div>

            <PanelSwitch class="App_panel" ref="panelSwitch" />
        </BaseContent>
    
        <PanelValues :is-loaded="loaded" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

import { UPDATE_STEP, SET_LOADED, UPDATE_BREAKPOINTS } from '@/store/types/mutation-types'
import { LOAD_PROJECTS } from '@/store/types/action-types'

import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import PanelSwitch from '@/components/PanelSwitch'
import PanelValues from '@/components/PanelValues'
import BaseNavigation from '@/components/BaseNavigation'

export default {
    name: 'App',
    components: { BaseCorners, BaseContent, PanelSwitch, BaseNavigation, PanelValues, simplebar },
    data: () => ({
        position: '',
        centerDelay: 0,
        lastState: 'default'
    }),
    computed: {
        ...mapState('global', {
            loaded: state => state.loaded,
            windowSmall: state => state.window.s
        }),
        ...mapState('sliderAnimation', {
            isLeft: state => state.steps['is-left'].active && !state.steps['is-right'].animating,
            isRight: state => state.steps['is-right'].active && !state.steps['is-left'].animating,
            isCenter: state => state.steps['is-center'].active,
            isAnimating: state => state.animating
        })
    },
    watch: {
        position: {
            deep: true,
            handler (v) {
                this.$refs.panelSwitch.updatePosition(v, this.centerDelay)
            }
        },
        isRight (v) {
            if (!v) this.lastState = 'is-last-right'
        },
        isLeft (v) {
            if (!v) this.lastState = 'is-last-left'
        }
    },
    created () {
        this.updateBreakpoints()

        this.$router.beforeEach((to, from, next) => {
            this.position = {
                from: from.meta.position,
                to: to.meta.position
            }

            if (from.meta.centerDelay == to.meta.centerDelay) {
                this.centerDelay = from.meta.centerDelay ? from.meta.centerDelay : 0
            } else {
                this.centerDelay = 0
            }
            
            next()

            this.backToTop()
        })
    },
    async mounted () {
        this.position = {
            to: this.$route.meta.position
        }

        await this.$store.dispatch(`projects/${LOAD_PROJECTS}`)
        
        setTimeout(() => {
            this.$store.commit(`global/${SET_LOADED}`, true)
        }, 2500)

        window.addEventListener('resize', () => this.updateBreakpoints())
    },
    methods: {
        updateBreakpoints () {
            this.$store.commit(`global/${UPDATE_BREAKPOINTS}`, {
                s: window.innerWidth <= 800,
                m: window.innerWidth <= 1000 && window.innerWidth > 800,
                l: window.innerWidth > 1000
            })
        },
        backToTop () {
            this.$refs.contentRight.scrollElement.scrollTo({ top: 0, behavior: 'smooth' })

            window.scrollTo({ top: 0 })
        }
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

    .App.is-left,
    .App.is-last-left,
    .App.is-last-right.is-left {

        .App_contentLeft {
            width: 500px;
        }
    }

    .App.is-right,
    .App.is-last-right,
    .App.is-last-left.is-right {

        .App_contentLeft {
            width: 45%;
            flex-shrink: 0;
        }
    }
        

    .App_contentRight {
        flex-grow: 1;
    }

    .App.is-window-s {
        
        .App_content {
            display: block;
            height: auto;
            background-color: var(--color-background);
        }
    }
    
    .router-transition-enter-active {
        transition-duration: 1350ms;
    }
</style>
