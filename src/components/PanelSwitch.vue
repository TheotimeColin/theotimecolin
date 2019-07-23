<template>
    <div class="PanelSwitch" :class="[ ...modifiers ]" @click="onClick()">
        <div class="PanelSwitch_content">
            <PanelSlider />
        </div>
    </div>
</template>

<script>
import PanelSlider from '@/components/PanelSlider'

export default {
    name: 'PanelSwitch',
    components: { PanelSlider },
    data : () => ({
        modifiers: {
            'is-left': false
        }
    }),
    methods: {
        onClick () {
            this.modifiers['is-left'] = !this.modifiers['is-left']
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

.PanelSwitch.is-left {

    .PanelSwitch_content {
        
    }
}
</style>

