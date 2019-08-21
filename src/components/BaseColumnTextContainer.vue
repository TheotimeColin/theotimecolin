<template>
    <div class="ColumnText">
        <h2 class="ColumnText_title">{{ title }}</h2>
        <div class="ColumnText_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColumnTextContainer',
    props: {
        title: { type: String, default: false }
    }
}
</script>

<style lang="scss" scoped>
.ColumnText {
    display: flex;
    align-items: flex-start;
}

.ColumnText_title {
    font: var(--font-main-xl);
    font-weight: bold;
    min-width: 200px;
}
</style>