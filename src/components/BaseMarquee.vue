<template>
    <div class="Marquee" :class="{ 'is-animated': isAnimated }" :style="{ '--animation-speed': `${text.length * 1}s` }">
        <div class="Marquee_placeholder">{{ text }}</div>
        <div class="Marquee_content" :data-text="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'BaseMarquee',
    props: {
        text: { type: String, default: '' },
        isAnimated: { type: Boolean, default: false }
    }
}
</script>

<style lang="scss" scoped>
.Marquee {
    overflow: hidden;
    pointer-events: none;
    padding: 5% 0;
    white-space: nowrap;
}

.Marquee_placeholder {
    opacity: 0;
}

.Marquee_content {
    position: absolute;
    left: 0;
    top: 50%;
    margin: 0 20px;

    &::after {
        content: attr(data-text);
        margin: 0 20px;
    }
}

.Marquee.is-animated .Marquee_content {
    animation: marquee var(--animation-speed) linear infinite;
}

@keyframes marquee {
    0% {
        transform: translate3d(0, -50%, 0);
    }

    100% {
        transform: translate3d(-50%, -50%, 0);
    }
}
</style>

