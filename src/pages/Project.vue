<template>
    <div class="Project">
        {{ project.title }}
    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'Project',
    components: { },
    computed: {
        ...mapState('projects', {
            project (state) {
                return state.items.filter(item => item.slug = this.$route.params.id)[0]
            }
        })
    },
    mounted () {
        console.log(this.project)
    }
}
</script>

<style lang="scss" scoped>
.Project {
    padding: 40px;
}
</style>