<template>
    <div>
        <Card shadow>Hello This is Index {{$t('test')}}</Card>
        <nuxt-link :to="localePath('dashBoard')">TO DASHBOARD</nuxt-link>
    </div>
</template>

<script>
import { Card, Message } from 'iview'

export default {
    mounted() {
        this.$Message = Message
    },
    components: { Card },

    data() {
        return {}
    },

    computed: {}
}
</script>

<style lang="less" scoped>

</style>

