<template>
    <BaseContent class="Homepage">
        <BaseCorners />

        <div class="Homepage_left">
            Oh hi
        </div>

        <PanelSwitch class="Homepage_right" :isLeft="true" />
    </BaseContent>
</template>

<script>
import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import PanelSwitch from '@/components/PanelSwitch'

export default {
    name: "Project",
    components: { BaseCorners, BaseContent, PanelSwitch }   
}
</script>

<style lang="scss" scoped>
.Homepage_left {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-left: 40px;
}

.Homepage_title {
    margin: 15px 0;
}
</style>