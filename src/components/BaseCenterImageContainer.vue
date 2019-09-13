<template>
    <div class="CenterContainer" :class="{ 'is-appear': appear, 'is-animated': animated, 'is-window-m': windowMedium }" :style="{ '--background-color': bgColor, '--color': textColor, '--appear-delay': appearDelay + 'ms' }" ref="container">
        <div class="CenterContainer_wrapper">
            <div class="CenterContainer_content">
                <p class="CenterContainer_subtitle" v-if="subtitle">{{ subtitle }}</p>
                <h2 class="CenterContainer_title" v-if="title">{{ title }}</h2>
                <slot></slot>
            </div>

            <div class="CenterContainer_image" :style="{ 'backgroundImage': `url(${image})` }" v-if="image"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CenterImageContainer',
    props: {
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 },
        title: { type: String, default: null },
        subtitle: { type: String, default: null },
        content: { type: String, default: null },
        image: { type: String, default: null },
        bgColor: { type: String, default: '#e6e6e6' },
        textColor: { type: String, default: null }
    },
    data: () => ({
        animated: true
    }),
    computed: {
        ...mapState('global', {
            windowMedium: state => state.window.m
        }),
    },
    mounted () {
        // const bounds = this.$refs.container.getBoundingClientRect()
        // this.animated = bounds.top <= window.innerHeight
    }
}
</script>

<style lang="scss" scoped>
.CenterContainer {
    padding: 60px 40px 0 40px;
    color: var(--color);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-color);
        transform: scaleY(0);
        transform-origin: bottom left;
    }
}

.CenterContainer_wrapper {
    max-width: 900px;
    margin: 0 auto;
}

.CenterContainer_image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    transform: translateY(100%);

    &::after {
        content: "";
        display: block;
        padding-bottom: 50%;
    }
}

.CenterContainer_content {
    padding-bottom: 60px;
    transform: translateY(50%);
    opacity: 0;
}

.CenterContainer_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 20px;
}

.CenterContainer_subtitle {
    font: var(--font-main-l);
    font-weight: bold;
    opacity: 0.2;
}

.CenterContainer.is-animated {

    &::before {
        transition: transform 800ms var(--ease-out-cubic);
    }

    .CenterContainer_image {
        transition: transform 800ms var(--ease-out-cubic);
    }

    .CenterContainer_content {
        transition: all 600ms var(--ease-out-cubic);
    }
}

.CenterContainer.is-appear {

    &::before {
        transform: scaleY(1);
        transition-delay: var(--appear-delay);
    }

    .CenterContainer_image,
    .CenterContainer_content {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--appear-delay) + 600ms);
    }
}

.CenterContainer.is-window-m {
    padding: 20px 20px 0 20px;

    .CenterContainer_content {
        padding-bottom: 20px;
    }
}
</style>