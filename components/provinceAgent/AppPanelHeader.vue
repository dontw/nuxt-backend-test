<template>
    <Menu class="menu" mode="horizontal" theme="light" width="auto">
        <h3>{{$t(routerName)}}</h3>
        <Submenu class="submenu" name="setting">
            <template slot="title">
                <Icon size="18" type="settings"></Icon>系统管理
            </template>
            <i-menuItem name="changePassword">修改密码</i-menuItem>
            <i-menuItem name="logout" @click.native="$router.push('/login')">登出</i-menuItem>
        </Submenu>
    </Menu>
</template>
<script>
export default {
    computed: {
        routerName() {
            return (
                'provinceAgent.' +
                this.$route.path.split('/')[
                    this.$route.path.split('/').length - 1
                ]
            )
        }
    }
}
</script>
<style lang="less" scoped>
.menu {
    height: 100%;
    padding: 0 15px 5px 15px;
    h3 {
        height: 100%;
        float: left;
    }
}

.submenu {
    float: right;
}
</style>
