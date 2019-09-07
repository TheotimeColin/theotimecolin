<template>
    <div class="PanelValues" :class="{ 'is-static': isStatic, 'is-animate-out': state.animateOut, 'is-hidden': state.animateEnd, 'is-window-small': isWindowSmall }" ref="panel">
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
import { mapState } from 'vuex'
import { SET_VISIBLE } from '@/store/types/mutation-types'

import BaseDisplayTitle from '@/components/BaseDisplayTitle'

import FlipAnimation from '@/mixins/FlipAnimation'

export default {
    name: 'PanelValues',
    components: { BaseDisplayTitle },
    mixins: [ FlipAnimation ],
    props: {
        isLoaded: { type: Boolean, default: false },
        isStatic: { type: Boolean, default: false }
    },
    data: () => ({
        state: {
            appear: false,
            animateOut: false,
            animateEnd: false
        },
        titles: [
            { id: 0, baseline: "code with", highlight: "passion" },
            { id: 1, baseline: "design with", highlight: "purpose" },
            { id: 2, baseline: "work with", highlight: "creativity" }
        ]
    }),
    computed: {
        ...mapState('global', {
            isWindowSmall: state => state.window.s
        }),
        ...mapState('sliderAnimation', {
            isLeft: state => state.steps['is-left'].active,
            isCenter: state => state.steps['is-center'].active && state.steps['is-center'].transitionEnd,
            isRight: state => state.steps['is-right'].active,
            isAnimating: state => state.animating
        })
    },
    mounted () {
        setTimeout(() => this.state.appear = true, 500)
    },
    watch: {
        isLoaded () {
            if (this.isRight && !this.isWindowSmall) {
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
                        ease: Power4.easeInOut,
                        onEnd: () => this.state.animateEnd = true
                    })

                    this.$refs.title.forEach((title, i) => {
                        this.flipAnimateAfter({
                            id: title._uid,
                            element: title.$el,
                            transitionDuration: 1.2 + (0.05 * i),
                            ease: Power4.easeInOut
                        })
                    })
                },
                onEnd: () => this.$store.commit(`global/${SET_VISIBLE}`, true)
            })
        },
        animateOut () {
            this.state.appear = false

            setTimeout(() => {
                this.state.animateOut = true

                setTimeout(() => {
                    this.state.animateEnd = true
                    this.$store.commit(`global/${SET_VISIBLE}`, true)
                }, 500)
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelValues {
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    left: 20px;
    top: 20px;
    padding: 5vw;
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

.PanelValues_titles {
    display: inline-block;
}

.PanelValues_title {
    margin: 20px 0;
    text-align: left;
}

.PanelValues.is-loaded,
.PanelValues.is-done {
    text-align: left;
    width: calc(45% - 20px);
}

.PanelValues.is-done {
    z-index: 3;
}

.PanelValues.is-animate-out {

    .PanelValues_background {
        transform: scaleX(0);
        transition: all 500ms ease-in-out;
    }
}

.PanelValues.is-hidden {
    display: none;
}

.PanelValues.is-static {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    height: 100%;
    text-align: left;
}

.PanelValues.is-window-small {

    .PanelValues_title {
        margin: 10px 0;
    }
}
</style>

