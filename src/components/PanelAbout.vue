<template>
    <simplebar class="PanelAbout" :class="{ 'is-active': active && visible, 'is-ready': state.textActive && visible, 'is-leaving': state.leaving, 'is-window-s': windowSmall }" :style="{ '--highlight-color': highlightColor }" ref="container">
        <BaseFloatingButton :appear="active && visible" link="https://www.linkedin.com/in/theotimecolin" :icon="assets.inIcon" color="#0073b1" title="Contact" />
        
        <div class="PanelAbout_content">
            <div class="PanelAbout_titleMain" ref="title">
                About me
                <div class="PanelAbout_picture" :style="{ 'backgroundImage': `url(${assets.tempAbout})` }" v-show="!state.specialActive"></div>
                <div class="PanelAbout_picture" :style="{ 'backgroundImage': `url(${assets.tempAboutSpecial})` }" v-show="state.specialActive"></div>
            </div>

            <BaseTransitionWord class="PanelAbout_text" :text="text" :appear="state.textActive && visible" :appear-delay="800" />

            <div class="PanelAbout_skills">
                <BaseTextList
                    class="PanelAbout_skill"
                    v-for="(skill, i) in skills"
                    :id="skill.id"
                    :active="state.textActive && visible"
                    :title="skill.title"
                    :items="skill.items"
                    :key="skill.id"
                    :color="highlightColor"
                    :transition-delay="1800 + (200 * i)"
                    v-on:skill-click="(v) => onSpecialInteraction(v)"
                />
            </div>
        </div>
    </simplebar>
</template>

<script>
import { mapState } from 'vuex'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
import inIcon from '@/assets/img/icons/linkedin.png'

import BaseTransitionWord from '@/components/BaseTransitionWord'
import BaseTextList from '@/components/BaseTextList'
import BaseFloatingButton from '@/components/BaseFloatingButton'

import FlipAnimation from '@/mixins/FlipAnimation'

import tempAbout from '@/assets/img/temp/about.jpg'
import tempAboutSpecial from '@/assets/img/temp/about-pokemon.jpg'

export default {
    name: 'PanelAbout',
    mixins: [ FlipAnimation ],
    components: { BaseTransitionWord, BaseTextList, BaseFloatingButton, simplebar },
    props: {
        active: { type: Boolean, default: false },
        baseColor: { type: String },
        highlightColor: { type: String }
    },
    computed: {
        ...mapState('global', {
            visible: state => state.loadedVisible,
            windowSmall: state => state.window.s
        })
    },
    data: () => ({
        assets: { tempAbout, tempAboutSpecial, inIcon },
        state: {
            leaving: false,
            textActive: false,
            specialActive: false
        },
        text: `I'm a 24 creative developer, graduate from Les Gobelins in Interactive Design. I have a 4-year experience at Wandi where I started as an intern and ended as a Lead front developer.`,
        skills: [
            { id: 0, title: 'Pretty good at', items: [
                { id: 3, text: 'Javascript ES6' },
                { id: 0, text: 'VueJs' },
                { id: 2, text: 'HTML5 / CSS3 / SCSS' },
            ]},
            { id: 1, title: 'Good at', items: [
                { id: 0, text: 'ReactJs' },
                { id: 1, text: 'HTML Canvas' },
                { id: 3, text: 'Adobe Suite' }
            ]},
            { id: 2, title: 'Learning', items: [
                { id: 0, text: 'Node / ExpressJs' },
                { id: 1, text: 'Unity' },
                { id: 2, text: 'WebGL' }
            ]},
            { id: 3, title: 'Interested in', items: [
                { id: 0, text: 'UI & Graphic design' },
                { id: 1, text: 'Photography / Filmmaking' },
                { id: 2, text: 'Game design' },
                { id: 3, text: 'Pokémon', special: true, onMouseEnter: this.onSpecialInteraction }
            ]}
        ]
    }),
    watch: {
        active (v) { if (this.visible) this.updateState(v) },
        visible (v) { if (v && this.active) this.updateState(v, 0)  }
    },
    methods: {
        onSpecialInteraction (text) {
            if (text == 'Pokémon') {
                this.state.specialActive = !this.state.specialActive

                this.$refs.container.scrollElement.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        },
        updateState (v, delay = 2000) {
            this.$refs.container.scrollElement.scrollTo({ top: 0 })
            this.state.leaving = !v

            setTimeout(() => {
                this.flipAnimateBefore({ id: 'title', element: this.$refs.title })
                this.state.textActive = v
                this.$nextTick(() => this.flipAnimateAfter({ id: 'title', element: this.$refs.title, transitionDuration: 1.25 }))
            }, v ? delay : 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.PanelAbout {
    width: 100%;
    height: 100%;
    white-space: initial;
    text-align: center;
    color: var(--highlight-color);
}

.PanelAbout_content {
    width: 80%;
    max-width: 550px;
    padding: 20vh 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.PanelAbout_titleMain {
    font: var(--font-main-about);
    font-weight: bold;
    display: inline-block;
    position: relative;
    white-space: nowrap;
}

.PanelAbout_text {
    font: var(--font-main-l);
    margin-top: 80px;
    position: absolute;
}

.PanelAbout_picture {
    width: 55%;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-25%);
    border-radius: 50%;
    opacity: 0;
    transition: transform 500ms ease, opacity 500ms ease;
    transition-delay: 500ms;

    &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
}

.PanelAbout_skills {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    
    position: absolute;
    opacity: 0;
}

.PanelAbout_skill {
    flex-grow: 1;
    flex-basis: 50%;
    padding: 20px;
}

.PanelAbout.is-ready {

    .PanelAbout_picture {
        transform: translateY(-50%);
        opacity: 1;
    }

    .PanelAbout_text,
    .PanelAbout_skills {
        position: relative;
        opacity: 1;
    }
}

.PanelAbout.is-leaving {
    opacity: 0;
    transition: opacity 250ms ease;
    transition-delay: 800ms;
}

.PanelAbout.is-window-s {

    .PanelAbout_content {
        padding: 20vh 0;
    }

    .PanelAbout_skills {
        display: block;
    }
}
</style>