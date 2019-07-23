<template>
    <div class="PanelSlider">
        <PanelItem :image="assets.tempProjectMain" ref="item" />
    </div>
</template>

<script>
import PanelItem from '@/components/PanelItem'

import tempProjectMain from '@/assets/img/temp/project-main.jpg'

export default {
    name: 'PanelSlider',
    components: { PanelItem },
    data: () => ({
        assets: { tempProjectMain }
    }),
    methods: {
        onTransitionBefore () {
            this.$refs.item.onTransitionBefore()
        },
        onTransitionAfter () {
            this.$refs.item.onTransitionAfter()
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSlider {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
}
</style>

