<template>
    <div>
        <Card shadow>
            <nuxt-link :to="localePath('dashBoard')">Control Panel</nuxt-link><br>
            <nuxt-link :to="localePath('login')">Login</nuxt-link>
        </Card>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>

</style>

