<template>
    <div class="login_backgournd">
        <h1 class="title">凤妃堂管理系统</h1>
        <Card class="card" shadow>
            <h3 class="card__title">管理登录</h3>
            <form @submit.prevent="onSubmit">
                <p>账号</p>
                <i-input @keyup.native="loginTyping(user,pwd)" v-model.trim="user" class="input" type="text" placeholder="请输入账号" size="large" :maxlength="20">
                    <span slot="prepend">
                        <Icon class="icon" type="person" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <p>密码</p>
                <i-input @keyup.native="loginTyping(user,pwd)" v-model.trim="pwd" class="input" :class="{'has-error':false}" type="password" placeholder="请输入密码" size="large" :maxlength="10">
                    <span slot="prepend">
                        <Icon class="icon" type="key" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <div class="card__bottom-wrap">
                    <div class="message-wrap">
                        <p class="message message--success" v-if="successMsgStatus">
                            <Icon type="checkmark-circled" size="16"></Icon> 恭喜登录成功!
                        </p>
                        <p class="message message--error" v-if="failMsgStatus">
                            <Icon type="android-warning" size="18"></Icon> {{failMsg}}
                        </p>
                    </div>
                    <Button class="button" size="large" type="primary" html-type="submit" :disabled="disableStatus" :loading="loginStatus">登录</Button>
                </div>
            </form>
        </Card>
    </div>
</template>
<script>
import { Input } from 'iview'
import md5 from 'md5'

export default {
    components: {
        'i-input': Input
    },
    data() {
        return {
            loginStatus: false,
            disableStatus: true,
            successMsgStatus: false,
            failMsgStatus: false,
            failMsg: '',
            user: '',
            pwd: ''
        }
    },
    methods: {
        onSubmit() {
            // this.failMsgStatus = false
            // this.loginStatus = true
            this.$store.dispatch('auth/authUser', {
                user: this.user,
                pwd: md5(this.pwd)
            })

            // if (this.userPwdValidate(this.pwd)) {
            //     login()
            //         .then(data => {
            //             this.loginStatus = false
            //             this.successMsgStatus = true
            //             setTimeout(() => {
            //                 this.successMsgStatus = false
            //                 this.$router.push('admin')
            //             }, 1500)
            //         })
            //         .catch(e => {
            //             this.loginStatus = false
            //             this.failMsgStatus = true
            //             this.failMsg = '登录失败，请重新登录!'
            //             console.log(e)
            //         })
            // }

            // function login(user, pwd) {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             let status = true
            //             if (status) {
            //                 resolve('ok!')
            //             } else {
            //                 reject('err')
            //             }
            //         }, 1500)
            //     })
            // }
        },

        //侦测是否所有输入格均被输入内容，若都有输入内容，改变登录鈕状态
        loginTyping(user, pwd) {
            user && pwd
                ? (this.disableStatus = false)
                : (this.disableStatus = true)
        },

        //账户格式验证
        userNameValidate(user) {},

        //密码格式验证
        userPwdValidate(pwd) {
            let re = /^[a-zA-Z0-9]{6,10}$/
            if (!re.test(pwd)) {
                this.failMsgStatus = true
                this.failMsg = '密码输入错误!'
                this.loginStatus = false
                return false
            }
            return true
        }
    }
}
</script>
<style lang="less" scoped>
@import '~assets/less/var.less';
@import '~assets/less/animations.less';

.login_backgournd {
    height: 100vh;
    width: 100vw;
    background: #f5f7f9;
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
}

.title {
    font-weight: normal;
    margin: 5% 0 15px 0;
}

.card {
    padding: 15px 15px 30px 15px;
    width: 350px;
    &__title {
        text-align: center;
        margin-bottom: 5px;
        font-weight: normal;
    }

    &__bottom-wrap {
        margin-top: 50px;
    }
}

.message-wrap {
    height: 50px;
}

.message {
    text-align: center;
    margin-bottom: 15px;

    &--error {
        color: @error-color;
        animation: bounceIn 0.75s;
    }
    &--success {
        color: @success-color;
        animation: fadeInDown 0.75s;
    }
}

form {
    width: 100%;
}

p {
    margin-bottom: 3px;
}

.icon {
    width: 25px;
}

.input {
    margin-bottom: 15px;
}

.has-error {
    box-shadow: 0 0 0 1px @error-color;
    border-radius: 4px;
    transition: 0.3s;
}

.button {
    width: 100%;
}
</style>
