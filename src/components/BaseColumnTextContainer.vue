<template>
    <div class="ColumnText" :class="{ 'is-appear': appear }" :style="{ '--appear-delay': appearDelay + 'ms' }">
        <BaseTransitionWord class="ColumnText_title" :appear="appear" :appear-delay="appearDelay" :text="title" />
        <div class="ColumnText_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BaseTransitionWord from '@/components/BaseTransitionWord'

export default {
    name: 'ColumnTextContainer',
    components: { BaseTransitionWord },
    props: {
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 },
        title: { type: String, default: null }
    }
}
</script>

<style lang="scss" scoped>
.ColumnText {
    display: flex;
    align-items: flex-start;
}

.ColumnText_title {
    font: var(--font-main-xl);
    font-weight: bold;
    min-width: 200px;
}

.ColumnText_content {
    opacity: 0;
    transition: all 600ms var(--ease-out-cubic);
    transform: translateY(50%);
}

.ColumnText.is-appear {

    .ColumnText_content {
        opacity: 1;
        transform: translateY(0);
        transition-delay: var(--appear-delay);
    }
}
</style>