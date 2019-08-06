<template>
    <div class="Marquee" :style="{ '--animation-speed': `${text.length * 1}s` }">
        <div class="Marquee_content" :data-text="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'BaseMarquee',
    props: {
        text: { type: String, default: '' }
    }
}
</script>

<style lang="scss" scoped>
.Marquee {
    position: relative;
}

.Marquee_content {
    position: absolute;
    left: 0;
    transform: translate3d(0, -50%, 0);
    animation: marquee var(--animation-speed) linear infinite;
    margin: 0 20px;

    &::after {
        content: attr(data-text);
        margin: 0 20px;
    }
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

