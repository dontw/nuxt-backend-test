<template>
    <Menu class="menu" :active-name="currRoute" :open-names="['users', 'orders', 'applications', 'products']" theme="dark" width="auto">
        <!-- MENU TITLE -->
        <div class="menu-title">
            <h4 @click="routerPush('/dashBoard')">后台管理</h4>
        </div>
        <!-- SUBMENU:USERS -->
        <Submenu name="users">
            <template slot="title">
                <Icon type="person"></Icon>
                {{$t('page.userManagement')}}
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="userAll" @click.native="routerPush('/users/userAll')">
                <span>{{$t('page.userAll')}}</span>
            </i-menuItem>
            <i-menuItem name="userExpert" @click.native="routerPush('/users/userExpert')">
                <span>{{$t('page.userExpert')}}</span>
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
            <i-menuItem name="orderManagement" @click.native="routerPush('/orders/orderManagement')">
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
            <i-menuItem name="recuperationGuide" @click.native="routerPush('/applications/recuperationGuide')">
                <span>{{$t('page.recuperationGuide')}}</span>
            </i-menuItem>
            <i-menuItem name="recuperationSyStem" @click.native="routerPush('/applications/recuperationSyStem')">
                <span>{{$t('page.recuperationSyStem')}}</span>
            </i-menuItem>
            <i-menuItem name="healthPassport" @click.native="routerPush('/applications/healthPassport')">
                <span>{{$t('page.healthPassport')}}</span>
            </i-menuItem>
            <i-menuItem name="bodyType" @click.native="routerPush('/applications/bodyType')">
                <span>{{$t('page.bodyType')}}</span>
            </i-menuItem>
            <i-menuItem name="bodySymptom" @click.native="routerPush('/applications/bodySymptom')">
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
            <i-menuItem name="productList" @click.native="routerPush('/products/productList')">
                <span>{{$t('page.productList')}}</span>
            </i-menuItem>
        </Submenu>
    </Menu>
</template>
<script>
import { Menu, Submenu, MenuItem, Icon } from 'iview'

export default {
    components: {
        Menu,
        Submenu,
        'i-menuItem': MenuItem,
        Icon
    },

    computed: {
        currRoute() {
            return this.$route.path.split('/')[2]
        }
    },

    methods: {
        routerPush(val) {
            this.$router.push(val)
        }
    }
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
    font-weight: normal;
    font-size: 1.3rem;
    height: 50px;
    cursor: pointer;
}
</style>

