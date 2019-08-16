<template>
    <router-link :to="{ name: 'Project', params: { id: slug }}" class="PanelItem" :class="[ classes, `is-${color}` ]">
        <div class="PanelItem_background" ref="background"></div>

        <BaseMarquee class="PanelItem_placeholder" :text="subtitle" :is-animated="active" />

        <img class="PanelItem_image" :src="image" ref="image">

        <div class="PanelItem_titles">
            <div class="PanelItem_title">
                <BaseTransitionText :appear="!isCenter && !isLeft" :text="title" />
            </div>
        </div>

        <ul class="PanelItem_nav">
            <li class="PanelItem_navItem" :class="{ 'is-active': item.id == id }" v-for="item in items" :key="item.id">
                <router-link :to="{ name: 'Project', params: { id: item.slug }}">{{ item.title }}</router-link>
            </li>
        </ul>
    </router-link>
</template>

<script>
import { mapState } from 'vuex'

import BaseTransitionText from '@/components/BaseTransitionText'
import BaseMarquee from '@/components/BaseMarquee'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelItem',
    components: { BaseTransitionText, BaseMarquee },
    mixins: [ FlipAnimation ],
    props: {
        id: { type: Number },
        active: { type: Boolean, default: false },
        ready: { type: Boolean, default: false },
        slug: { type: String },
        image: { type: String, required: true },
        title: { type: String },
        color: { type: String },
        position: { type: Number },
        subtitle: { type: String },
        items: { type: Array, default: () => [] }
    },
    computed: {
        ...mapState('sliderAnimation', {
            isLeft: state => state.steps['is-left'].active,
            isRight: state => state.steps['is-right'].active,
            isCenter: state => state.steps['is-center'].active,
            isAnimating: state => state.animating
        }),
        classes () {
            return {
                'is-active': this.active,
                'is-ready': this.ready,
                'is-left': this.isLeft,
                'is-right': this.isRight,
                'is-animating': this.isAnimating
            }
        }
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
    position: relative;
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
    opacity: 0;
    transition: opacity 400ms ease-in;
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

.PanelItem_nav {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.PanelItem_navItem {
    display: block;
    transition: all 500ms ease-out;
    font: var(--font-main-xl);
    font-weight: bold;
    margin: 10px 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 250ms ease;

    @for $i from 0 through 6 {
        &:nth-child(#{$i}) {
            transition-delay: #{$i * 50}ms;
        }
    }
}

.PanelItem.is-active {
    z-index: 5;
    clip-path: polygon(0% 0%, 400% 0%, 400% 100%, 0% 100%);
}

.PanelItem.is-ready {
    z-index: 4;
    clip-path: polygon(0% 0%, 400% 0%, 400% 0%, 0% 0%);
}

.PanelItem.is-right {
    
    .PanelItem_placeholder {
        opacity: 1;
        transition-delay: 800ms;
    }
}

.PanelItem.is-left {

    &:not(.is-animating) {

        .PanelItem_nav {
            display: flex;
        }

        .PanelItem_image {
            transition: opacity 400ms ease;
        }

        &:hover {

            .PanelItem_image {
                opacity: 0.05;
            }

            .PanelItem_navItem {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
}

.PanelItem.is-yellow {

    .PanelItem_background { background-color: var(--color-yellow-background); }
    .PanelItem_title, .PanelItem_position, .PanelItem_navItem.is-active { color: var(--color-yellow-accent); }
    .PanelItem_subtitle, .PanelItem_placeholder { color: var(--color-yellow-light); }
}

.PanelItem.is-blue {

    .PanelItem_background { background-color: var(--color-blue-background); }
    .PanelItem_title, .PanelItem_position, .PanelItem_navItem.is-active { color: var(--color-blue-accent); }
    .PanelItem_subtitle,  .PanelItem_placeholder { color: var(--color-blue-light); }
}
</style>

