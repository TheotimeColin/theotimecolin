<template>
    <div class="Project" :class="{ 'is-window-s': windowSmall }" v-if="project">
        <BaseFloatingButton :appear="!isAnimating && isLoaded" :icon="assets.externalIcon" :color="project.highlightColor" :link="project.link" v-if="project.link" />

        <div class="Project_wrapper">
            <BaseTransitionText class="Project_title" :appear="!isAnimating && isLoaded" :text="project.title" :appear-delay="1000" />
            <BaseTransitionWord class="Project_subtitle" :appear="!isAnimating && isLoaded" :text="project.baseline" :appear-delay="1000" />

            <template v-for="item in project.content">
                <BaseLeftImageContainer class="Project_container" :appear="!isAnimating && isLoaded" :appear-delay="1000" :image="item.image" :title="item.title" :subtitle="item.subtitle" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-left'">
                    <div v-html="item.text"></div>
                </BaseLeftImageContainer>

                <BaseColumnTextContainer class="Project_container" :appear="!isAnimating && isLoaded" :appear-delay="1000" :title="item.title" :subtitle="item.subtitle" :key="item.id" :bg-color="item.bgColor" :text-color="item.textColor" v-if="item.layout == 'text-column'">
                    <div v-html="item.text"></div>
                </BaseColumnTextContainer>

                <BaseCenterImageContainer class="Project_container" :appear="!isAnimating && isLoaded" :appear-delay="1000" :image="item.image" :title="item.title" :subtitle="item.subtitle" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-center'">
                    <div v-html="item.text"></div>
                </BaseCenterImageContainer>

                <BaseGallery class="Project_container" :appear="!isAnimating && isLoaded" :title="item.title" :subtitle="item.subtitle" :items="item.galleryItems" :bg-color="item.bgColor" :text-color="item.textColor" v-if="item.layout == 'gallery'" :key="item.id"/>
            </template>
        </div>

        <router-link :to="{ name: 'Project', params: { id: nextProject.slug }}" class="Project_next" :style="{ '--background': nextProject.baseColor, '--highlight': nextProject.highlightColor, '--image': `url('${nextProject.image}')` }" v-if="nextProject">
            <div class="Project_nextSub">next project</div>
            <div class="Project_nextTitle">{{ nextProject.title }}</div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import externalIcon from '@/assets/img/icons/external.png'

import BaseTransitionText from '@/components/BaseTransitionText'
import BaseTransitionWord from '@/components/BaseTransitionWord'
import BaseFloatingButton from '@/components/BaseFloatingButton'
import BaseLeftImageContainer from '@/components/BaseLeftImageContainer'
import BaseColumnTextContainer from '@/components/BaseColumnTextContainer'
import BaseCenterImageContainer from '@/components/BaseCenterImageContainer'
import BaseGallery from '@/components/BaseGallery'

export default {
    name: 'Project',
    components: { BaseLeftImageContainer, BaseColumnTextContainer, BaseCenterImageContainer, BaseTransitionText, BaseTransitionWord, BaseGallery, BaseFloatingButton },
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s,
            isLoaded: state => state.loaded
        }),
        ...mapState('projects', {
            project (state) {
                return state.items.filter(item => item.slug == this.$route.params.id)[0]
            },
            nextProject: state => state.next
        }),
        ...mapState('sliderAnimation', {
            isAnimating: state => state.steps['is-center'].animating
        })
    },
    data: () => ({
        assets: { externalIcon }
    })
}
</script>

<style lang="scss" scoped>
.Project {
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
}

.Project_wrapper {
    padding: 5vw 5vw 0 5vw;
}

.Project_container {
    margin-bottom: 60px;
}

.Project_title {
    font: var(--font-main-xxl);
    font-weight: bold;
    margin-bottom: 10px;
}

.Project_subtitle {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 40px;
}

.Project_next {
    display: block;
    background-color: var(--background);
    background-image: var(--image);
    text-align: center;
    padding: 100px 0;
    position: relative;
    background-position: center;
    background-size: auto 70%;
    background-repeat: no-repeat;
    
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background);
        opacity: 0.95;
    }
}

.Project_nextTitle {
    color: var(--highlight);
    font: var(--font-main-xxl);
    font-weight: bold;
    position: relative;
}

.Project_nextSub {
    color: var(--color-background);
    font: var(--font-main-m);
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
}

.Project.is-window-s {
    margin-top: 60vh;

    .Project_title {
        margin-top: 20px;
    }

    .Project_subtitle {
        margin-bottom: 15px;
    }

    .Project_container {
        margin-bottom: 40px;
    }

    .Project_next {
        margin-top: -20px;
    }

    .Project_wrapper {
        padding: 15px 15px 0 15px;
    }
}
</style>