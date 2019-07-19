<template>
    <BaseContent class="Homepage">
        <BaseCorners />

        <div class="Homepage_left">
            <div>théotime</div>
            <div>
                <BaseDisplayTitle>
                    <template slot="baseline">code with</template>
                    <template slot="highlight">passion</template>
                </BaseDisplayTitle>

                <BaseDisplayTitle>
                    <template slot="baseline">design with</template>
                    <template slot="highlight">purpose</template>
                </BaseDisplayTitle>

                <BaseDisplayTitle>
                    <template slot="baseline">work with</template>
                    <template slot="highlight">creativity</template>
                </BaseDisplayTitle>
            </div>
            <div>about</div>
        </div>
    </BaseContent>
</template>

<script>
import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import BaseDisplayTitle from '@/components/BaseDisplayTitle'

export default {
    name: "Homepage",
    components: { BaseCorners, BaseDisplayTitle, BaseContent }   
}
</script>

<style lang="scss" scoped>
.Homepage_left {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
}
</style>