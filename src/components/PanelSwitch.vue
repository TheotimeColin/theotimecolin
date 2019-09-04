<template>
    <div class="PanelSwitch" ref="content">
        <PanelSlider class="PanelSwitch_slider" :is-about="isAbout" ref="panelSlider" />
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
        }),
        isAbout () {
            return this.$route.name == 'About'
        }
    },
    methods: {
        async updatePosition (position, delay = 0) {
            if (!(position.from == 'center' && position.to == position.from)) await this.goCenter()

            await this.delay(delay)

            switch (position.to) {
                case 'left': this.goLeft(); break;
                case 'right': this.goRight(); break;
            }
        },
        async goLeft (v) {
            return new Promise(resolve => {
                this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-left')

                this.flipAnimate({
                    element: this.$refs.content,
                    transitionClass: 'is-go-left',
                    modifier: 'is-left',
                    transitionDuration: 1.5,
                    ease: Power4.easeInOut,
                    onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                    onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                        ease: Power4.easeInOut,
                        transitionDuration: 1.5
                    }),
                    onEnd: () => {
                        this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-left')
                        this.$refs.content.classList.remove('is-right')
                        this.$refs.content.classList.remove('is-center')
                        resolve()
                    }
                })
            })
        },
        async goRight (v) {
            return new Promise(resolve => {
                this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-right')

                this.flipAnimate({
                    element: this.$refs.content,
                    transitionClass: 'is-go-right',
                    modifier: 'is-right',
                    toggle: true,
                    transitionDuration: 1.25,
                    ease: Power4.easeInOut,
                    onBefore: () => this.$refs.panelSlider.onTransitionBefore(),
                    onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                        ease: Power4.easeInOut,
                        transitionDuration: 1.25
                    }),
                    onEnd: () => {
                        this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-right')
                        this.$refs.content.classList.remove('is-left')
                        this.$refs.content.classList.remove('is-center')
                        resolve()
                    }
                })
            })
        },
        async goCenter (v) {
            return new Promise(resolve => {
                this.$store.commit(`sliderAnimation/${ANIMATION_START}`, 'is-center')
                
                this.flipAnimate({
                    element: this.$refs.content,
                    transitionClass: 'is-go-center',
                    modifier: 'is-center',
                    transitionDuration: 1,
                    ease: Power4.easeOut,
                    onBefore: () => {
                        this.$refs.panelSlider.onTransitionBefore()
                    },
                    onAfter: () => this.$refs.panelSlider.onTransitionAfter({
                        ease: Power4.easeOut,
                        transitionDuration: 1
                    }),
                    onEnd: () => {
                        this.$store.commit(`sliderAnimation/${ANIMATION_END}`, 'is-center')
                        resolve()
                    }
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
    height: 100%;
    z-index: 5;
    will-change: transform;
}

.PanelSwitch_slider,
.PanelSwitch_about {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.PanelSwitch_about {
    z-index: 10;
    background-color: #2553c9;
}

.PanelSwitch.is-go-center {
    width: 100% !important;
}

.PanelSwitch.is-center {
    width: 100%;
}

.PanelSwitch.is-left {
    right: auto;
    left: 0;
    width: 500px;

    &.is-center {
        width: 100%;
    }
}

.PanelSwitch.is-right {
    left: auto;
    right: 0;
    width: 55%;

    &.is-center {
        width: 100%;
    }
}

.PanelSwitch.is-go-left {
    right: auto !important;
    left: 0 !important;
    width: 500px !important;
}

.PanelSwitch.is-go-right {
    left: auto !important;
    right: 0 !important;
    width: 55% !important;
}
</style>

