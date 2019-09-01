<template>
    <div class="TransitionText" :class="{ 'is-appear': appear }" :style="{ '--appear-delay': `${appearDelay}ms` }">
        <div class="TransitionText_placeholder">{{ text }}</div>
        <div class="TransitionText_animation">
            <span class="TransitionText_letter" v-for="letter in hash" :key="letter.id">{{ letter.value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseTransitionText',
    props: {
        text: { type: String },
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 }
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
    position: relative;
}

.TransitionText_placeholder {
    opacity: 0;
}

.TransitionText_animation {
    position: absolute;
    left: 0;
    top: 0;
    height: 110%;
    width: 110%;
    overflow: hidden;
    text-align: left;
}

.TransitionText_letter {
    display: inline-block;
    min-width: 5px;
    transform: translate3d(0, 110%, 0);
    transition: all 500ms ease;

    @for $i from 0 through 20 {
        &:nth-child(#{$i}) {
            transition-delay: calc(#{$i * 15}ms + var(--disappear-delay, 0ms));
        }
    }
}

.TransitionText.is-appear {

    .TransitionText_letter {
        transform: translate3d(0, 0, 0);

        @for $i from 0 through 20 {
            &:nth-child(#{$i}) {
                transition-delay: calc(#{$i * 15}ms + var(--appear-delay));
            }
        }
    }
}
</style>
