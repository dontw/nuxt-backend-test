<template>
    <Menu class="menu" :active-name="currRoute" :open-names="['users', 'orders', 'applications', 'products']" theme="dark" width="auto">
        <!-- MENU TITLE -->
        <div class="menu-title">
            <h2 @click="routerPush('/distributor')">店家管理后台</h2>
        </div>
        <!-- MENU ITEMS -->
        <i-menuItem name="regionalUserManagement" @click.native="routerPush('/distributor/regionalUserManagement')">
            <Icon type="person" size="16"></Icon>
            <span>{{$t('distributor.regionalUserManagement')}}</span>
        </i-menuItem>
        <i-menuItem name="orderManagement" @click.native="routerPush('/distributor/orderManagement')">
            <Icon type="ios-cart" size="16"></Icon>
            <span>{{$t('distributor.orderManagement')}}</span>
        </i-menuItem>
        <i-menuItem name="storeManagement" @click.native="routerPush('/distributor/storeManagement')">
            <Icon type="ios-home" size="16"></Icon>
            <span>{{$t('distributor.storeManagement')}}</span>
        </i-menuItem>
    </Menu>
</template>
<script>
import { MenuItem } from 'iview'
import currRoute from '~/mixins/currRoute'
import routerPush from '~/mixins/routerPush'

export default {
    components: {
        'i-menuItem': MenuItem
    },

    mixins: [currRoute, routerPush]
}
</script>
<style lang="less" scoped>
.menu {
    height: 100vh;
    overflow: auto;
}
.menu-title {
    color: #fff;
    padding: 0.8rem 0.8rem 0.2rem 0.8rem;
    height: 50px;
    cursor: pointer;
    h2 {
        font-weight: normal;
    }
}
</style>

