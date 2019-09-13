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
import { debounce } from 'throttle-debounce';

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
        height: { type: Number, default: 500 }
    },
    data: () => ({
        loadedItems: [],
        rows: [],
        debounce: null,
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
            if (v) {
                setTimeout(() => this.updateHeights(), 1000)
            }
        }
    },
    mounted () {
        this.debounce = debounce(300, this.updateHeights)
        window.addEventListener('resize', this.debounce)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.debounce)
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
                        let item = this.loadedItems[processedItems] ? this.loadedItems[processedItems] : this.items[processedItems]

                        if (!item.loadedImage) {
                            try {
                                item.height = this.height

                                if (item.video) {
                                    // item.loadedImage = await new Promise((resolve, reject) => this.loadVideo(resolve, reject, item.image))
                                    item.loadedImage = {
                                        width: item.video.x,
                                        height: item.video.y
                                    }
                                } else if (!item.video) {
                                    item.loadedImage = await new Promise(resolve => this.loadImage(resolve, item.image))
                                }
                            } catch (e) {
                                console.warn(e)
                            }
                        }

                        if (item.loadedImage) {
                            totalRowWidth += Math.round((item.loadedImage.width * this.height) / item.loadedImage.height)
                            itemsInRow.push(item)

                            this.loadedItems.push(item)
                        }

                        processedItems++
                    }

                    let overflow = (containerWidth - (itemsInRow.length * 10)) / totalRowWidth
                    overflow = overflow > 1 ? 1 : overflow

                    itemsInRow.forEach(item => {
                        item.height = this.height * overflow
                    })

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
        loadVideo (resolve, reject, video) {
            let videoElement = document.createElement('video')
            videoElement.autoplay = true

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
    padding: 5px;

    .Gallery_title {
        margin: 15px 0 15px 0;
        text-align: center;
    }
}
</style>