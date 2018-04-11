<template>
    <div>
        <Card class="filter-wrap" style=" margin-bottom: 10px;" dis-hover>
            <p style="margin-bottom:15px">条件搜寻</p>
            <form @submit.prevent="onSubmit">
                <Row :gutter="16">
                    <i-col span="5">
                        <i-input v-model.trim="phone" :maxlength='11' v-on:keypress.native="isNumber" placeholder="手机号" size="large" clearable></i-input>
                    </i-col>
                    <i-col span="5">
                        <Select v-model="role" size="large" placeholder="身份" clearable>
                            <Option value="1">一般用户</Option>
                        </Select>
                    </i-col>
                    <i-col span="5">
                        <Select v-model="gender" size="large" placeholder="性别" clearable>
                            <Option value="0">女性</Option>
                            <Option value="1">男性</Option>
                        </Select>
                    </i-col>
                    <i-col span="5">
                        <DatePicker format="yyyy/MM/dd" :value="dateRange" @on-change="dateHandler" type="daterange" placement="bottom-end" placeholder="日期区间" size="large" :split-panels="true" :clearable="false"></DatePicker>
                    </i-col>
                    <i-col span="2">
                        <Button size="large" icon="refresh" long @click="clearInput">重设</Button>
                    </i-col>
                    <i-col span="2">
                        <Button type="primary" icon="ios-search" size="large" html-type="submit" long>查询</Button>
                    </i-col>
                </Row>
            </form>
            <!-- FOR INPUT TESTING -->
            <!-- <p>{{[phone, role, gender, dateRange]}}</p> -->
        </Card>

        <!-- TABLE -->
        <Table border :columns="userCol" :data="currListData" :loading="userAllLoadingStatus"></Table>
        <Page style="margin-top:15px" @on-change="changePage" :total="listCount" :page-size="pageSize" show-elevator show-total></Page>

        <!-- MODAL -->
        <UserInfoModal :userData="currUserData"></UserInfoModal>
    </div>
</template>
<script>
import isNumber from '~/mixins/isNumber'
import errCodeMsg from '~/mixins/errCodeMsg'
import UserInfoModal from '~/components/UserInfoModal'
export default {
    layout: 'adminPanel',
    mixins: [isNumber, errCodeMsg],
    components: {
        UserInfoModal
    },
    mounted() {
        this.$nextTick(() => {
            this.$store
                .dispatch('userAll/setList', {
                    data: {
                        size: this.pageSize,
                        offset: 0,
                        query: {
                            role: this.role,
                            gender: this.gender,
                            startdate: this.startdate,
                            enddate: this.enddate,
                            phone: this.phone
                        }
                    },
                    session: this.currSession
                })
                .then(result => {
                    this.userAllLoadingStatus = false
                    if (result.code) {
                        this.$Message.warning({
                            content: `发生错误：${this.errCodeMsg(
                                result.code
                            )}`,
                            duration: 2
                        })
                    }
                })
        })
    },
    data() {
        return {
            // filter input data
            phone: null, // string
            role: null, // 0 1
            gender: null, // 0 1
            pageSize: 10,
            dateRange: [
                this.$store.state.userAll.listSetting.startdate,
                this.$store.state.userAll.listSetting.enddate
            ],

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
                    key: 'nickname',
                    align: 'center'
                },
                {
                    title: '手机号',
                    key: 'nickname',
                    align: 'center'
                },
                {
                    title: '头像',
                    width: 80,
                    key: 'headimgurl',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Avatar', {
                                props: {
                                    src: params.row.headimgurl
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
                    width: 100,
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
                                                    {
                                                        userId:
                                                            params.row.userid,
                                                        session: this.$store
                                                            .state.auth.session
                                                    }
                                                )
                                                .then(result => {
                                                    if (result.code) {
                                                        this.$Message.warning({
                                                            content: `发生错误：${this.errCodeMsg(
                                                                result.code
                                                            )}`,
                                                            duration: 2
                                                        })
                                                    } else {
                                                        this.$store.dispatch(
                                                            'userAll/setModalStatus',
                                                            true
                                                        )
                                                    }
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

    methods: {
        // 送出查询筛选条件
        onSubmit() {
            this.userAllLoadingStatus = true
            let size = this.pageSize
            let offset = 0
            let query = {
                role: this.role,
                gender: this.gender,
                startdate: this.startdate,
                enddate: this.enddate,
                phone: this.phone || null
            }

            let data = { size, offset, query }

            this.$store
                .dispatch('userAll/setList', {
                    data,
                    session: this.currSession
                })
                .then(result => {
                    this.userAllLoadingStatus = false
                    if (result.code) {
                        this.$Message.warning({
                            content: `发生错误：${this.errCodeMsg(
                                result.code
                            )}`,
                            duration: 2
                        })
                    }
                })
        },

        // 清除筛选条件
        clearInput() {
            this.phone = null
            this.role = null
            this.gender = null
            this.dateRange = [
                this.$store.state.userAll.default_start_day,
                this.$store.state.userAll.today
            ]
        },

        // 接收datePicker回传值
        dateHandler(date) {
            this.dateRange = date
        },

        // 換頁
        changePage(pageNum) {
            this.userAllLoadingStatus = true
            let size = this.pageSize
            let offset = (pageNum - 1) * size
            let query = this.$store.state.userAll.listSetting

            let data = { size, offset, query }

            this.$store
                .dispatch('userAll/setList', {
                    data,
                    session: this.currSession
                })
                .then(result => {
                    this.userAllLoadingStatus = false
                    if (result.code) {
                        this.$Message.warning({
                            content: `发生错误：${this.errCodeMsg(
                                result.code
                            )}`,
                            duration: 2
                        })
                    }
                })
        }
    },

    computed: {
        currSession() {
            return this.$store.state.auth.session
        },
        currUserData() {
            return this.$store.state.userAll.modalData
        },

        currListData() {
            return this.$store.getters['userAll/getList']
        },

        startdate() {
            return this.dateRange[0]
        },

        enddate() {
            return this.dateRange[1]
        },

        listCount() {
            return this.$store.state.userAll.listCount
        }
    }
}
</script>
<style lang="less" scoped>
.userid {
    display: none;
}
</style>




