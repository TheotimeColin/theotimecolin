<template>
    <div class="LeftContainer" :class="{ 'is-appear': appear, 'is-animated': animated, 'is-window-s': windowSmall }" :style="{ '--background-color': bgColor, '--color': textColor, '--appear-delay': appearDelay + 'ms' }" ref="container">
        <div class="LeftContainer_wrapper">
            <div class="LeftContainer_image" :style="{ 'backgroundImage': `url(${image})` }" v-if="image"></div>
            <div class="LeftContainer_content">
                <p class="LeftContainer_subtitle" v-if="subtitle">01. the pitch</p>
                <h2 class="LeftContainer_title" v-if="title">
                    {{ title }}
                </h2>

                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'LeftImageContainer',
    props: {
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 },
        bgColor: { type: String, default: '#e6e6e6' },
        textColor: { type: String, default: null },
        title: { type: String, default: null },
        subtitle: { type: String, default: null },
        content: { type: String, default: null },
        image: { type: String, default: null }
    },
    data: () => ({
        animated: true
    }),
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
    },
    mounted () {
        // const bounds = this.$refs.container.getBoundingClientRect()
        // this.animated = bounds.top <= window.innerHeight
    }
}
</script>

<style lang="scss" scoped>
.LeftContainer {
    color: var(--color);
    position: relative;
    padding-top: 20px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-color);
        transform: scaleY(0);
        transform-origin: bottom left;
    }
}

.LeftContainer_wrapper {
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    min-height: 300px;
    padding: 0 40px 0 0;
}

.LeftContainer_image {
    width: 50%;
    margin: -20px 0 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    transform: translateY(100%);
}

.LeftContainer_content {
    width: 60%;
    max-width: 600px;
    align-self: center;
    padding: 40px 0 40px 40px;
    transform: translateY(50%);
    opacity: 0;
    position: relative;
}

.LeftContainer_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 20px;
    position: relative;
}

.LeftContainer_subtitle {
    font: var(--font-main-l);
    font-weight: bold;
    opacity: 0.2;
}

.LeftContainer.is-animated {

    &::before {
        transition: transform 600ms var(--ease-out-cubic);
    }

    .LeftContainer_image {
        transition: transform 800ms var(--ease-out-cubic);
    }

    .LeftContainer_content {
        transition: all 600ms var(--ease-out-cubic);
    }
}

.LeftContainer.is-appear {

    &::before {
        transform: scaleY(1);
        transition-delay: calc(var(--appear-delay) + 200ms);
    }

    .LeftContainer_image,
    .LeftContainer_content {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--appear-delay) + 200ms);
    }
}

.LeftContainer.is-window-s {

    .LeftContainer_wrapper {
        display: flex;
        flex-direction: column-reverse;
        padding: 20px;
    }

    .LeftContainer_image,
    .LeftContainer_content {
        width: auto;
    }

    .LeftContainer_content {
        padding: 0;
    }

    .LeftContainer_image {
        height: 200px;
        width: 100%;
        margin-top: 20px;
    }
}
</style>