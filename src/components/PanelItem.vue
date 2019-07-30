<template>
    <div class="PanelItem" :class="{ 'is-left': isLeft }">
        <img class="PanelItem_image" :src="image" ref="image">

        <div class="PanelItem_titles">
            <div class="PanelItem_title">Kanarys</div>
            <div class="PanelItem_subtitle">Find workplaces where you belong</div>
        </div>
    </div>
</template>

<script>
import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelItem',
    mixins: [ FlipAnimation ],
    props: {
        image: { type: String, required: true },
        isLeft: { type: Boolean, default: false }
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

.PanelItem_titles {
    position: absolute;
    left: 40px;
    bottom: 40px;
}

.PanelItem_title {
    font: var(--font-main-xxl);
    font-weight: bold;
    color: var(--color-yellow-accent);
}

.PanelItem_subtitle {
    font: var(--font-title-xl);
    color: var(--color-yellow-light);
    margin-top: 10px;
}

.PanelItem.is-left {
    .PanelItem_title,
    .PanelItem_subtitle {
        opacity: 0;
    }
}
</style>

