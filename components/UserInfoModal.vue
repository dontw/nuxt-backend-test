<template>
    <Modal v-model="modalStatusFromParent" :styles="{top: '60px'}">
        <!-- MODAL HEADER -->
        <div slot="header">
            <Row :style="{padding:'15px'}" :gutter="16">
                <!-- HEADICON -->
                <i-col span="6">
                    <Avatar :style="{height:'100px', width:'100px', 'border-radius':'50%','box-shadow':'0px 0px 1px 1px #CCCCCC'}" src="https://randomuser.me/api/portraits/men/92.jpg" />
                </i-col>
                <!-- QRCODE -->
                <i-col span="6">
                    <qriously :style="{'box-shadow':'0px 0px 1px 1px #CCCCCC'}" value="The end of civilization starts from here" :size="100" />
                </i-col>
                <!-- PRIMARY USER INFO -->
                <i-col span="12">
                    <div class="user-info-wrap">
                        <div class="nick-name-wrap">
                            <span class="nick-name">{{userData.nickname}}</span>
                            <!-- <Icon class="gender-icon" type="male" color="blue"></Icon> -->
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
        <!-- MODAL CONTENT -->
        <div class="modal-content">
            <Tabs value="account" :animated="false">
                <!-- ACCOUTN INFO TAB -->
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
                <!-- USER INFO TAB -->
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
                <!-- DELIVERY INFO　TAB -->
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
        <!-- MODAL FOOTER -->
        <div slot="footer">
            <Button type="primary" size="large" @click="emitModalFalseStatus">关闭</Button>
        </div>
    </Modal>
</template>
<script>
// props object structure example
//  userData: {
//                 userid: '12345678912345678',
//                 headicon: 'https://randomuser.me/api/portraits/men/92.jpg',
//                 createdate: '1949/04/23/12:00:00',
//                 logindate: '2142/08/30/12:00:00',
//                 nickname: '尼歌王',
//                 name: '王尼歌',
//                 email: 'doge@mail.com',
//                 phone: '12345678912',
//                 role: 1,
//                 gender: 0,
//                 height: 180,
//                 weight: 160,
//                 birthday: '1949/10/01',
//                 qqstatus: 0,
//                 wechatstatus: 0,
//                 country: '中华人民共和国',
//                 provincename: '北京市',
//                 cityname: '市辖区',
//                 districtname: '城东区',
//                 address: '中华人民共和国北京市市辖区城东区198号9号楼64室',
//                 postalcode: '100013',
//                 myqrcode: 'https://www.instagram.com/explore/tags/shibamania/'
//             }
export default {
    props: {
        modalStatus: {
            type: Boolean,
            default: () => true
        },
        userData: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return {
            modalStatusFromParent: modalStatus
        }
    },
    methods: {
        emitModalFalseStatus() {
            this.$emit('turnOffModal', false)
        }
    }
}
</script>

<style lang="less" scoped>
.modal-content {
    min-height: 180px;
}
.user-info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 105px;
}

.nick-name {
    font-size: 1.1rem;
    margin-right: 5px;
}

.gender-icon {
    font-size: 1rem;
}

.user-data-wrap {
    margin-bottom: 5px;
    font-size: 0.9rem;
}

.address-wrap {
    margin-left: 15px;
}

.user-data-title {
    font-weight: bold;
}
</style>

