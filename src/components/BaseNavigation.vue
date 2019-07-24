<template>
    <nav class="Navigation" :class="[ ...modifiers ]">
        <div class="Navigation_item Navigation_item--top">théotime</div>
        <div class="Navigation_item Navigation_item--bot">about</div>
    </nav>
</template>

<script>
export default {
    name: 'BaseNavigation',
    props: {
        modifiers: { type: Object, default: () => {} }
    }
}
</script>

<style lang="scss" scoped>
.Navigation_item {
    position: absolute;
    left: 40px;
    font-weight: bold;
}

.Navigation_item--top {
    top: 40px;
}

.Navigation_item--bot {
    bottom: 40px;
}

.Navigation.is-yellow {
    .Navigation_item {
        color: var(--color-yellow-accent);
    }
}
</style>


