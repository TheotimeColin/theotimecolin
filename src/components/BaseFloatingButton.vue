<template>
    <a :href="link" class="FloatingButton" :style="{ '--icon': `url(${icon})`, '--background-color': color }">
    </a>
</template>

<script>
export default {
    name: 'BaseFloatingButton',
    props: {
        icon: { type: String },
        color: { type: String, default: '#2553c9' },
        link: { type: String }
    }
}
</script>

<style lang="scss" scoped>
.FloatingButton {
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
    z-index: 5;
    width: 60px;
    height: 60px;
    background-image: var(--icon);
    background-color: var(--background-color);
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
}
</style>