<template>
    <div class="PanelSwitch" :class="{ ...modifiers }" ref="content">
        <PanelSlider class="PanelSwitch_slider" ref="panelSlider" :isLeft="state.isLeft" />
    </div>
</template>

<script>
import { TweenLite, CSSPlugin, EasePack } from 'gsap/all'

import PanelSlider from '@/components/PanelSlider'
import BaseNavigation from '@/components/BaseNavigation'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelSwitch',
    components: { PanelSlider, BaseNavigation },
    mixins: [ FlipAnimation ],
    props: {
        isLeft: { type: Boolean, default: false }
    },
    data: () => ({
        state: {
            isLeft: false
        },
        modifiers: {
            'is-left': false
        }
    }),
    mounted () {
        if (this.isLeft) {
            this.state.isLeft = true
            this.modifiers['is-left'] = true
        }
    },
    watch: {
        isLeft (v) {
            if (v) {
                this.onGoLeft()
            } else {
                this.onGoRight()
            }
        }
    },
    methods: {
        async onGoLeft (v) {
            this.state.isLeft = true

            await this.delay(350)
            
            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-center',
                transitionDuration: 1,
                ease: Power4.easeOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeOut,
                    transitionDuration: 1
                })
            })

            await this.delay(1000)

            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-left',
                toggle: this.state.isLeft,
                transitionDuration: 1.25,
                ease: Power4.easeInOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeInOut,
                    transitionDuration: 1.25
                })
            })
        },
        async onGoRight (v) {
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
                })
            })

            await this.delay(500)

            this.state.isLeft = false

            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-left',
                toggle: this.state.isLeft,
                transitionDuration: 1.25,
                ease: Power4.easeInOut,
                onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                    ease: Power4.easeInOut,
                    transitionDuration: 1.25
                })
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
    width: 45%;
}

</style>

