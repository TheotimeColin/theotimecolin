<template>
    <div class="Corners">
        <div class="Corners_border Corners_border--top"></div>
        <div class="Corners_border Corners_border--left"></div>
        <div class="Corners_border Corners_border--right"></div>
        <div class="Corners_border Corners_border--bottom"></div>
    </div>
</template>

<script>
    export default {
        name: "BaseCorners"
    }
</script>


<style lang="scss" scoped>
.Corners {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
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
    bottom: 0;
}

.Corners_border--left,
.Corners_border--right {
    width: 20px;
    height: 100%;
}

.Corners_border--right {
    right: 0;
}
</style>