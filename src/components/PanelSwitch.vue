<template>
    <div class="PanelSwitch" :class="[ ...modifiers ]" @click="onClick()">
        <div class="PanelSwitch_content" ref="content">
            <PanelSlider />
        </div>
    </div>
</template>

<script>
import PanelSlider from '@/components/PanelSlider'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelSwitch',
    components: { PanelSlider },
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
            
            this.flipAnimate({
                element: this.$refs.content,
                modifier: 'is-left',
                toggle: this.state.isLeft
            })
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
    width: 50%;
    height: 100%;
    background-color: var(--color-yellow-light);
}

.PanelSwitch_content.is-left {
    right: auto;
    left: 0;
}
</style>

