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
            onAfter = null,
            scale = false
        }) {
            if (!element) return

            if (onBefore) onBefore()
            this.flipAnimateBefore({ element, scale })

            if (modifier) {
                if (toggle) {
                    element.classList.add(modifier)
                } else {
                    element.classList.remove(modifier)
                }
            }

            if (onAfter) onAfter()
            this.flipAnimateAfter({ element, scale })
        },
        flipAnimateBefore ({ element = null, scale = false }) {
            if (!element) return

            this.flipAnimation.before = {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        },
        flipAnimateAfter ({ element = null, scale = false }) {
            if (!element) return

            this.flipAnimation.after = {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: element.offsetWidth,
                height: element.offsetHeight
            }

            this.flipAnimation.delta = {
                x: this.flipAnimation.before.x - this.flipAnimation.after.x,
                y: this.flipAnimation.before.y - this.flipAnimation.after.y,
                scaleX: scale ? this.flipAnimation.before.width / this.flipAnimation.after.width : 1,
                scaleY: scale ? this.flipAnimation.before.height / this.flipAnimation.after.height : 1
            }

            TweenLite.fromTo(element, 0.5,  { ...this.flipAnimation.delta }, { x: 0, y: 0, scaleX: 1, scaleY: 1 })
        }
    }
}
</script>
