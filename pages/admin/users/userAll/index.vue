<template>
    <div>
        <Card class="filter-wrap" dis-hover>
            <p style="margin-bottom:15px">条件搜寻</p>
            <form @submit.prevent="onSubmit">
                <Row :gutter="16">
                    <i-col span="5">
                        <i-input v-model="phone" :maxlength='11' v-on:keypress.native="isNumber" placeholder="手机号" size="large"></i-input>
                    </i-col>
                    <i-col span="5">
                        <Select v-model="role" size="large" placeholder="身份">
                            <Option value="0">一般用户</Option>
                        </Select>
                    </i-col>
                    <i-col span="5">
                        <Select v-model="gender" size="large" placeholder="性别">
                            <Option value="0">男性</Option>
                            <Option value="1">女性</Option>
                            <Option value="2">无</Option>
                        </Select>
                    </i-col>
                    <i-col span="5">
                        <DatePicker v-model="dateRange" type="daterange" placement="bottom-end" placeholder="日期区间" size="large"></DatePicker>
                    </i-col>
                    <i-col span="2">
                        <Button size="large" icon="ios-trash-outline" long @click="clearInput">清空</Button>
                    </i-col>
                    <i-col span="2">
                        <Button type="primary" icon="ios-search" size="large" long>查询</Button>
                    </i-col>
                </Row>
            </form>
            <!-- FOR INPUT TESTING -->
            <!-- <p>{{[phone, role, gender, dateRange]}}</p> -->
        </Card>

        <!-- TABLE -->
        <Table border :columns="userCol" :data="currListData" :loading="userAllLoadingStatus"></Table>
        <Page style="margin-top:15px" :total="currListData.length" :page-size="10" show-elevator show-total></Page>

        <!-- MODAL -->
        <UserInfoModal :userData="currUserData"></UserInfoModal>
    </div>
</template>
<script>
import isNumber from '~/mixins/isNumber'
import UserInfoModal from '~/components/UserInfoModal'
export default {
    layout: 'adminPanel',
    mixins: [isNumber],
    components: {
        UserInfoModal
    },
    mounted() {
        this.$nextTick(() => {
            this.$store.dispatch('userAll/setList').then(result => {
                this.userAllLoadingStatus = false
                if (!result) {
                    this.$Message.warning({
                        content: '资料连接异常',
                        duration: 3
                    })
                }
            })
        })
    },
    data() {
        return {
            phone: null, // string
            role: null, // 0 1
            gender: null, // 0 1
            dateRange: null, //array
            userAllLoadingStatus: true,
            //Table titles
            userCol: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '用户ID',
                    key: 'phone',
                    align: 'center'
                },
                {
                    title: '手机号',
                    key: 'phone',
                    align: 'center'
                },
                {
                    title: '头像',
                    width: 80,
                    key: 'headiconurl',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Avatar', {
                                props: {
                                    src: params.row.headiconurl
                                }
                            })
                        ])
                    }
                },
                {
                    title: '昵称',
                    key: 'nickname',
                    align: 'center'
                },
                {
                    title: '身份',
                    key: 'role',
                    width: 70,
                    align: 'center'
                },
                {
                    title: '姓名',
                    key: 'name',
                    align: 'center'
                },
                {
                    title: '性别',
                    key: 'gender',
                    width: 70,
                    align: 'center'
                },
                {
                    title: '注册时间',
                    key: 'createdate',
                    align: 'center'
                },
                {
                    title: '健康护照',
                    width: 120,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h(
                                'nuxt-link',
                                {
                                    props: {
                                        to: `/admin/applications/healthPassport?id=${
                                            params.row.nickname
                                        }`
                                    }
                                },
                                '前往护照'
                            )
                        ])
                    }
                },
                {
                    title: '详情',
                    align: 'center',
                    width: 70,
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
                                        click: e => {
                                            this.$store
                                                .dispatch(
                                                    'userAll/setModalData',
                                                    params.row.userid
                                                )
                                                .then(result => {
                                                    if (!result) return
                                                    this.$store.dispatch(
                                                        'userAll/setModalStatus',
                                                        true
                                                    )
                                                })
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

    filters: {},

    methods: {
        onSubmit() {},
        clearInput() {
            this.phone = null
            this.role = null
            this.gender = null
            this.dateRange = null
        }
    },

    computed: {
        currUserData() {
            return this.$store.state.userAll.modalData
        },

        currListData() {
            return this.$store.state.userAll.list
        }
    }
}
</script>
<style lang="less" scoped>
.filter-wrap {
    margin-bottom: 10px;
}

.userid {
    display: none;
}
</style>




