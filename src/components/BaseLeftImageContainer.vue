<template>
    <div class="LeftContainer" :style="{ 'backgroundColor': bgColor, 'color': textColor }">
        <div class="LeftContainer_image" :style="{ 'backgroundImage': `url(${image})` }" v-if="image"></div>
        <div class="LeftContainer_content">
            <h2 class="LeftContainer_title" v-if="title">{{ title }}</h2>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftImageContainer',
    props: {
        bgColor: { type: String, default: '#e6e6e6' },
        textColor: { type: String, default: null },
        title: { type: String, default: null },
        content: { type: String, default: null },
        image: { type: String, default: null }
    }
}
</script>

<style lang="scss" scoped>
.LeftContainer {
    display: flex;
    align-items: stretch;
    padding: 40px 40px 0 0;
    min-height: 300px;
}

.LeftContainer_image {
    width: 40%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
}

.LeftContainer_content {
    width: 60%;
    align-self: center;
    padding: 0 0 40px 40px;
}

.LeftContainer_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 20px;
}
</style>