<template>
    <a :href="link" class="FloatingButton" :class="{ 'is-appear': appear, 'is-window-s': windowSmall }" target="_blank" :title="title" :style="{ '--icon': `url(${icon})`, '--background-color': color }">
    </a>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BaseFloatingButton',
    props: {
        appear: { type: Boolean, default: true },
        icon: { type: String },
        color: { type: String, default: '#2553c9' },
        link: { type: String },
        title: { type: String }
    },
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        })
    }
}
</script>

<style lang="scss" scoped>
.FloatingButton {
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    z-index: 5;
    width: 60px;
    height: 60px;
    background-image: var(--icon);
    background-color: var(--background-color);
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(100%);
    opacity: 0;
    transition: all 500ms ease;
    transition-delay: 2500ms;
}

.FloatingButton.is-appear {
    opacity: 1;
    transform: translateY(0%);
}

.FloatingButton.is-window-s {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    background-size: 16px;
}
</style>