<template>
    <div>
        <div class="layout">
            <Layout :style="{minHeight: '100vh'}">
                <Sider collapsible :collapsed-width="78">
                    <!-- MENU -->
                    <AppMenu></AppMenu>
                    <!-- CONTENT -->
                </Sider>
                <Layout>
                    <Header class="header">
                        <h1>{{routerName}}</h1>
                    </Header>
                    <Content :style="{padding: '0 16px 16px'}">
                        <nuxt></nuxt>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
import { Layout, Sider, Content, Header } from 'iview'
import AppMenu from '~/components/AppMenu'

export default {
    components: {
        Layout,
        Sider,
        Content,
        Header,
        AppMenu
    },

    data() {
        return {}
    },

    computed: {
        routerName() {
            return this.$route.path.split('/')[1]
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background-color: #f5f7f9;
    height: 2.9rem;
    padding: 0 16px 0 16px;
}
</style>


