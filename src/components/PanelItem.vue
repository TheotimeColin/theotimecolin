<template>
    <div class="PanelItem">
        <img class="PanelItem_image" :src="image" ref="image">
    </div>
</template>

<script>
import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelItem',
    mixins: [ FlipAnimation ],
    props: {
        image: { type: String, required: true }
    },
    methods: {
        onTransitionBefore () {
            this.flipAnimateBefore({ element: this.$refs.image,  })
        },
        onTransitionAfter ({ transitionDuration = 1, ease = null }) {
            this.flipAnimateAfter({ element: this.$refs.image, transitionDuration, ease })
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
}

.PanelItem_image {

}
</style>

