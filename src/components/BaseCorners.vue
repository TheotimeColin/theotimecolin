<template>
    <div class="Corners" :class="{ 'is-window-s': windowSmall }">
        <div class="Corners_border Corners_border--top"></div>
        <div class="Corners_border Corners_border--left"></div>
        <div class="Corners_border Corners_border--right"></div>
        <div class="Corners_border Corners_border--bottom"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'BaseCorners',
        computed: {
            ...mapState('global', {
                windowSmall: state => state.window.s
            })
        }
    }
</script>


<style lang="scss" scoped>
.Corners {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}

.Corners_border {
    position: absolute;
    background-color: var(--color-borders);
}

.Corners_border--top,
.Corners_border--bottom {
    height: 20px;
    width: 100%;
}
.Corners_border--bottom {
    bottom: 20px;
    transform: translateY(100%);
    height: 300px;
}

.Corners_border--left,
.Corners_border--right {
    width: 20px;
    height: 100%;
}

.Corners_border--right {
    right: 0;
}

.Corners.is-window-s {
        
    .Corners_border--top,
    .Corners_border--bottom {
        height: 10px;
    }

    .Corners_border--bottom {
        bottom: 10px;
        transform: translateY(100%);
        height: 300px;
    }

    .Corners_border--left,
    .Corners_border--right {
        width: 10px;
    }
}
</style>