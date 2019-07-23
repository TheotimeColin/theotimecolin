<template>
    <nav class="Navigation">
        <div class="Navigation_item Navigation_item--top">théotime</div>
        <div class="Navigation_item Navigation_item--bot">about</div>
    </nav>
</template>

<script>
export default {
    name: 'BaseNavigation'
}
</script>

<style lang="scss" scoped>
.Navigation_item {
    position: absolute;
    left: 0;
    font-weight: bold;
}

.Navigation_item--top {
    top: 0;
}

.Navigation_item--bot {
    bottom: 0;
}
</style>


