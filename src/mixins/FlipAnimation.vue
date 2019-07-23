<template></template>

<script>
import { TweenLite, CSSPlugin } from 'gsap/all'

export default {
    name: 'FlipAnimation',
    data: () => ({
        flipAnimation: {
            before: {},
            after: {},
            delta: {}
        }
    }),
    methods: {
        flipAnimate ({
            element = null,
            modifier = null,
            toggle = true,
            onBefore = null,
            onAfter = null
        }) {
            if (!element) return

            if (onBefore) onBefore()
            this.flipAnimateBefore({ element })

            if (modifier) {
                if (toggle) {
                    element.classList.add(modifier)
                } else {
                    element.classList.remove(modifier)
                }
            }

            if (onAfter) onAfter()
            this.flipAnimateAfter({ element })
        },
        flipAnimateBefore ({ element = null }) {
            if (!element) return

            this.flipAnimation.before = {
                x: element.offsetLeft,
                y: element.offsetTop
            }
        },
        flipAnimateAfter ({ element = null }) {
            if (!element) return

            this.flipAnimation.after = {
                x: element.offsetLeft,
                y: element.offsetTop
            }

            this.flipAnimation.delta = {
                x: this.flipAnimation.before.x - this.flipAnimation.after.x,
                y: this.flipAnimation.before.y - this.flipAnimation.after.y
            }

            TweenLite.fromTo(element, 0.5,  { ...this.flipAnimation.delta }, { x: 0, y: 0 })
        }
    }
}
</script>
