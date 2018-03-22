<template>
    <div>
        <Table :columns="columns1" :data="currData"></Table>
    </div>
</template>
<script>
export default {
    layout: 'adminPanel',
    data() {
        return {
            columns1: [
                {
                    type: 'html',
                    key: '<h1>WOW</h1>'
                },
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'Date',
                    key: 'date'
                }
            ],

            currData: []
        }
    }
}
</script>
<style lang="less" scoped>

</style>




