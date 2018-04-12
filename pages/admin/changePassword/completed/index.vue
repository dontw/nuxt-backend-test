<template>
    <div class="wrap">
        <h1>密码修改完成，请重新登录！</h1>
        <Icon type="checkmark-circled" color="#19be6b" size="50"></Icon>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            this.$store.dispatch('auth/logout')
            setTimeout(() => {
                this.$router.push('/login')
            }, 2000)
        })
    },

    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.wrap {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    margin-bottom: 30px;
}
</style>
