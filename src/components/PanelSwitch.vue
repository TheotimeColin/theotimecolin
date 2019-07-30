<template>
    <div class="PanelSwitch" :class="{ ...modifiers }" @click="onClick()">
        <div class="PanelSwitch_clip" ref="clip">
            <BaseNavigation :modifiers="{ 'is-yellow': true }" />
        </div>

        <div class="PanelSwitch_content" ref="content">
            <PanelSlider ref="panelSlider" />
        </div>
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
    data : () => ({
        state: {
            isLeft: false
        },
        modifiers: {}
    }),
    methods: {
        onClick () {
            this.state.isLeft = !this.state.isLeft

            TweenLite.to(this.$refs.clip, 1, {
                clipPath: `polygon(${this.state.isLeft ? 0 : 55}% 0%, 100% 0%, 100% 100%, ${this.state.isLeft ? 0 : 55}% 100%)`,
                ease: Power4.easeOut
            })

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

            setTimeout(() => {
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
            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSwitch {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.PanelSwitch_content {
    position: absolute;
    top: 0;
    right: 0;
    width: 55%;
    height: 100%;
}

.PanelSwitch_clip {
    height: 100%;
    position: relative;
    z-index: 6;
    clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%);
}

.PanelSwitch_content.is-center {
    right: auto;
    left: 0;
    width: 100%;
}

.PanelSwitch_content.is-left {
    right: auto;
    left: 0;
    width: 45%;
}
</style>

