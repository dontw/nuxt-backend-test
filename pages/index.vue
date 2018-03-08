<template>
    <div>
        <Card shadow>Hello This is Index</Card>
        <nuxt-link :to="localePath('testing')">TESTING</nuxt-link>
    </div>
</template>

<script>
import { Card } from 'iview'

export default {
    components: { Card },

    data() {
        return {}
    },

    computed: {}
}
</script>

<style lang="less" scoped>

</style>

