<template>
    <router-link :to="{ name: 'Project', params: { id: 'test' }}" class="PanelItem" :class="[ { 'is-active': active, 'is-ready': ready, 'is-left': isLeft }, `is-${color}` ]">
        <div class="PanelItem_background" ref="background"></div>

        <BaseMarquee class="PanelItem_placeholder" :text="subtitle" :is-animated="active" />

        <img class="PanelItem_image" :src="image" ref="image">

        <BaseTransitionText class="PanelItem_position" :appear="!isLeft" :text="('0' + position).slice(-2)" ref="position" />

        <div class="PanelItem_titles">
            <div class="PanelItem_title">
                <BaseTransitionText :appear="!isLeft" :text="title" />
            </div>
        </div>
    </router-link>
</template>

<script>
import BaseTransitionText from '@/components/BaseTransitionText'
import BaseMarquee from '@/components/BaseMarquee'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelItem',
    components: { BaseTransitionText, BaseMarquee },
    mixins: [ FlipAnimation ],
    props: {
        active: { type: Boolean, default: false },
        ready: { type: Boolean, default: false },
        image: { type: String, required: true },
        title: { type: String },
        color: { type: String },
        position: { type: Number },
        subtitle: { type: String },
        isLeft: { type: Boolean, default: false }
    },
    methods: {
        onTransitionBefore ({ id }) {
            this.flipAnimateBefore({
                id,
                element: this.$refs.background
            })

            this.flipAnimateBefore({ id: 'image', element: this.$refs.image })
            this.flipAnimateBefore({ id: 'position', element: this.$refs.position })
        },
        onTransitionAfter ({ id, transitionDuration = 1, ease = null }) {
            this.flipAnimateAfter({
                id,
                element: this.$refs.background,
                scale: true,
                transitionDuration: transitionDuration,
                ease
            })

            this.flipAnimateAfter({ id: 'image', element: this.$refs.image, scale: true, transitionDuration, ease })
            this.flipAnimateAfter({ id: 'position', element: this.$refs.position, transitionDuration, ease })
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelItem {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    clip-path: polygon(0% 0%, 400% 0%, 400% 100%, 0% 100%);
    transition: clip-path 800ms ease-in-out;
}

.PanelItem_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: top left;
}

.PanelItem_titles {
    position: absolute;
    left: 40px;
    bottom: 40px;
}

.PanelItem_title {
    font: var(--font-main-xxl);
    font-weight: bold;
}

.PanelItem_subtitle {
    font: var(--font-title-xl);
    margin-top: 10px;
}

.PanelItem_placeholder {
    font: var(--font-main-xxxl);
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 150ms ease-in;
    transition-delay: 900ms;
}

.PanelItem_image {
    will-change: transform;
    transform-origin: top left;
    max-width: 75%;
}

.PanelItem_position {
    position: absolute !important;
    top: 40px;
    right: 40px;
    font: var(--font-main-xxl);
    font-weight: bold;
}

.PanelItem.is-active {
    z-index: 5;
    clip-path: polygon(0% 0%, 400% 0%, 400% 100%, 0% 100%);
}

.PanelItem.is-ready {
    z-index: 4;
    clip-path: polygon(0% 0%, 400% 0%, 400% 0%, 0% 0%);
}

.PanelItem.is-left {

    .PanelItem_placeholder {
        clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
    }
}

.PanelItem.is-yellow {

    .PanelItem_background { background-color: var(--color-yellow-background); }
    .PanelItem_title, .PanelItem_position { color: var(--color-yellow-accent); }
    .PanelItem_subtitle, .PanelItem_placeholder { color: var(--color-yellow-light); }
}

.PanelItem.is-blue {

    .PanelItem_background { background-color: var(--color-blue-background); }
    .PanelItem_title, .PanelItem_position { color: var(--color-blue-accent); }
    .PanelItem_subtitle,  .PanelItem_placeholder { color: var(--color-blue-light); }
}
</style>

