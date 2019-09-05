<template>
    <div class="PanelAbout" :class="{ 'is-active': active, 'is-ready': state.textActive }" :style="{ '--highlight-color': highlightColor }">
        <div class="PanelAbout_content">
            <div class="PanelAbout_titleMain" ref="title">
                About me
                <div class="PanelAbout_picture" :style="{ 'backgroundImage': `url(${assets.tempAbout})` }"></div>
            </div>
            <BaseTransitionWord class="PanelAbout_text" :text="text" :appear="state.textActive" :appear-delay="800" />

            <BaseTextList v-for="skill in skills" :title="skill.title" :items="skill.items" :key="skill.id" />
        </div>
    </div>
</template>

<script>
import BaseTransitionWord from '@/components/BaseTransitionWord'
import BaseTextList from '@/components/BaseTextList'

import FlipAnimation from '@/mixins/FlipAnimation'

import tempAbout from '@/assets/img/temp/about.jpg'

export default {
    name: 'PanelAbout',
    mixins: [ FlipAnimation ],
    components: { BaseTransitionWord, BaseTextList },
    props: {
        active: { type: Boolean, default: false },
        highlightColor: { type: String }
    },
    data: () => ({
        assets: { tempAbout },
        state: {
            textActive: true
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore tenetur consequuntur numquam blanditiis totam, mollitia eaque! Temporibus, magni pariatur non, id corporis voluptatibus odit expedita laborum similique ad exercitationem nemo.',
        skills: [
            { id: 0, title: 'Awesome at', items: [
                { id: 0, text: 'VueJs' }
            ]},
            { id: 1, title: 'Good at', items: [
                { id: 0, text: 'ReactJs' }
            ]}
        ]
    }),
    watch: {
        active (v) {
            setTimeout(() => {
                this.flipAnimateBefore({ id: 'title', element: this.$refs.title })
                this.state.textActive = v
                this.$nextTick(() => this.flipAnimateAfter({ id: 'title', element: this.$refs.title, transitionDuration: 1.25 }))
            }, v ? 1500 : 2000)
        }
    },
    methods: {
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
    overflow-y: hidden;
    padding: 10% 0;

    &.is-active {
        overflow-y: auto;
    }
}

.PanelAbout_content {
    width: 500px;
    height: 100%;
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
    transition: all 500ms ease;
    transition-delay: 500ms;

    &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
}

.PanelAbout.is-ready {

    .PanelAbout_picture {
        transform: translateY(-50%);
        opacity: 1;
    }

    .PanelAbout_text {
        position: relative;
        opacity: 1;
    }
}
</style>