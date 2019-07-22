<template>
    <div class="Content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseContent"
}
</script>

<style lang="scss" scoped>
.Content {
    padding: 40px;
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
}
</style>
