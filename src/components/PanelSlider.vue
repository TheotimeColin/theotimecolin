<template>
    <div class="PanelSlider">
        <div class="PanelSlider_backgrounds">
            <div
                class="PanelSlider_background"
                v-for="item in items"
                :key="item.id"
                :class="{ 'is-active': state.activeItem == item.slug, 'is-leaving': state.previousItem == item.slug }"
                :style="{ 'backgroundColor': item.baseColor }"
                ref="background"
            ></div>
        </div>

        <div class="PanelSlider_rail">
            <PanelItem
                class="PanelSlider_item"
                v-for="item in items"
                :active="state.activeItem == item.slug"
                :id="item.id"
                :key="item.id"
                :slug="item.slug"
                :image="item.image"
                :title="item.title"
                :subtitle="item.baseline"
                :base-color="item.baseColor"
                :highlight-color="item.highlightColor"
                :items="items"
                ref="item"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import PanelItem from '@/components/PanelItem'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelSlider',
    mixins: [ FlipAnimation ],
    components: { PanelItem },
    props: {
        isAnimating: { type: Boolean, default: false }
    },
    data: () => ({
        sliderItems: [],
        state: {
            activeItem: '',
            selectedItem: 0,
            previousItem: ''
        }
    }),
    computed: {
        ...mapState('projects', {
            items: (state) => state.items
        })
    },
    watch: {
        items () {
            this.updateActive()
        },
        $route (to, from) {
            this.updateActive()
        }
    },
    mounted () {
       window.addEventListener('wheel', () => this.nextProject())
    },
    methods: {
        nextProject() {
            if (this.state.previousItem !== '') return

            this.state.selectedItem = this.state.selectedItem + 1 < this.items.length ? this.state.selectedItem + 1 : 0
            this.updateActive()
        },
        updateActive () {
            this.state.previousItem = this.state.activeItem
            setTimeout(() => this.state.previousItem = '', 1400)

            this.items.forEach((item, i) => {
                if (this.state.activeItem == '' && i == 0) this.state.activeItem = item.slug
                if (this.$route.params.id && this.$route.params.id == item.slug) this.state.activeItem = item.slug
                if (this.state.selectedItem !== false && i == this.state.selectedItem) this.state.activeItem = item.slug
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
</style>

