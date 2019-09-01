<template>
    <router-link :to="{ name: 'Project', params: { id: slug }}" class="PanelItem" :class="[ classes ]" :style="{ 'color': highlightColor }">
        <BaseMarquee class="PanelItem_placeholder" :text="subtitle" :is-animated="true" />

        <img class="PanelItem_image" :src="image" ref="image">

        <div class="PanelItem_titles">
            <div class="PanelItem_title">
                <BaseTransitionText :appear="!isCenter && !isLeft && active" :text="title" :appear-delay="1200" />
            </div>
        </div>

        <ul class="PanelItem_nav">
            <li class="PanelItem_navItem" v-for="item in items" :key="item.id">
                <router-link :to="{ name: 'Project', params: { id: item.slug }}" :style="{ 'color': highlightColor }">{{ item.title }}</router-link>
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
    data: () => ({
        state: {
            leaving: false
        }
    }),
    props: {
        id: { type: Number },
        active: { type: Boolean, default: false },
        slug: { type: String },
        image: { type: String, required: true },
        title: { type: String },
        subtitle: { type: String },
        baseColor: { type: String },
        highlightColor: { type: String },
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
                'is-left': this.isLeft,
                'is-right': this.isRight,
                'is-animating': this.isAnimating,
                'is-leaving': this.state.leaving
            }
        }
    },
    watch: {
        active (v) {
            if (!v) {
                this.state.leaving = true
                setTimeout(() => this.state.leaving = false, 1200)
            }
        }
    },
    methods: {
        onTransitionBefore ({ id }) {
            this.flipAnimateBefore({ id: 'image', element: this.$refs.image })
        },
        onTransitionAfter ({ id, transitionDuration = 1, ease = null }) {
            this.flipAnimateAfter({ id: 'image', element: this.$refs.image, scale: true, transitionDuration, ease })
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
    clip-path: polygon(0% 0%, 9999px 0%, 9999px 100%, 0% 100%);
    transition: clip-path 800ms ease-in-out;
    transform: translateY(-100%);
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
    transition: clip-path 800ms ease-in-out, transform 1200ms cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 400ms;

    .PanelItem_background {
        opacity: 1;
    }
}

.PanelItem.is-active {
    z-index: 5;
}

.PanelItem.is-leaving {
    transform: translateY(100%);
}

.PanelItem.is-right.is-active {
    
    .PanelItem_placeholder {
        opacity: 1;
        transition-delay: 1400ms;
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
</style>

