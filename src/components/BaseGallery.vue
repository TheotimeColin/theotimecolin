<template>
    <div class="Gallery" :style="{ '--background-color': bgColor, '--text-color': textColor }">
        <div class="Gallery_title">{{ title }}</div>
        <div class="Gallery_items">
            <BaseGalleryItem class="Gallery_item" v-for="item in items" :title="item.title" :image="item.image" :key="item.id" />
        </div>
    </div>
</template>

<script>
import BaseGalleryItem from '@/components/BaseGalleryItem'

export default {
    name: 'BaseGallery',
    components: { BaseGalleryItem },
    props: {
        title: { type: String },
        items: { type: Array, default: () => [] },
        textColor: { type: String },
        bgColor: { type: String }
    }
}
</script>

<style lang="scss" scoped>
.Gallery {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 40px;
}

.Gallery_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 40px;
}
</style>