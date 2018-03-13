<template>
    <Menu class="menu" mode="horizontal" width="auto">
        <Submenu name="1">
            <template slot="title">
                <Icon type="settings"></Icon>
                {{$t('page.applicationManagement')}}
            </template>
            <i-menuItem name="1">ok</i-menuItem>
        </Submenu>
    </Menu>
</template>
<script>
import { Menu, MenuItem, Submenu, Icon } from 'iview'
export default {
    components: {
        Menu,
        'i-menuItem': MenuItem,
        Submenu,
        Icon
    },

    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.menu {
    height: 100%;
}
</style>