<template>
    <div class="Gallery" :class="{ 'is-window-s': windowSmall }" :style="{ '--background-color': bgColor, '--text-color': textColor }">
        <div class="Gallery_title">{{ title }}</div>
        <div class="Gallery_items" ref="container">
            <div class="Gallery_row" v-for="row in rows" :key="row.id">
                <BaseGalleryItem class="Gallery_item" v-for="item in row.items" :title="item.title" :image="item.image" :height="item.height" :video="item.video" :key="item.id" ref="item" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseGalleryItem from '@/components/BaseGalleryItem'

export default {
    name: 'BaseGallery',
    components: { BaseGalleryItem },
    props: {
        appear: { type: Boolean, default: true },
        title: { type: String },
        items: { type: Array, default: () => [] },
        textColor: { type: String },
        bgColor: { type: String },
        height: { type: Number, default: 600 }
    },
    data: () => ({
        rows: [],
        state: {
            processing: false
        }
    }),
    computed: {
        ...mapState('global', {
            windowSmall: state => state.window.s,
            isLoaded: state => state.loaded
        }),
    },
    watch: {
        appear (v) {
            if (v) this.updateHeights()
        }
    },
    mounted () {
        window.addEventListener('resize', this.updateHeights)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.updateHeights)
    },
    methods: {
        updateHeights () {
            if (this.state.processing) return

            this.rows = []
            this.state.processing = true

            this.$nextTick(async () => {
                let processedItems = 0
                let containerWidth = this.$refs.container.offsetWidth

                while (processedItems < this.items.length) {
                    let totalRowWidth = 0
                    let itemsInRow = []

                    while (totalRowWidth < containerWidth && processedItems < this.items.length) {
                        let item = this.items[processedItems]

                        if (!item.loadedImage) {
                            item.height = this.height

                            if (item.video) {
                                item.loadedImage = await new Promise(resolve => this.loadVideo(resolve, item.image))
                            } else {
                                item.loadedImage = await new Promise(resolve => this.loadImage(resolve, item.image))
                            }
                        }

                        totalRowWidth += Math.round((item.loadedImage.width * this.height) / item.loadedImage.height)
                        itemsInRow.push(item)

                        processedItems++
                    }

                    let overflow = (containerWidth - (itemsInRow.length * 10)) / totalRowWidth
                    if (overflow < 1) {
                        itemsInRow.forEach(item => {
                            item.height = this.height * overflow
                        })
                    }

                    this.rows.push({
                        id: processedItems,
                        items: itemsInRow
                    })
                }

                this.state.processing = false
            })
        },
        loadImage (resolve, image) {
            let imageElement = new Image()

            imageElement.onload = function () {
                resolve({ height: this.height, width: this.width })
            }

            imageElement.src = image
        },
        loadVideo (resolve, video) {
            let videoElement = document.createElement('video')

            videoElement.addEventListener('loadedmetadata', function () {
                resolve({ height: this.videoHeight, width: this.videoWidth })
            }, false)

            videoElement.src = video
        }
    }
}
</script>

<style lang="scss" scoped>
.Gallery {
    width: 100%;
    overflow: hidden;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 40px;
}

.Gallery_title {
    font: var(--font-main-xl);
    font-weight: bold;
    margin-bottom: 40px;
}

.Gallery_row {
    white-space: nowrap;
    font-size: 0;
}

.Gallery_item {
    margin: 5px;
    display: inline-block;
}

.Gallery.is-window-s {
    padding: 20px;

    .Gallery_title {
        margin: 10px 0 30px 0;
    }
}
</style>