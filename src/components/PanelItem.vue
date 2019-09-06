<template>
    <div class="PanelItem" :class="[ classes ]" :style="{ 'color': highlightColor }">
        <router-link :to="{ name: 'Project', params: { id: slug }}" class="PanelItem_link" v-if="slug !== 'about' && $route.params.id !== slug"></router-link>
        
        <BaseMarquee class="PanelItem_placeholder" :text="subtitle" :is-animated="true" v-if="subtitle" />

        <img class="PanelItem_image" :src="image" ref="image" v-if="image">

        <div class="PanelItem_titles" v-if="title && image">
            <div class="PanelItem_title">
                <BaseTransitionText :appear="!isCenter && !isLeft && active" :text="title" :appear-delay="1200" />
            </div>
        </div>
        <div class="PanelItem_navContainer">
            <ul class="PanelItem_nav" v-if="items && slug != 'about'" ref="nav">
                <li class="PanelItem_navItem" v-for="item in items" :key="item.id">
                    <router-link :to="{ name: 'Project', params: { id: item.slug }}" :style="{ 'color': highlightColor }">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>

        <PanelAbout :active="$route.name == 'About'" :highlight-color="highlightColor" v-if="slug == 'about'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseTransitionText from '@/components/BaseTransitionText'
import BaseMarquee from '@/components/BaseMarquee'
import PanelAbout from '@/components/PanelAbout'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelItem',
    components: { BaseTransitionText, BaseMarquee, PanelAbout },
    mixins: [ FlipAnimation ],
    data: () => ({
        state: {
            leaving: false,
            changingDirection: false
        }
    }),
    props: {
        id: { type: Number },
        active: { type: Boolean, default: false },
        direction: { type: Boolean, default: true },
        slug: { type: String },
        image: { type: String },
        title: { type: String },
        subtitle: { type: String },
        baseColor: { type: String },
        highlightColor: { type: String },
        items: { type: Array, default: () => [] }
    },
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
        ...mapState('sliderAnimation', {
            isLeft: state => state.steps['is-left'].active,
            isRight: state => state.steps['is-right'].active,
            isCenter: state => state.steps['is-center'].active,
            isAnimating: state => state.animating
        }),
        classes () {
            return {
                'is-active': this.active && !this.state.changingDirection,
                'is-left': this.isLeft,
                'is-right': this.isRight,
                'is-animating': this.isAnimating,
                'is-leaving': this.state.leaving,
                'is-previous': !this.direction,
                'is-window-s': this.windowSmall
            }
        }
    },
    watch: {
        active (v) {
            this.state.changingDirection = true
            setTimeout(() => this.state.changingDirection = false, 50)

            if (!v) {
                this.state.leaving = true
                setTimeout(() => this.state.leaving = false, 1500)
            }
        }
    },
    methods: {
        onTransitionBefore ({ id }) {
            this.flipAnimateBefore({ id: 'image', element: this.$refs.image })
            this.flipAnimateBefore({ id: 'nav', element: this.$refs.nav })
        },
        onTransitionAfter ({ id, transitionDuration = 1, ease = null }) {
            if (this.active) this.flipAnimateAfter({ id: 'image', element: this.$refs.image, scale: true, transitionDuration, ease })
            if (this.active) this.flipAnimateAfter({ id: 'nav', element: this.$refs.nav, transitionDuration, ease })
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelItem {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    opacity: 0;
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
    transition: opacity 600ms ease-in;
}

.PanelItem_image {
    display: block;
    max-width: 75%;
    will-change: transform;
    transform-origin: top left;
}

.PanelItem_link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
}

.PanelItem_navContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8;
    pointer-events: none;
}

.PanelItem_nav {
    display: inline-block;
    text-align: center;
    opacity: 0;
    transition: opacity 500ms ease;
}

.PanelItem_navItem {
    display: block;
    transition: all 500ms ease-out;
    font: var(--font-main-xl);
    font-weight: bold;
    margin: 20px 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 250ms ease;

    @for $i from 0 through 6 {
        &:nth-child(#{$i}) {
            transition-delay: #{$i * 50}ms;
        }
    }

    a {
        color: var(--color-font) !important;
    }

    a.router-link-active {
        pointer-events: none;
        color: inherit !important;
    }
}

.PanelItem.is-leaving,
.PanelItem.is-active {
    transform: translateY(0);
    transition: transform 1200ms cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 400ms;
    opacity: 1;

    .PanelItem_background {
        opacity: 1;
    }
}

.PanelItem.is-active.is-previous {
    transform: translateY(0);
}

.PanelItem.is-active {
    z-index: 5;
}

.PanelItem.is-previous {
    transform: translateY(100%);
}

.PanelItem.is-leaving {
    transform: translateY(100%);
}

.PanelItem.is-leaving.is-previous {
    transform: translateY(-100%);
}

.PanelItem.is-right.is-active {
    
    .PanelItem_placeholder {
        opacity: 1;
        transition-delay: 1400ms;
    }
}

.PanelItem.is-left {

    &:not(.is-animating) {

        .PanelItem_nav,
        .PanelItem_navContainer {
            opacity: 1;
            pointer-events: all;
        }

        .PanelItem_image {
            transition: opacity 400ms ease;
        }

        &.is-window-s,
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

.PanelItem.is-window-s {

    .PanelItem_titles {
        left: 5vh;
        bottom: 5vh;
    }

    .PanelItem_navItem {
        margin: 10px 0;
    }
}
</style>

