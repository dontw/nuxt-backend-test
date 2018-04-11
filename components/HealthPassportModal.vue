<template>
    <Modal :value="modalStatus" :mask-closable="false" :closable="false" :styles="{top: '90px'}">
        <div slot="header">
            passport
        </div>
        <div slot="footer">
            <Button type="primary" size="large" @click.native="closeModal" long>关闭</Button>
        </div>
    </Modal>
</template>
<script>
export default {
    data() {
        return {}
    },

    computed: {
        modalStatus() {
            return this.$store.state.passport.modalStatus
        }
    },

    methods: {
        closeModal() {
            if (this.$store.state.passport.modalStatus) {
                this.$store.dispatch('passport/setModalStatus', false)
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
