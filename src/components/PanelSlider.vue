<template>
    <div class="PanelSlider">
        <div class="PanelSlider_rail">
            <PanelItem
                class="PanelSlider_item"
                v-for="(item, i) in items"
                :id="item.id"
                :key="item.id"
                :slug="item.slug"
                :image="item.image"
                :title="item.title"
                :subtitle="item.subtitle"
                :color="item.color"
                :position="i + 1"
                :ready="state.next === i"
                :active="state.active === i"
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
        state: {
            active: 0,
            next: 1
        }
    }),
    computed: {
        ...mapState('projects', {
            items: (state) => state.items
        })
    },
    mounted () {
        
    },
    methods: {
        onTransitionBefore () {
            this.$refs.item.forEach(item => {
                item.onTransitionBefore({ id: item._uid })
            })
        },
        onTransitionAfter ({ transitionDuration = 1, ease = null }) {
            this.$refs.item.forEach(item => {
                item.onTransitionAfter({ id: item._uid, transitionDuration, ease })
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
</style>

