<template>
    <div class="login_backgournd">
        <h1 class="title">凤妃堂管理系统</h1>
        <Card class="card" shadow>
            <h3 class="card__title">管理登陆</h3>
            <form @submit.prevent="onSubmit">
                <p>账号</p>
                <i-input v-model="user" class="input" type="text" placeholder="请输入账号" size="large" clearable>
                    <span slot="prepend">
                        <Icon class="icon" type="person" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <p>密码</p>
                <i-input class="input" :class="{'has-error':false}" type="password" placeholder="请输入密码" size="large" clearable>
                    <span slot="prepend">
                        <Icon class="icon" type="key" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <div class="card__bottom-wrap">
                    <p class="message message--success">
                        <Icon type="checkmark-circled" size="16"></Icon> Success Message!
                    </p>
                    <p class="message message--error">
                        <Icon type="android-warning" size="18"></Icon> Error Message!
                    </p>
                    <Button class="button" size="large" type="primary" html-type="submit" :loading="loginStatus">登录</Button>
                    <input v-model="email" v-validate="'required|email'" name="email" type="text">
                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    <button @click="validateBeforeSubmit" class="btn btn-primary">Submit Registration</button>
                </div>
            </form>
        </Card>
    </div>
</template>
<script>
import { Input } from 'iview'

export default {
    components: {
        'i-input': Input
    },
    data() {
        return {
            loginStatus: false,
            user: '',
            email: '',
            test: 'TEST',
            loginMsg: ''
        }
    },
    methods: {
        onSubmit() {
            // console.log('login')
            // login()
            //     .then(() => {
            //         this.$router.push('/dashBoard')
            //     })
            //     .catch(e => {
            //         console.log(e)
            //     })
            // function login() {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(resolve, 1500)
            //     })
            // }
        },

        validateBeforeSubmit(e) {
            this.$validator
                .validateAll()
                .then(x => {
                    console.log('ok', x)
                    console.log(this.errors)
                })
                .catch(e => {
                    console.log('error', e)
                })
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
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
