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
    height: 100%;
}
</style>
