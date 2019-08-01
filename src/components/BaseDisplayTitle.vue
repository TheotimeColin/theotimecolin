<template>
    <h1 class="DisplayTitle" :class="{ 'is-appear': appear }">
        <BaseHighlight :appear="appear" :leave="this.highlightLeave" />
        
        <BaseTransitionText class="DisplayTitle_baseline" :appear="appear" :text="baseline" />

        <span class="DisplayTitle_highlight">
            <BaseTransitionText class="DisplayTitle_highlightText" :appear="appear" :text="highlight" />
        </span>
    </h1>
</template>

<script>
import BaseHighlight from '@/components/BaseHighlight'
import BaseTransitionText from '@/components/BaseTransitionText'

export default {
    name: 'BaseDisplayTitle',
    components: { BaseHighlight, BaseTransitionText },
    props: {
        baseline: { type: String },
        highlight: { type: String },
        appear: { type: Boolean, default: false }
    },
    data: () => ({
        highlightLeave: false,
        hightlightAppear: false
    }),
    watch: {
        appear: {
            immediate: true,
            handler (v) {
                if (v) {
                    setTimeout(() => {
                        this.highlightLeave = true
                    }, 600)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.DisplayTitle {
    color: var(--color-font);
    font: var(--font-main-xxl);
    font-weight: bold;
    position: relative;
}

.DisplayTitle_baseline {
    display: inline-block;
}

.DisplayTitle_highlight {
    font: var(--font-title-xxl);
    font-style: italic;
    position: relative;
    display: inline-block;
}

.DisplayTitle_highlightText {
    position: relative;
}
</style>

