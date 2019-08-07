<template>
    <div class="PanelSlider" :class="{ 'is-left': isLeft }">
        <div class="PanelSlider_rail">
            <PanelItem
                class="PanelSlider_item"
                v-for="(item, i) in items"
                :key="item.id"
                :image="item.image"
                :title="item.title"
                :subtitle="item.subtitle"
                :color="item.color"
                :position="i + 1"
                :ready="state.next === i"
                :active="state.active === i"
                :isLeft="isLeft"
                :items="items"
                ref="item"
            />
        </div>
    </div>
</template>

<script>
import PanelItem from '@/components/PanelItem'

import FlipAnimation from '@/mixins/FlipAnimation'
import tempProjectMain0 from '@/assets/img/temp/project-main-0.png'
import tempProjectMain1 from '@/assets/img/temp/project-main-1.png'

export default {
    name: 'PanelSlider',
    mixins: [ FlipAnimation ],
    components: { PanelItem },
    props: {
        isLeft: { type: Boolean, default: false }
    },
    data: () => ({
        assets: { tempProjectMain0, tempProjectMain1 },
        state: {
            active: 0,
            next: 1
        },
        items: [
            { id: 0, title: 'Kanarys', subtitle: 'Find workplaces where you belong', image: tempProjectMain0, color: 'yellow' },
            { id: 1, title: 'Projets WWF', subtitle: 'Ici et là, la WWF agit', image: tempProjectMain1, color: 'blue' },
            { id: 2, title: 'Agence Wandi', subtitle: 'Sérieux sans se prendre au sérieux', image: tempProjectMain0, color: 'yellow' },
            { id: 3, title: 'Aru', subtitle: 'et le maître du Temps', image: tempProjectMain1, color: 'blue' }
        ]
    }),
    mounted () {
        setInterval(() => {
            this.state.active = this.state.active < 3 ? this.state.active + 1 : 0
            this.state.next = this.state.active < 3 ? this.state.active + 1 : 0
        }, 100000)
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

