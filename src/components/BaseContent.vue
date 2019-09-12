<template>
    <div class="Content" :class="{ 'is-window-s': windowSmall }">
        <slot></slot>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BaseContent',
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        })
    }
}
</script>

<style lang="scss" scoped>
.Content {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
}

.Content.is-window-s {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
}
</style>
