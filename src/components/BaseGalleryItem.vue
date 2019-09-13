<template>
    <div class="GalleryItem" :class="{ 'is-video': video && windowSmall, 'is-playing': state.playing }" :style="{ '--height': height + 'px' }">
        <img class="GalleryItem_image" :src="image" v-if="!video">
        <video
            class="GalleryItem_image"
            :src="image"
            v-if="video"
            @click="(v) => onVideoEnter(v)"
            ref="video"
            loop
            :autoplay="!windowSmall"
            muted
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BaseGalleryItem',
    props: {
        image: { type: String },
        height: { type: Number, default: 100 },
        title: { type: String },
        video: { type: Object, default: null }
    },
    data: () => ({
        state: {
            playing: false
        }
    }),
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s
        })
    },
    methods: {
        onVideoEnter (video) {
            this.state.playing = true

            let target = video.target
            target.currentTime = 0
            target.play()
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
}

.GalleryItem.is-video.is-playing {

    &::before,
    &::after {
        display: none;
    }
}
</style>