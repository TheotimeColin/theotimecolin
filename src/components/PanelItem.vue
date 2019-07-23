<template>
    <div class="PanelItem">
        <div class="PanelItem_image" :style="{ backgroundImage: `url(${image})`}"></div>
    </div>
</template>

<script>
export default {
    name: "PanelItem",
    props: {
        image: { type: String, required: true }
    }
}
</script>

<style lang="scss" scoped>
.PanelItem {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.PanelItem_image {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

