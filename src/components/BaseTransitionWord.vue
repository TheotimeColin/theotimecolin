<template>
    <div class="TransitionWord" :class="{ 'is-appear': appear }" :style="{ '--appear-delay': `${appearDelay}ms` }">
        <span class="TransitionWord_word" v-for="word in hash" :key="word.id">{{ word.value }}</span>
    </div>
</template>

<script>
export default {
    name: 'BaseTransitionWord',
    props: {
        text: { type: String },
        appear: { type: Boolean, default: true },
        appearDelay: { type: Number, default: 0 }
    },
    computed: {
        hash () {
            return this.text.split(' ').map((word, i) => {
                return {
                    id: i,
                    value: word + ' '
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.TransitionWord_word {
    display: inline-block;
    opacity: 0;
    transform: translateY(50%);
    transition: all 250ms ease;
}

.TransitionWord.is-appear {

    .TransitionWord_word {
        opacity: 1;
        transform: translate3d(0, 0, 0);

        @for $i from 0 through 200 {
            &:nth-child(#{$i}) {
                transition-delay: calc(#{$i * 15}ms + var(--appear-delay));
            }
        }
    }
}
</style>
