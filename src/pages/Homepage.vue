<template>
    <div class="Homepage">
        <!--<BaseDisplayTitle class="Homepage_title" baseline="code with" highlight="passion" :appear="appear" />
        <BaseDisplayTitle class="Homepage_title" baseline="design with" highlight="purpose" :appear="appear" />
        <BaseDisplayTitle class="Homepage_title" baseline="work with" highlight="creativity" :appear="appear" />-->
    </div>
</template>

<script>

import BaseDisplayTitle from '@/components/BaseDisplayTitle'

export default {
    name: 'Homepage',
    components: { BaseDisplayTitle },
    props: {
        appear: { type: Boolean, default: false }
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    .Homepage {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .Homepage_title {
        margin: 8px 0;
    }
</style>