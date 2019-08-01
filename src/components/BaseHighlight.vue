<template>
    <span class="Highlight" :class="{ 'is-appear': appear, 'is-leave': leave }"></span>
</template>

<script>
export default {
    name: 'Highlight',
    props: {
        appear: { type: Boolean, default: true },
        leave: { type: Boolean, default: false }
    }
}
</script>

<style lang="scss" scoped>
.Highlight {
    position: absolute;
    width: 100%;
    top: 22%;
    height: 70%;
    display: block;
    background-color: var(--color-highlight);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 350ms ease-in;
}

.Highlight.is-appear {
    transform: scaleX(1);
}

.Highlight.is-leave {
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 350ms ease-in;
}
</style>

