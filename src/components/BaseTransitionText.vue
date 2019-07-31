<template>
    <div class="TransitionText" :class="{ 'is-appear': appear }">
        <span class="TransitionText_letter" v-for="letter in hash" :key="letter.id">{{ letter.value }}</span>
    </div>
</template>

<script>
export default {
    name: 'BaseTransitionText',
    props: {
        text: { type: String },
        appear: { type: Boolean, default: true }
    },
    computed: {
        hash () {
            return [...this.text].map((l, i) => ({ id: i, value: l }))
        }
    }
}
</script>

<style lang="scss" scoped>
.TransitionText {
    overflow: hidden;
}

.TransitionText_letter {
    display: inline-block;
    min-width: 5px;
    transform: translate3d(0, 100%, 0);
    transition: all 500ms ease;

    @for $i from 0 through 20 {
        &:nth-child(#{$i}) {
            transition-delay: #{$i * 15}ms;
        }
    }
}

.TransitionText.is-appear {
    .TransitionText_letter {
        transform: translate3d(0, 0, 0);
    }
}
</style>
