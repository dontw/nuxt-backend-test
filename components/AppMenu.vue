<template>
    <Menu active-name="1-2" theme="dark" width="auto">
        <div class="menu-title">后台管理</div>
        <nuxt-link :to="localePath('index')">
            <i-menuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 1</span>
            </i-menuItem>
        </nuxt-link>
        <nuxt-link :to="localePath('testing')">
            <i-menuItem name="2-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 2</span>
            </i-menuItem>
        </nuxt-link>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
            </template>
            <i-menuItem name="3-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 3</span>
            </i-menuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
            </template>
            <i-menuItem name="4-1">
                <Icon type="ios-navigate"></Icon>
                <span>Option 3</span>
            </i-menuItem>
        </Submenu>
    </Menu>
</template>
<script>
import {
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    Icon
} from 'iview'

export default {
    components: {
        Breadcrumb,
        BreadcrumbItem,
        Menu,
        Submenu,
        'i-menuItem': MenuItem,
        Icon
    }
}
</script>
<style lang="less" scoped>
.menu-title {
    color: #fff;
    text-align: left;
    padding: 0.5rem 0.8rem;
    font-weight: normal;
    font-size: 1.3rem;
}
</style>

