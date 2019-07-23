<template>
    <div class="PanelSlider">
        <PanelItem :image="assets.tempProjectMain" />
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
    })
}
</script>

<style lang="scss" scoped>
.PanelSlider {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
}
</style>

