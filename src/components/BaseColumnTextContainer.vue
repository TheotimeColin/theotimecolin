<template>
    <div class="ColumnText" :class="{ 'is-appear': appear, 'is-animated': animated, 'is-window-s': windowSmall }" :style="{ '--appear-delay': appearDelay + 'ms' }" ref="container">
        <BaseTransitionWord class="ColumnText_title" :appear="appear" :appear-delay="appearDelay" :text="title" />
        <div class="ColumnText_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseTransitionWord from '@/components/BaseTransitionWord'

export default {
    name: 'ColumnTextContainer',
    components: { BaseTransitionWord },
    props: {
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 },
        title: { type: String, default: null }
    },
    data: () => ({
        animated: true
    }),
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        }),
    },
    mounted () {
        // const bounds = this.$refs.container.getBoundingClientRect()
        // this.animated = bounds.top <= window.innerHeight
    }
}
</script>

<style lang="scss" scoped>
.ColumnText {
    display: flex;
    align-items: flex-start;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.ColumnText_title {
    font: var(--font-main-xl);
    font-weight: bold;
    min-width: 200px;
}

.ColumnText_content {
    opacity: 0;
    transform: translateY(50%);
}

.ColumnText.is-animated {

    .ColumnText_content {
        transition: all 600ms var(--ease-out-cubic);
    }
}

.ColumnText.is-appear {

    .ColumnText_content {
        opacity: 1;
        transform: translateY(0);
        transition-delay: var(--appear-delay);
    }
}

.ColumnText.is-window-s {
    display: block;
    padding: 0 20px;

    .ColumnText_title {
        min-width: 0;
        margin-bottom: 20px;
    }
}
</style>