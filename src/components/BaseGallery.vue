<template>
    <div class="Gallery" :style="{ '--background-color': bgColor, '--text-color': textColor }">
        <div class="Gallery_title">{{ title }}</div>
        <div class="Gallery_items" ref="container">
            <div class="Gallery_row" v-for="row in rows" :key="row.id">
                <BaseGalleryItem class="Gallery_item" v-for="item in row.items" :title="item.title" :image="item.image" :height="item.height" :key="item.id" ref="item" />
            </div>
        </div>
    </div>
</template>

<script>
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
        height: { type: Number, default: 400 }
    },
    data: () => ({
        rows: [],
        state: {
            processing: false
        }
    }),
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
                        item.height = this.height
                        
                        item.loadedImage = await new Promise((resolve, reject) => {
                            let image = new Image()
                            image.onload = () => resolve(image)
                            image.src = item.image
                        })

                        totalRowWidth += Math.round((item.loadedImage.width * this.height) / item.loadedImage.height)
                        itemsInRow.push(item)

                        processedItems++
                    }

                    let overflow = (containerWidth - (itemsInRow.length * 10)) / totalRowWidth
                    if (processedItems < this.items.length) {
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

.Gallery_items {
}

.Gallery_item {
    display: inline-block;
}
</style>