<template>
    <Menu class="menu" :active-name="currRoute" :open-names="['users', 'orders', 'applications', 'products']" theme="dark" width="auto">
        <!-- MENU TITLE -->
        <div class="menu-title">
            <h2 @click="routerPush('/admin')">管理员后台</h2>
        </div>
        <!-- SUBMENU:USERS -->
        <Submenu name="users">
            <template slot="title">
                <Icon type="person"></Icon>
                {{$t('page.userManagement')}}
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="userAll" @click.native="routerPush('/admin/users/userAll')">
                <span>{{$t('page.userAll')}}</span>
            </i-menuItem>
            <i-menuItem name="userAgent" @click.native="routerPush('/admin/users/userAgent')">
                <span>{{$t('page.userAgent')}}</span>
            </i-menuItem>
        </Submenu>
        <!-- SUBMENU:ORDERS -->
        <Submenu name="orders">
            <!-- MENU TITLE -->
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                {{$t('page.orderManagement')}}
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="orderManagement" @click.native="routerPush('/admin/orders/orderManagement')">
                <span>{{$t('page.orderManagement')}}</span>
            </i-menuItem>
        </Submenu>

        <!-- SUBMENU:APPS -->
        <Submenu name="applications">
            <!-- MENU TITLE -->
            <template slot="title">
                <Icon type="android-apps"></Icon>
                {{$t('page.applicationManagement')}}
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="recuperationSyStem" @click.native="routerPush('/admin/applications/recuperationSyStem')">
                <span>{{$t('page.recuperationSyStem')}}</span>
            </i-menuItem>
            <i-menuItem name="healthPassport" @click.native="routerPush('/admin/applications/healthPassport')">
                <span>{{$t('page.healthPassport')}}</span>
            </i-menuItem>
            <i-menuItem name="bodyType" @click.native="routerPush('/admin/applications/bodyType')">
                <span>{{$t('page.bodyType')}}</span>
            </i-menuItem>
            <i-menuItem name="bodySymptom" @click.native="routerPush('/admin/applications/bodySymptom')">
                <span>{{$t('page.bodySymptom')}}</span>
            </i-menuItem>
        </Submenu>

        <!-- SUBMENU:PRODUCTS -->
        <Submenu name="products">
            <!-- MENU TITLE -->
            <template slot="title">
                <Icon type="bag"></Icon>
                {{$t('page.productsManagement')}}
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="productList" @click.native="routerPush('/admin/products/productList')">
                <span>{{$t('page.productList')}}</span>
            </i-menuItem>
        </Submenu>
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

