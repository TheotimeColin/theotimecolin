<template>
    <div class="Project" :class="{ 'is-window-s': windowSmall }" v-if="project">
        <h1 class="Project_title">{{ project.title }}</h1>

        <template v-for="item in project.content">
            <BaseLeftImageContainer class="Project_container" :image="item.image" :title="item.title" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-left'">
                <div v-html="item.text"></div>
            </BaseLeftImageContainer>

            <BaseColumnTextContainer class="Project_container" :title="item.title" :key="item.id" :bg-color="item.bgColor" :text-color="item.textColor" v-if="item.layout == 'text-column'">
                <div v-html="item.text"></div>
            </BaseColumnTextContainer>

            <BaseCenterImageContainer class="Project_container" :image="item.image" :title="item.title" :bg-color="item.bgColor" :text-color="item.textColor" :key="item.id" v-if="item.layout == 'image-center'">
                <div v-html="item.text"></div>
            </BaseCenterImageContainer>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseLeftImageContainer from '@/components/BaseLeftImageContainer'
import BaseColumnTextContainer from '@/components/BaseColumnTextContainer'
import BaseCenterImageContainer from '@/components/BaseCenterImageContainer'

export default {
    name: 'Project',
    components: { BaseLeftImageContainer, BaseColumnTextContainer, BaseCenterImageContainer },
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
        ...mapState('projects', {
            project (state) {
                return state.items.filter(item => item.slug == this.$route.params.id)[0]
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.Project {
    padding: 40px;
    max-width: 950px;
    margin: 0 auto;

    &.is-window-s {
        margin-top: 60vh;
    }
}

.Project_container {
    margin: 60px 0;
}

.Project_title {
    font: var(--font-main-xxl);
    font-weight: bold;
}
</style>