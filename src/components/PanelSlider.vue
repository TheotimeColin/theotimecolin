<template>
    <div class="PanelSlider">
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
            activeItem: ''
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
       
    },
    methods: {
        updateActive () {
            this.items.forEach((item, i) => {
                if (i == 0 && this.state.activeItem == '') this.state.activeItem = item.slug
                if (this.$route.params.id && this.$route.params.id == item.slug) this.state.activeItem = item.slug
            })
        },
        onTransitionBefore () {
            if (this.$refs.item) this.$refs.item.forEach(item => {
                item.onTransitionBefore({ id: item._uid })
            })
        },
        onTransitionAfter ({ transitionDuration = 1, ease = null }) {
            if (this.$refs.item) this.$refs.item.forEach(item => {
                item.onTransitionAfter({ id: item._uid, transitionDuration, ease })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelSlider_rail {
    height: 100%;
    position: relative;
    z-index: 2;
}

.PanelSlider_item {
    position: absolute;
    top: 0;
    left: 0;
}
</style>

