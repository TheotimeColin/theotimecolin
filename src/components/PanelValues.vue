<template>
    <div class="PanelValues" :class="{ 'is-home': !isHome, 'is-out': state.out, 'is-hidden': state.hidden, 'is-static': isStatic }" ref="panel">
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
        isLoaded: { type: Boolean, default: false },
        isHome: { type: Boolean, default: false },
        isStatic: { type: Boolean, default: false }
    },
    data: () => ({
        state: {
            appear: false,
            appearFull: false,
            out: false,
            hidden: false
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
            if (this.isHome) {
                this.animateLeft()
            } else {
                this.animateOut()
            }
        }
    },
    methods: {
        animateLeft () {
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
                        transitionDuration: 1.2,
                        position: false,
                        scale: true,
                        ease: Power4.easeInOut
                    })

                    this.$refs.title.forEach((title, i) => {
                        this.flipAnimateAfter({
                            id: title._uid,
                            element: title.$el,
                            transitionDuration: 1.2 + (0.05 * i),
                            ease: Power4.easeInOut
                        })
                    })

                    setTimeout(() => {
                        this.state.hidden = true
                    }, 1200)
                }
            })
        },
        animateOut () {
            this.state.appear = false

            setTimeout(() => {
                this.state.out = true

                setTimeout(() => {
                    this.state.hidden = true
                }, 500)
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelValues {
    position: absolute;
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    left: 20px;
    top: 20px;
    padding: 40px;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
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

.PanelValues.is-static {
    position: relative !important;
    left: 0;
    top: 0;
    width: auto;
    height: 100%;
    justify-content: flex-start;
    text-align: left;
}

.PanelValues.is-loaded {
    justify-content: flex-start;
    text-align: left;
    width: calc(45% - 20px);
}

.PanelValues.is-home {
    position: fixed;
}

.PanelValues.is-out {

    .PanelValues_background {
        transform: scaleX(0);
        transition: all 500ms ease-in-out;
    }
}

.PanelValues.is-hidden {
    display: none;
}
</style>

