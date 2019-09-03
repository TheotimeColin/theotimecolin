<template>
    <nav class="Navigation" :class="{ ...modifiers, 'is-right': isRight }" :style="{ '--highlight-color': project ? project.highlightColor : null }">
        <router-link :to="{ name: 'Homepage' }" class="Navigation_item Navigation_item--top">théotime</router-link>
        <div class="Navigation_item Navigation_item--bot">about</div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BaseNavigation',
    props: {
        modifiers: { type: Object, default: () => {} }
    },
    computed: {
        ...mapState('projects', {
            project: (state) => state.active
        }),
        ...mapState('sliderAnimation', {
            isRight: state => state.steps['is-right'].active
        })
    }
}
</script>

<style lang="scss" scoped>
.Navigation_item {
    position: absolute;
    z-index: 20;
    left: 40px;
    font-weight: bold;
    color: var(--highlight-color);
    transition: color 500ms ease;
    transition-delay: 500ms;
}

.Navigation_item--top {
    top: 40px;
}

.Navigation_item--bot {
    bottom: 40px;
}

.Navigation.is-right {

    .Navigation_item {
        color: var(--font-color);
    }
}
</style>


