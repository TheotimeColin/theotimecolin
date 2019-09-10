<template>
    <div class="GalleryItem" :style="{ '--height': height + 'px' }">
        <img class="GalleryItem_image" :src="image">
    </div>
</template>

<script>
export default {
    name: 'BaseGalleryItem',
    props: {
        image: { type: String },
        height: { type: Number, default: 100 },
        title: { type: String }
    }
}
</script>

<style lang="scss" scoped>
.GalleryItem {
    padding: 5px;
}

.GalleryItem_image {
    display: block;
    height: var(--height);
    width: auto;
}
</style>