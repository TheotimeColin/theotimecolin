<template>
    <div class="PanelAbout" :style="{ '--highlight-color': highlightColor }">
        <div class="PanelAbout_content">
            <div class="PanelAbout_titleMain" ref="title">About me</div>
            <div class="PanelAbout_text" v-if="state.textActive">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate temporibus
                fuga odio veritatis pariatur modi deleniti. Nesciunt consequuntur,
                eum quo harum natus, debitis quas dignissimos possimus nostrum atque sequi magni?
            </div>
        </div>
    </div>
</template>

<script>
import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelAbout',
    mixins: [ FlipAnimation ],
    components: { },
    props: {
        active: { type: Boolean, default: false },
        highlightColor: { type: String }
    },
    data: () => ({
        assets: { },
        state: {
            textActive: true
        }
    }),
    watch: {
        active (v) {
            

            setTimeout(() => {
                this.flipAnimateBefore({ id: 'title', element: this.$refs.title })
                this.state.textActive = v
                this.$nextTick(() => this.flipAnimateAfter({ id: 'title', element: this.$refs.title, transitionDuration: 0.75 }))
            }, v ? 2000 : 0)
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.PanelAbout {
    height: 100%;
    white-space: initial;
    text-align: center;
    color: var(--highlight-color);
}

.PanelAbout_content {
    width: 400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.PanelAbout_titleMain {
    font: var(--font-main-xxl);
    font-weight: bold;
}
</style>