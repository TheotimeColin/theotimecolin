<template>
    <div class="TextList" :class="{ 'is-active': active }" :style="{ '--transition-delay': transitionDelay + 'ms', '--color': color }">
        <p class="TextList_title" v-if="title">{{ title }}</p>
        <ul class="TextList_items">
            <li
                class="TextList_item"
                :class="{ 'is-special': item.special }"
                v-for="item in items"
                :key="item.id"
                @click="$emit('skill-click', item.text)"
            >{{ item.text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BaseTextList',
    props: {
        id: { type: Number },
        active: { type: Boolean, default: true },
        special: { type: Boolean, default: false },
        color: { type: String },
        transitionDelay: { type: Number, default: 0 },
        title: { type: String },
        items: { type: Array, default: () => [] }
    }
}
</script>

<style lang="scss" scoped>
.TextList {

}

.TextList_title {
    font: var(--font-main-xl);
    font-weight: bold;

    &::after {
        content: "";
        display: block;
        height: 1px;
        margin: 10px 0;
        background-color: var(--color);
    }
}

.TextList_items {
    font: var(--font-main-l);
    line-height: 1.5;
}

.TextList_item {
    display: block;

    &.is-special {
        font-weight: bold;
        cursor: pointer;
    }
}

.TextList_title,
.TextList_item {
    opacity: 0;
    transform: translateY(50%);
    transition: all 250ms ease;

    @for $i from 0 through 10 {
        &:nth-child(#{$i}) {
            transition-delay: calc(#{$i * 80}ms + var(--transition-delay));
        }
    }
}

.TextList.is-active {

    .TextList_title,
    .TextList_item {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>