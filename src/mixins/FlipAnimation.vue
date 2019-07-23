<template></template>

<script>
import { TweenLite, CSSPlugin } from 'gsap/all'

export default {
    name: 'FlipAnimation',
    methods: {
        flipAnimate ({ element = null, modifier = null, toggle = true }) {
            if (!element || !modifier) return

            const before = element.getBoundingClientRect()

            if (toggle) {
                element.classList.add(modifier)
            } else {
                element.classList.remove(modifier)
            }

            const after = element.getBoundingClientRect()

            const delta = {
                x: before.left - after.left,
                y: before.top - after.top
            }

            TweenLite.fromTo(element, 0.5,  { ...delta }, { x: 0, y: 0 })
        }
    }
}
</script>
