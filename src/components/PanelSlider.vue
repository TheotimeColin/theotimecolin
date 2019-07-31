<template>
    <div class="PanelSlider" :class="{ 'is-left': isLeft }">
        <div class="PanelSlider_background" ref="background"></div>

        <div class="PanelSlider_rail">
            <PanelItem :image="assets.tempProjectMain" ref="item" :isLeft="isLeft" />
        </div>
    </div>
</template>

<script>
import PanelItem from '@/components/PanelItem'

import FlipAnimation from '@/mixins/FlipAnimation'
import tempProjectMain from '@/assets/img/temp/project-main.jpg'

export default {
    name: 'PanelSlider',
    mixins: [ FlipAnimation ],
    components: { PanelItem },
    props: {
        isLeft: { type: Boolean, default: false }
    },
    data: () => ({
        assets: { tempProjectMain }
    }),
    methods: {
        onTransitionBefore () {
            this.flipAnimateBefore({
                element: this.$refs.background,
                scale: true
            })

            this.$refs.item.onTransitionBefore()
        },
        onTransitionAfter ({ transitionDuration = 1, ease = null }) {
            this.flipAnimateAfter({
                element: this.$refs.background,
                scale: true,
                transitionDuration: transitionDuration,
                ease
            })

            this.$refs.item.onTransitionAfter({ transitionDuration, ease })
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSlider {
    height: 100%;
    position: relative;
}

.PanelSlider_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-yellow-background);
    transform-origin: top left;
}

.PanelSlider_rail {
    white-space: nowrap;
    height: 100%;
    position: relative;
    z-index: 2;
}
</style>

