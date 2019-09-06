<template>
    <div class="Project" :class="{ 'is-window-s': windowSmall }" v-if="project">
        <BaseTransitionText class="Project_title" :appear="!isAnimating" :text="project.title" :appear-delay="1000" />
        <BaseTransitionWord class="Project_subtitle" :appear="!isAnimating" :text="project.baseline" :appear-delay="1000" />

        <template v-for="item in project.content">
            <BaseLeftImageContainer class="Project_container" :appear="!isAnimating" :appear-delay="1000" :image="item.image" :title="item.title" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-left'">
                <div v-html="item.text"></div>
            </BaseLeftImageContainer>

            <BaseColumnTextContainer class="Project_container" :appear="!isAnimating" :appear-delay="1000" :title="item.title" :key="item.id" :bg-color="item.bgColor" :text-color="item.textColor" v-if="item.layout == 'text-column'">
                <div v-html="item.text"></div>
            </BaseColumnTextContainer>

            <BaseCenterImageContainer class="Project_container" :appear="!isAnimating" :appear-delay="1000" :image="item.image" :title="item.title" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-center'">
                <div v-html="item.text"></div>
            </BaseCenterImageContainer>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseTransitionText from '@/components/BaseTransitionText'
import BaseTransitionWord from '@/components/BaseTransitionWord'
import BaseLeftImageContainer from '@/components/BaseLeftImageContainer'
import BaseColumnTextContainer from '@/components/BaseColumnTextContainer'
import BaseCenterImageContainer from '@/components/BaseCenterImageContainer'

export default {
    name: 'Project',
    components: { BaseLeftImageContainer, BaseColumnTextContainer, BaseCenterImageContainer, BaseTransitionText, BaseTransitionWord },
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
        ...mapState('projects', {
            project (state) {
                return state.items.filter(item => item.slug == this.$route.params.id)[0]
            }
        }),
        ...mapState('sliderAnimation', {
            isAnimating: state => state.steps['is-center'].animating
        })
    },
    data: () => ({
        test: false
    }),
    mounted () {
        setInterval(() => this.test = !this.test, 3000)
    }
}
</script>

<style lang="scss" scoped>
.Project {
    padding: 5vw;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;

    &.is-window-s {
        margin-top: 60vh;
    }
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
</style>