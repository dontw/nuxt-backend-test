<template>
    <div>
        <Card class="filter-wrap" style=" margin-bottom: 10px;" dis-hover>
            <p style="margin-bottom:15px">条件搜寻</p>
            <form @submit.prevent="onSubmit">
                <Row :gutter="16">
                    <i-col span="7">
                        <i-input v-model.trim="phone" :maxlength='11' v-on:keypress.native="isNumber" placeholder="手机号" size="large" clearable></i-input>
                    </i-col>
                    <i-col span="7">
                        <i-input v-model.trim="name" :maxlength='30' v-on:keypress.native="preventNumber" placeholder="护照姓名" size="large" clearable></i-input>
                    </i-col>
                    <i-col span="6">
                        <Select v-model="gender" size="large" placeholder="性别" clearable>
                            <Option value="0">女性</Option>
                            <Option value="1">男性</Option>
                        </Select>
                    </i-col>
                    <i-col span="2">
                        <Button size="large" icon="refresh" long @click="clearInput">重设</Button>
                    </i-col>
                    <i-col span="2">
                        <Button type="primary" icon="ios-search" size="large" html-type="submit" long>查询</Button>
                    </i-col>
                </Row>
            </form>
        </Card>

        <!-- TABLE -->
        <Table border :columns="userCol" :data="currListData" :loading="loadingStatus"></Table>
        <Page style="margin-top:15px" @on-change="changePage" :total="listCount" :page-size="pageSize" show-elevator show-total></Page>
        <!-- MODAL -->
        <PassportModal :passportData="passportData"></PassportModal>
    </div>
</template>
<script>
import isNumber from '~/mixins/isNumber'
import preventNumber from '~/mixins/preventNumber'
import errCodeMsg from '~/mixins/errCodeMsg'
import PassportModal from '~/components/HealthPassportModal'
export default {
    layout: 'adminPanel',
    mixins: [isNumber, preventNumber, errCodeMsg],
    components: {
        PassportModal
    },
    data() {
        return {
            phone: null,
            name: null,
            gender: null,
            pageSize: 10,
            loadingStatus: false,
            userCol: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '护照编号',
                    key: 'passportNumber',
                    align: 'center'
                },
                {
                    title: '用户手机',
                    key: 'phone',
                    align: 'center'
                },
                {
                    title: '用户姓名',
                    key: 'name',
                    align: 'center'
                },
                {
                    title: '护照姓名',
                    key: 'passportName',
                    align: 'center'
                },
                {
                    title: '与用户关系',
                    key: 'passportRel',
                    align: 'center'
                },
                {
                    title: '性别',
                    key: 'gender',
                    align: 'center'
                },
                {
                    title: '身高/cm',
                    key: 'height',
                    align: 'center'
                },
                {
                    title: '体重/斤',
                    key: 'weight',
                    align: 'center'
                },
                {
                    title: '出生日期',
                    key: 'birthday',
                    align: 'center'
                },

                {
                    title: '详情',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h(
                                'Button',
                                {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$store.dispatch(
                                                'passport/setModalStatus',
                                                true
                                            )
                                        }
                                    }
                                },
                                '查看'
                            )
                        ])
                    }
                }
            ]
        }
    },

    computed: {
        currSession() {
            return this.$store.state.auth.session
        },
        currListData() {
            return this.$store.getters['passport/getList']
        },
        listCount() {
            return this.$store.state.passport.listCount
        },
        passportData() {
            return this.$store.state.passport.modalData
        }
    },

    methods: {
        changePage() {
            console.log('change!')
        },

        clearInput() {
            this.phone = null
            this.name = null
            this.gender = null
        },

        onSubmit() {
            console.log('submit')
        }
    }
}
</script>
