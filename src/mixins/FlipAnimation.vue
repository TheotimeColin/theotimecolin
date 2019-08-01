<template></template>

<script>
import { TweenLite, CSSPlugin, EasePack } from 'gsap/all'

export default {
    name: 'FlipAnimation',
    data: () => ({
        flipAnimation: {
            before: {},
            delta: {}
        }
    }),
    methods: {
        flipAnimate ({
            id = Math.random().toString(36).substr(2, 9),
            element = null,
            modifier = null,
            toggle = true,
            onBefore = null,
            onAfter = null,
            scale = false,
            transitionDuration = 1,
            ease = Power4.easeInOut
        }) {
            if (!element) return
            
            if (onBefore) onBefore()
            this.flipAnimateBefore({ id, element, scale })

            if (modifier) {
                if (toggle) {
                    element.classList.add(modifier)
                } else {
                    element.classList.remove(modifier)
                }
            }

            this.$nextTick(() => {
                if (onAfter) onAfter()
                this.flipAnimateAfter({ id, element, scale, transitionDuration, ease })
            })
        },
        flipAnimateBefore ({ id = 1, element = null, scale = false, position = true }) {
            if (!element) return

            this.flipAnimation.before[id] = {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        },
        flipAnimateAfter ({ id = 1, element = null, scale = false, position = true, transitionDuration = 1, ease = Power4.easeInOut }) {
            if (!element) return

            this.flipAnimation.delta = {
                x: position ? this.flipAnimation.before[id].x - element.offsetLeft : 0,
                y: position ? this.flipAnimation.before[id].y - element.offsetTop : 0,
                scaleX: scale ? this.flipAnimation.before[id].width / element.offsetWidth : 1,
                scaleY: scale ? this.flipAnimation.before[id].height / element.offsetHeight : 1
            }

            TweenLite.fromTo(element, transitionDuration,  { ...this.flipAnimation.delta }, { x: 0, y: 0, scaleX: 1, scaleY: 1, ease: ease })
        }
    }
}
</script>
