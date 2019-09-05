<template>
    <div class="TextList">

    </div>
</template>

<script>
export default {
    name: 'BaseTextList',
    props: {
        title: { type: String },
        items: { type: Array, default: () => [] }
    }
}
</script>

<style lang="scss" scoped>
.TextList {
    
}
</style>