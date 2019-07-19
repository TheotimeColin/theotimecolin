<template>
    <h1 class="DisplayTitle">
        <slot name="baseline"></slot>

        <span class="DisplayTitle_highlight">
            <BaseHighlight />
            <span class="DisplayTitle_highlightText">
                <slot name="highlight"></slot>
            </span>
        </span>
    </h1>
</template>

<script>
import BaseHighlight from "@/components/BaseHighlight"

export default {
    name: "BaseDisplayTitle",
    components: { BaseHighlight }
}
</script>

<style lang="scss" scoped>
.DisplayTitle {
    color: var(--color-font);
    font: var(--font-main-xxl);
    font-weight: bold;
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

