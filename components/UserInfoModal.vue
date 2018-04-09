<template>
    <Modal :value="modalStatus" :mask-closable="false" :closable="false" :styles="{top: '90px'}">
        <!-- MODAL HEADER -->
        <div slot="header">
            <Row :style="{padding:'15px'}" :gutter="16">
                <!-- HEADICON -->
                <i-col span="6">
                    <Avatar class="headicon" :class="{'bigger':imgBiggerStatus}" :src="userData.headiconurl" @click.native="toggleImgBigger" />
                </i-col>
                <!-- QRCODE -->
                <i-col span="6">
                    <div :style="{position:'relative'}">
                        <qriously class="qrcode" :class="{'qrbigger':qrcodeBiggerStatus}" :value="userData.qrcode || 'no qr code!'" :size="100" @click.native="toggleQrcodeBigger" />
                        <a class="qrcode-link" @click="downloadQrcode">
                            <Icon type="arrow-down-a"></Icon>下载QRCODE
                        </a>
                    </div>
                </i-col>
                <!-- PRIMARY USER INFO -->
                <i-col span="12">
                    <div class="user-info-wrap">
                        <div class="nick-name-wrap">
                            <span class="nick-name">{{userData.nickname}}</span>
                            <Icon v-if="userData.gender===0" class="gender-icon" type="female" color="pink"></Icon>
                            <Icon v-if="userData.gender===1" class="gender-icon" type="male" color="blue"></Icon>
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
                            <span>{{userData.role | roleToLetter}}</span>
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
                            <span>{{userData.wechatstatus|bindToLetter}}</span>
                        </div>
                        <div class="user-data-wrap">
                            <span class="user-data-title">QQ绑定：</span>
                            <span>{{userData.qqstatus|bindToLetter}}</span>
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
                            <span>{{userData.gender | genderToLetter}}</span>
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
            <Button type="primary" size="large" @click.native="closeModal" long>关闭</Button>
        </div>
    </Modal>
</template>
<script>
import userAllFilters from '~/mixins/userAllFilters'
export default {
    props: {
        userData: {
            type: Object,
            default: () => ({})
        }
    },

    mixins: [userAllFilters],

    data() {
        return {
            imgBiggerStatus: false,
            qrcodeBiggerStatus: false
        }
    },

    computed: {
        modalStatus() {
            return this.$store.state.userAll.modalStatus
        }
    },

    methods: {
        toggleImgBigger() {
            this.imgBiggerStatus = !this.imgBiggerStatus
            this.qrcodeBiggerStatus = false
        },

        toggleQrcodeBigger() {
            this.qrcodeBiggerStatus = !this.qrcodeBiggerStatus
            this.imgBiggerStatus = false
        },

        saveAsImg(base64File, fileName) {
            let link = document.querySelector('.qrcode-link')
            link.setAttribute('href', base64File)
            link.setAttribute('download', fileName)
        },

        downloadQrcode() {
            let canvas = document.getElementsByTagName('canvas')[0]
            let dataUrl = canvas.toDataURL() //转为base64
            this.saveAsImg(dataUrl, 'qrcode')
        },

        closeModal() {
            if (this.$store.state.userAll.modalStatus) {
                this.$store.dispatch('userAll/setModalStatus', false)
            }
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

.headicon {
    transition: 0.3s;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    position: relative;
}

.headicon:hover {
    cursor: pointer;
    &:before {
        content: '点击放大';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        color: white;
        font-size: 0.9rem;
        text-shadow: 1px 1px 2px black;
        z-index: 2;
    }
}

.bigger {
    transform-origin: -38% -18%;
    transform: scale(3);
    z-index: 2;
    border: none;
    border-radius: 0;

    &:hover {
        text-align: center;
        &:before {
            content: '点击缩小';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            color: white;
            font-size: 0.05rem;
            text-shadow: 1px 1px 2px black;
        }
    }
}

.qrcode {
    position: relative;
    transition: 0.3s;
    border: 1px solid #ccc;
    cursor: pointer;
    z-index: 1;
    &:hover {
        &:before {
            content: '点击放大';
            display: inline-block;
            position: absolute;
            width: 60px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            color: white;
            background: black;
            font-size: 0.9rem;
            text-shadow: 1px 1px 2px black;
            z-index: 2;
        }
    }
}

.qrbigger {
    transform-origin: 20% -18%;
    transform: scale(3);
    border: 0;
    border-radius: 0;
    &:hover {
        &:before {
            content: '点击缩小';
            width: auto;
            font-size: 0.05rem;
        }
    }
}

.qrcode-link {
    position: absolute;
    bottom: -20px;
    left: 6px;
}
</style>

