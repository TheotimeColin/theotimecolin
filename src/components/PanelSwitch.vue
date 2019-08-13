<template>
    <div class="PanelSwitch" ref="content">
        <PanelSlider class="PanelSwitch_slider" ref="panelSlider" />
    </div>
</template>

<script>
import { TweenLite, CSSPlugin, EasePack } from 'gsap/all'
import { mapState } from 'vuex'
import { ANIMATION_START, ANIMATION_END } from '@/store/types/mutation-types'

import PanelSlider from '@/components/PanelSlider'
import BaseNavigation from '@/components/BaseNavigation'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelSwitch',
    components: { PanelSlider, BaseNavigation },
    mixins: [ FlipAnimation ],
    computed: {
        ...mapState('sliderAnimation', {
            isAnimating: state => state.animating,
            isLeft: state => state.steps['is-left'].active,
            isRight: state => state.steps['is-right'].active
        })
    },
    methods: {
        async goLeft (v) {
            await this.delay(350)
            
            this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-center')
            
            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-center',
                transitionDuration: 1,
                ease: Power4.easeOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeOut,
                    transitionDuration: 1
                }),
                onEnd: () => this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-center')
            })

            await this.delay(1000)

            this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-left')

            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-left',
                transitionDuration: 1.25,
                ease: Power4.easeInOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeInOut,
                    transitionDuration: 1.25
                }),
                onEnd: () => {
                    this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-left')
                }
            })
        },
        async goRight (v) {
            this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-center')

            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-left',
                toggle: false,
                transitionDuration: 0.75,
                ease: Power4.easeOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeOut,
                    transitionDuration: 0.75
                }),
                onEnd: () => {
                    this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-center')
                }
            })

            await this.delay(750)

            this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-right')

            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-center',
                toggle: false,
                transitionDuration: 1,
                ease: Power4.easeOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeOut,
                    transitionDuration: 1
                }),
                onEnd: () => {
                    this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-right')
                }
            })
        },
        delay (ms) {
            return new Promise(res => setTimeout(res, ms))
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSwitch {
    position: absolute;
    top: 0;
    right: 0;
    width: 55%;
    height: 100%;
    z-index: 5;
    will-change: transform;
}

.PanelSwitch_slider {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.PanelSwitch.is-center {
    right: auto;
    left: 0;
    width: 100%;
}

.PanelSwitch.is-left {
    right: auto;
    left: 0;
    width: 400px;
}
</style>

