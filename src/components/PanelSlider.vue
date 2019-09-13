<template>
    <div class="PanelSlider" :class="{ 'is-animating': isAnimating }" ref="container">
        <div class="PanelSlider_backgrounds">
            <div
                class="PanelSlider_background"
                v-for="item in [...items, aboutItem ]"
                :key="item.id"
                :class="{ 'is-active': state.activeItem == item.slug, 'is-leaving': state.previousItem == item.slug }"
                :style="{ 'backgroundColor': item.baseColor }"
                ref="background"
            ></div>
        </div>

        <router-link class="PanelSlider_hammer" :to="{ name: 'Project', params: { id: state.activeItem }}" v-if="windowSmall" v-show="$route.name == 'Homepage'" ref="hammer"></router-link>

        <div class="PanelSlider_rail">
            <PanelItem
                class="PanelSlider_item"
                v-for="item in [...items, aboutItem ]"
                :active="state.activeItem == item.slug"
                :id="item.id"
                :key="item.id"
                :slug="item.slug"
                :image="item.image"
                :title="item.title"
                :subtitle="item.baseline"
                :base-color="item.baseColor"
                :highlight-color="item.highlightColor"
                :direction="state.direction"
                :items="items"
                ref="item"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Hammer from 'hammerjs'
import { SET_ACTIVE_PROJECT } from '@/store/types/mutation-types'

import PanelItem from '@/components/PanelItem'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelSlider',
    mixins: [ FlipAnimation ],
    components: { PanelItem },
    data: () => ({
        sliderItems: [],
        aboutItem: {
            id: 999,
            slug: 'about',
            title: 'About me',
            baseColor: '#2553c9',
            highlightColor: '#01b4ff'
        },
        state: {
            activeItem: '',
            selectedItem: 0,
            previousItem: '',
            direction: true,
            animating: false
        }
    }),
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
        ...mapState('projects', {
            items: (state) => state.items
        }),
        ...mapState('sliderAnimation', {
            isAnimating: state => state.animating
        })
    },
    watch: {
        items () {
            this.updateActive({ slug: this.$route.name == 'About' ? 'about' : null })
        },
        $route (to, from) {
            this.updateActive({ slug: to.name == 'About' ? 'about' : null })
        }
    },
    mounted () {
        window.addEventListener('wheel', (e) => {
            if (this.state.animating || this.$route.name !== 'Homepage') return
            
            if (e.deltaY > 0) {
                this.updateActive({ next: true })
            } else {
                this.updateActive({ prev: true })
            }
        })

        if (this.$refs.hammer) this.setupHammer()
    },
    methods: {
        updateActive ({ slug = false, next, prev }) {
            let activeItem, reachedLimit = false
            this.state.animating = true
            let previousItem = this.state.selectedItem
            this.state.previousItem = this.state.activeItem

            if (next) {
                if (this.state.selectedItem + 1 >= this.items.length) reachedLimit = true 
                this.state.selectedItem = reachedLimit ? 0 : this.state.selectedItem + 1 
            } else if (prev) {
                if (this.state.selectedItem - 1 < 0) reachedLimit = true 
                this.state.selectedItem = reachedLimit ? this.items.length - 1 :this.state.selectedItem - 1
            }

            if (slug) { /* Has defined slug already */
                this.state.activeItem = slug
            } else {
                this.items.forEach((item, i) => {
                    if (this.state.selectedItem !== false && this.state.selectedItem == i) {
                        this.state.activeItem = item.slug
                        activeItem = item
                    }

                    if (this.$route.params.id && this.$route.params.id == item.slug) {
                        this.state.activeItem = item.slug
                        this.state.selectedItem = i
                        activeItem = item
                    }
                })
            }

            this.state.direction = reachedLimit ? this.state.selectedItem > previousItem : this.state.selectedItem < previousItem

            setTimeout(() => this.state.previousItem = '', 1400)
            setTimeout(() => this.state.animating = false, 2000)

            this.$store.commit(`projects/${SET_ACTIVE_PROJECT}`, slug == 'about' ? this.aboutItem : activeItem)
        },
        setupHammer () {
            let hammerStage = new Hammer(this.$refs.hammer.$el)
            hammerStage.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })

            hammerStage.on('swipeup', (e) => {
                if (this.state.animating || this.$route.name !== 'Homepage') return
                this.updateActive({ next: true })
            })

            hammerStage.on('swipedown', (e) => {
                if (this.state.animating || this.$route.name !== 'Homepage') return
                this.updateActive({ prev: true })
            })
        },
        onTransitionBefore () {
            if (this.$refs.item) this.$refs.item.forEach(item => {
                item.onTransitionBefore({ id: item._uid })
            })

            if (this.$refs.background) this.$refs.background.forEach((background, i) => {
                this.flipAnimateBefore({ id: `background${i}`, element: background })
            })
        },
        onTransitionAfter ({ transitionDuration = 1, ease = null }) {
            if (this.$refs.item) this.$refs.item.forEach(item => {
                item.onTransitionAfter({ id: item._uid, transitionDuration, ease })
            })

            if (this.$refs.background) this.$refs.background.forEach((background, i) => {
                this.flipAnimateAfter({
                    id: `background${i}`,
                    scale: true,
                    element: background,
                    transitionDuration,
                    ease
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSlider_rail {
    white-space: nowrap;
    height: 100%;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.PanelSlider_item {
    position: absolute;
    top: 0;
    left: 0;
}

.PanelSlider_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform-origin: top left;
    opacity: 0;
    transition: opacity 700ms ease;

    &.is-active {
        opacity: 1;
        z-index: 2;
        transition-delay: 700ms;
    }

    &.is-leaving {
        opacity: 1;
    }
}

.PanelSlider_hammer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: 12;
    display: block;
}

.PanelSlider.is-animating {

    .PanelSlider_rail {
        overflow: visible;
    }
}
</style>

