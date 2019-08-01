<template>
    <div class="Homepage">
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
</template>

<script>

import BaseDisplayTitle from '@/components/BaseDisplayTitle'

export default {
    name: "Homepage",
    components: { BaseDisplayTitle }   
}
</script>

<style lang="scss" scoped>
    .Homepage {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
    }
</style>