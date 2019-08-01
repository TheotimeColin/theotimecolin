<template>
    <div class="PanelValues" ref="panel">
        <div class="PanelValues_background" ref="background"></div>

        <div class="PanelValues_titles">
            <BaseDisplayTitle
                class="PanelValues_title"
                v-for="title in titles"
                :baseline="title.baseline"
                :highlight="title.highlight"
                :appear="state.appear"
                :appear-full="state.appearFull"
                :key="title.id"
                ref="title"
            />
        </div>
    </div>
</template>

<script>
import BaseDisplayTitle from '@/components/BaseDisplayTitle'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelValues',
    components: { BaseDisplayTitle },
    mixins: [ FlipAnimation ],
    props: {
        isLoaded: { type: Boolean, default: false }
    },
    data: () => ({
        state: {
            appear: false,
            appearFull: false
        },
        titles: [
            { id: 0, baseline: "code with", highlight: "passion" },
            { id: 1, baseline: "design with", highlight: "purpose" },
            { id: 2, baseline: "work with", highlight: "creativity" }
        ]
    }),
    mounted () {
        setTimeout(() => {
            this.state.appear = true
        }, 1000)
    },
    watch: {
        isLoaded () {
            this.flipAnimate({
                element: this.$refs.panel,
                modifier: 'is-loaded',
                transitionDuration: 1,
                ease: Power4.easeOut,
                onBefore: () => {
                    this.flipAnimateBefore({ element: this.$refs.background })

                    this.$refs.title.forEach(title => {
                        this.flipAnimateBefore({ id: title._uid, element: title.$el })
                    })
                },
                onAfter: () => {
                    this.flipAnimateAfter({
                        element: this.$refs.background,
                        transitionDuration: 1,
                        position: false,
                        scale: true,
                        ease: Power4.easeOut
                    })

                    this.$refs.title.forEach((title, i) => {
                        this.flipAnimateAfter({
                            id: title._uid,
                            element: title.$el,
                            transitionDuration: 1 + (0.2 * i),
                            ease: Power4.easeOut
                        })
                    })
                }
            })

            
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelValues {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    padding: 40px;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.PanelValues_background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    transform-origin: left;
}

.PanelValues_title {
    margin: 8px 0;
}

.PanelValues.is-loaded {
    position: absolute;
    justify-content: flex-start;
    text-align: left;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>

