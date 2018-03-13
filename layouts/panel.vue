<template>
    <div>
        <div class="layout">
            <Layout :style="{minHeight: '100vh'}">
                <Sider breakpoint="md" :collapsed-width="78">
                    <!-- MENU -->
                    <AppMenu></AppMenu>
                    <!-- CONTENT -->
                </Sider>
                <Layout>
                    <Header class="header">
                        <AppPanelHeader></AppPanelHeader>
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
import { Layout, Sider, Content, Header, Menu } from 'iview'
import AppMenu from '~/components/AppMenu'
import AppPanelHeader from '~/components/AppPanelHeader'

export default {
    components: {
        Layout,
        Sider,
        Content,
        Header,
        AppMenu,
        Menu,
        AppPanelHeader
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
    padding: 0;
    height: 50px;
}
</style>
