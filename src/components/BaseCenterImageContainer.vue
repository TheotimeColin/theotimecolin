<template>
    <div class="CenterContainer" :style="{ 'backgroundColor': bgColor, 'color': textColor }">
        <div class="CenterContainer_content">
            <h2 class="CenterContainer_title" v-if="title">{{ title }}</h2>
            <slot></slot>
        </div>

        <div class="CenterContainer_image" :style="{ 'backgroundImage': `url(${image})` }" v-if="image"></div>
    </div>
</template>

<script>
export default {
    name: 'CenterImageContainer',
    props: {
        title: { type: String, default: null },
        content: { type: String, default: null },
        image: { type: String, default: null },
        bgColor: { type: String, default: '#e6e6e6' },
        textColor: { type: String, default: null }
    }
}
</script>

<style lang="scss" scoped>
.CenterContainer {
    padding: 40px 40px 0 40px;
}

.CenterContainer_image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;

    &::after {
        content: "";
        display: block;
        padding-bottom: 50%;
    }
}

.CenterContainer_content {
    padding-bottom: 40px;
}

.CenterContainer_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 20px;
}
</style>