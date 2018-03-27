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

        </Card>
        <Table border :columns="userCol" :data="currData"></Table>
        <!-- <p>{{[mobile, userType, userSex, dateRange]}}</p> -->
        <Page style="margin-top:15px" :total="currData.length" :page-size="2" show-elevator show-total></Page>

        <!-- MODAL -->
        <Modal v-model="modal2" width="960">
            <div slot="header">
                <h2>帳號詳情</h2>
            </div>
            <div>
                <Row>
                    <i-col span="12">
                        <div>
                            <i-col span="12">
                                <Avatar icon="person" size="large" />
                            </i-col>
                            <i-col span="12">
                                <Avatar shape="square" icon="person" size="large" />
                            </i-col>
                        </div>
                        <div>
                            ok
                        </div>
                    </i-col>
                    <i-col span="12">
                        hello
                    </i-col>
                </Row>
            </div>
            <div slot="footer">
                <Button type="primary" size="large" @click="clickTurnOffModal">確定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import isNumber from '~/mixins/isNumber'
export default {
    layout: 'adminPanel',
    mixins: [isNumber],
    data() {
        return {
            phone: null, // string
            role: null, // 0 1
            gender: null, // 0 1
            dateRange: null, //array

            modal2: true,
            userCol: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '用户ID',
                    key: 'userid',
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
                    key: 'headicon',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Avatar', {
                                props: {
                                    src: params.row.headicon
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
                    title: '身高/cm',
                    key: 'height',
                    width: 90,
                    align: 'center'
                },
                {
                    title: '体重/斤',
                    key: 'weight',
                    width: 90,
                    align: 'center'
                },
                {
                    title: '出生日期',
                    key: 'birthday',
                    align: 'center'
                },
                {
                    title: '健康护照',
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
                    title: '注册时间',
                    key: 'creatdate',
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
                                            alert(params.row.userid)
                                        }
                                    }
                                },
                                '查看'
                            )
                        ])
                    }
                }
            ],

            currData: [
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                    nickname: 'doge',
                    role: 0,
                    name: '小兵兵',
                    gender: 0, //0:female 1:male
                    height: 170,
                    weight: 50,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                },
                {
                    userid: '11111111111111111',
                    phone: '22222222222',
                    headicon:
                        'https://yt3.ggpht.com/a-/AJLlDp0IRp_oQ5kngGHTRAgD3ERPJNoadK3xz26vZQ=s900-mo-c-c0xffffffff-rj-k-no',
                    nickname: 'shiba',
                    role: 0,
                    name: 'doge',
                    gender: 0, //0:female 1:male
                    height: 200,
                    weight: 250,
                    birthday: '1980/08/01',
                    creatdate: '2000/01/01/12:00:00'
                }
            ]
        }
    },

    methods: {
        onSubmit() {},
        clearInput() {
            this.mobile = null
            this.userType = null
            this.userSex = null
            this.dateRange = null
        },
        clickTurnOffModal() {
            this.modal2 = false
        }
    }
}
</script>
<style lang="less" scoped>
.filter-wrap {
    margin-bottom: 10px;
}
</style>




