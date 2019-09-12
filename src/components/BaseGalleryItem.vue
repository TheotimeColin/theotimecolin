<template>
    <div class="GalleryItem" :class="{ 'is-video': false }" :style="{ '--height': height + 'px' }">
        <img class="GalleryItem_image" :src="image" v-if="!video">
        <video
            class="GalleryItem_image"
            :src="image"
            v-if="video"
            @click="(v) => onVideoEnter(v)"
            @mouseenter="(v) => onVideoEnter(v)"
            @mouseleave="(v) => onVideoLeave(v)"
            ref="video"
            loop
            autoplay
            muted
        />
    </div>
</template>

<script>
export default {
    name: 'BaseGalleryItem',
    props: {
        image: { type: String },
        height: { type: Number, default: 100 },
        title: { type: String },
        video: { type: Boolean, default: false }
    },
    methods: {
        onVideoEnter (video) {
            let target = video.target
            // target.currentTime = 0
            target.play()
        },
        onVideoLeave (video) {
            // let target = video.target
            // target.pause()
        }
    }
}
</script>

<style lang="scss" scoped>
.GalleryItem {
    position: relative;
}

.GalleryItem_image {
    display: block;
    height: var(--height);
    width: auto;
}

.GalleryItem.is-video {

    &::before {
        content: "";
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 1;
        transition: opacity 250ms ease;
    }

    &::after {
        content: "";
        background-image: url('../assets/img/icons/play.png');
        background-size: cover;
        width: 52px;
        height: 52px;
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: -26px auto 0 auto;
        pointer-events: none;
        opacity: 1;
        transition: opacity 250ms ease;
    }

    &:hover::before,
    &:hover::after {
        opacity: 0;
    }
}
</style>