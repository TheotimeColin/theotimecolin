<template>
    <div class="GalleryItem">
        <img :src="image">
    </div>
</template>

<script>
export default {
    name: 'BaseGalleryItem',
    props: {
        image: { type: String },
        title: { type: String }
    }
}
</script>

<style lang="scss" scoped>
.GalleryItem {
    
}
</style>