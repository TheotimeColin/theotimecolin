<template>
    <div class="PanelAbout" :class="{ 'is-active': active, 'is-ready': state.textActive, 'is-leaving': state.leaving }" :style="{ '--highlight-color': highlightColor }">
        <div class="PanelAbout_content">
            <div class="PanelAbout_titleMain" ref="title">
                About me
                <div class="PanelAbout_picture" :style="{ 'backgroundImage': `url(${state.specialActive ? assets.tempAboutSpecial : assets.tempAbout})` }"></div>
            </div>
            <BaseTransitionWord class="PanelAbout_text" :text="text" :appear="state.textActive" :appear-delay="800" />

            <div class="PanelAbout_skills">
                <BaseTextList
                    class="PanelAbout_skill"
                    v-for="(skill, i) in skills"
                    :id="skill.id"
                    :active="state.textActive"
                    :title="skill.title"
                    :items="skill.items"
                    :key="skill.id"
                    :color="highlightColor"
                    :transition-delay="1500 + (200 * i)"
                    v-on:skill-enter="(v) => onSpecialInteraction(v, true)"
                    v-on:skill-leave="(v) => onSpecialInteraction(v, false)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BaseTransitionWord from '@/components/BaseTransitionWord'
import BaseTextList from '@/components/BaseTextList'

import FlipAnimation from '@/mixins/FlipAnimation'

import tempAbout from '@/assets/img/temp/about.jpg'
import tempAboutSpecial from '@/assets/img/temp/about-pokemon.jpg'

export default {
    name: 'PanelAbout',
    mixins: [ FlipAnimation ],
    components: { BaseTransitionWord, BaseTextList },
    props: {
        active: { type: Boolean, default: false },
        highlightColor: { type: String }
    },
    data: () => ({
        assets: { tempAbout, tempAboutSpecial },
        state: {
            leaving: false,
            textActive: true,
            specialActive: false
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore tenetur consequuntur numquam blanditiis totam, mollitia eaque! Temporibus, magni pariatur non, id corporis voluptatibus odit expedita laborum similique ad exercitationem nemo.',
        skills: [
            { id: 0, title: 'Awesome at', items: [
                { id: 0, text: 'VueJs' },
                { id: 1, text: 'HTML5' },
                { id: 2, text: 'CSS3 / SCSS' },
                { id: 3, text: 'Javascript ES6' }
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
                { id: 1, text: 'Photography' },
                { id: 2, text: 'Filmmaking' },
                { id: 3, text: 'Pokémon', special: true, onMouseEnter: this.onSpecialInteraction }
            ]}
        ]
    }),
    watch: {
        active (v) {
            this.state.leaving = !v

            setTimeout(() => {
                this.flipAnimateBefore({ id: 'title', element: this.$refs.title })
                this.state.textActive = v
                this.$nextTick(() => this.flipAnimateAfter({ id: 'title', element: this.$refs.title, transitionDuration: 1.25 }))
            }, v ? 2000 : 1000)
        }
    },
    methods: {
        onSpecialInteraction (text, toggle) {
            if (text == 'Pokémon') this.state.specialActive = toggle 
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
    padding: 10% 0;

    &.is-active {
        overflow-y: auto;
    }
}

.PanelAbout_content {
    width: 500px;
    min-height: 100%;
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
</style>