<template>
    <nav class="Navigation" :class="[ ...modifiers ]">
        <router-link :to="{ name: 'Homepage' }" class="Navigation_item Navigation_item--top">théotime</router-link>
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
    z-index: 20;
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


