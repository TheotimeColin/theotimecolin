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
        textColor: { type: String, default: false },
        title: { type: String, default: false },
        content: { type: String, default: false },
        image: { type: String, default: false }
    }
}
</script>

<style lang="scss" scoped>
.LeftContainer {
    display: flex;
    align-items: flex-start;
    padding: 40px 40px 0 0;
}

.LeftContainer_image {
    width: 40%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;

    &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
}

.LeftContainer_content {
    width: 60%;
    padding-left: 40px;
}

.LeftContainer_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 20px;
}
</style>