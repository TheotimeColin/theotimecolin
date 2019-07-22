<template>
    <BaseContent class="Homepage">
        <BaseCorners />

        <div class="Homepage_left">
            <div>théotime</div>
            <div>
                <BaseDisplayTitle class="Homepage_title">
                    <template slot="baseline">code with</template>
                    <template slot="highlight">passion</template>
                </BaseDisplayTitle>

                <BaseDisplayTitle class="Homepage_title">
                    <template slot="baseline">design with</template>
                    <template slot="highlight">purpose</template>
                </BaseDisplayTitle>

                <BaseDisplayTitle class="Homepage_title">
                    <template slot="baseline">work with</template>
                    <template slot="highlight">creativity</template>
                </BaseDisplayTitle>
            </div>
            <div>about</div>
        </div>

        <PanelSwitch class="Homepage_right" />
    </BaseContent>
</template>

<script>
import BaseContent from '@/components/BaseContent'
import BaseCorners from '@/components/BaseCorners'
import BaseDisplayTitle from '@/components/BaseDisplayTitle'
import PanelSwitch from '@/components/PanelSwitch'

export default {
    name: "Homepage",
    components: { BaseCorners, BaseDisplayTitle, BaseContent, PanelSwitch }   
}
</script>

<style lang="scss" scoped>
.Homepage_left {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.Homepage_title {
    margin: 15px 0;
}
</style>