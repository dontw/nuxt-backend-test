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
            <p>{{[phone, role, gender, dateRange]}}</p>
        </Card>
        <Table border :columns="userCol" :data="currData"></Table>

        <Page style="margin-top:15px" :total="currData.length" :page-size="2" show-elevator show-total></Page>

        <!-- MODAL -->
        <!-- <Modal v-model="modalStatus" :styles="{top: '60px'}">
            <div slot="header">
                <Row :style="{padding:'15px'}" :gutter="16">
                    <i-col span="6">
                        <Avatar :style="{height:'100px', width:'100px', 'border-radius':'50%','box-shadow':'0px 0px 1px 1px #CCCCCC'}" src="https://randomuser.me/api/portraits/men/92.jpg" />
                    </i-col>
                    <i-col span="6">
                        <qriously :style="{'box-shadow':'0px 0px 1px 1px #CCCCCC'}" value="The end of civilization starts from here" :size="100" />
                    </i-col>
                    <i-col span="12">
                        <div class="user-info-wrap">
                            <div class="nick-name-wrap">
                                <span class="nick-name">{{userData.nickname}}</span>
                                <Icon class="gender-icon" type="male" color="blue"></Icon>
                                <Icon class="gender-icon" type="female" color="pink"></Icon>
                            </div>
                            <div>
                                <span>ID：</span>
                                <span>{{userData.userid}}</span>
                            </div>
                            <div>
                                <span>手机：</span>
                                <span>{{userData.phone}}</span>
                            </div>
                            <div>
                                <span>身份：</span>
                                <span>{{userData.role}}</span>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
            <div class="modal-content">
                <Tabs value="account" :animated="false">
                    <TabPane icon="information-circled" label="账户信息" name="account">
                        <div class="tab-content">
                            <div class="user-data-wrap">
                                <span class="user-data-title">微信绑定：</span>
                                <span>{{userData.wechatstatus}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">QQ绑定：</span>
                                <span>{{userData.qqstatus}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">注册时间：</span>
                                <span>{{userData.createdate}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">最近登录时间：</span>
                                <span>{{userData.logindate}}</span>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane icon="person" label="个人信息" name="user">
                        <div class="tab-content">
                            <div class="user-data-wrap">
                                <span class="user-data-title">姓名：</span>
                                <span>{{userData.name}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">性别：</span>
                                <span>{{userData.gender}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">身高/cm：</span>
                                <span>{{userData.height}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">体重/斤：</span>
                                <span>{{userData.weight}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">出生日期：</span>
                                <span>{{userData.birthday}}</span>
                            </div>
                            <div class="user-data-wrap">
                                <span class="user-data-title">所在地区：</span>
                                <span>{{userData.country+userData.provincename+ userData.cityname+ userData.districtname}}</span>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane icon="ios-cart" label="配送信息" name="delivery">
                        <div class="tab-content">
                            <div class="user-data-wrap">
                                <h4>配送地址一（默认）</h4>
                            </div>
                            <div class="address-wrap">
                                <div class="user-data-wrap">
                                    <span class="user-data-title">姓名：</span>
                                    <span>{{userData.name}}</span>
                                </div>
                                <div class="user-data-wrap">
                                    <span class="user-data-title">手机：</span>
                                    <span>{{userData.phone}}</span>
                                </div>
                                <div class="user-data-wrap">
                                    <span class="user-data-title">邮政编码：</span>
                                    <span>{{userData.postalcode}}</span>
                                </div>
                                <div class="user-data-wrap">
                                    <span class="user-data-title">所在地区：</span>
                                    <span>{{userData.country+userData.provincename+ userData.cityname+ userData.districtname}}</span>
                                </div>
                                <div class="user-data-wrap">
                                    <span class="user-data-title">详细地址：</span>
                                    <span>{{userData.address}}</span>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            <div slot="footer">
                <Button type="primary" size="large" @click="clickTurnOffModal">关闭</Button>
            </div>
        </Modal> -->
        <UserInfoModal :userData="userData" @turnOffModal="turnOffModal"></UserInfoModal>
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
    data() {
        return {
            phone: null, // string
            role: null, // 0 1
            gender: null, // 0 1
            dateRange: null, //array

            modalStatus: true,
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
                    key: 'createdate',
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
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
                    createdate: '2000/01/01/12:00:00'
                }
            ],

            userData: {
                userid: '12345678912345678',
                headicon: 'https://randomuser.me/api/portraits/men/92.jpg',
                createdate: '1949/04/23/12:00:00',
                logindate: '2142/08/30/12:00:00',
                nickname: '尼歌王',
                name: '王尼歌',
                email: 'doge@mail.com',
                phone: '12345678912',
                role: 1,
                gender: 0,
                height: 180,
                weight: 160,
                birthday: '1949/10/01',
                qqstatus: 0,
                wechatstatus: 0,
                country: '中华人民共和国',
                provincename: '北京市',
                cityname: '市辖区',
                districtname: '城东区',
                address: '中华人民共和国北京市市辖区城东区198号9号楼64室',
                postalcode: '100013',
                myqrcode: 'https://www.instagram.com/explore/tags/shibamania/'
            }
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
        },

        turnOffModal(val) {
            this.modalStatus = val
        }
    }
}
</script>
<style lang="less" scoped>
.filter-wrap {
    margin-bottom: 10px;
}

// .modal-content {
//     min-height: 180px;
// }
// .user-info-wrap {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     height: 105px;
// }

// .nick-name {
//     font-size: 1.1rem;
//     margin-right: 5px;
// }

// .gender-icon {
//     font-size: 1rem;
// }

// .user-data-wrap {
//     margin-bottom: 5px;
//     font-size: 0.9rem;
// }

// .address-wrap {
//     margin-left: 15px;
// }

// .user-data-title {
//     font-weight: bold;
// }
</style>




