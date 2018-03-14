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
                    <Content :style="{padding: '16px'}">
                        <nuxt></nuxt>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
import AppMenu from '~/components/AppMenu'
import AppPanelHeader from '~/components/AppPanelHeader'

export default {
    components: {
        AppMenu,
        AppPanelHeader
    },

    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.header {
    padding: 0;
    height: 50px;
}
</style>
