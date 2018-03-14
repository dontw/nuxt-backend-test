<template>
    <div class="login_backgournd">
        <h1 class="title">凤妃堂管理系统</h1>
        <Card class="card" shadow>
            <h3 class="card__title">管理登陆</h3>
            <form @submit.prevent="onSubmit">
                <p>账号</p>
                <i-input class="input" placeholder="请输入账号" size="large">
                    <span slot="prepend">
                        <Icon class="icon" type="person" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <p>密码</p>
                <i-input class="input" placeholder="请输入密码" size="large">
                    <span slot="prepend">
                        <Icon class="icon" type="key" color="#CCCCCC" size="20"></Icon>
                    </span>
                </i-input>
                <Button class="button" size="large" type="primary" html-type="submit">登录</Button>
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
        return {}
    },
    methods: {
        onSubmit() {
            console.log('login')
            login()
                .then(() => {
                    this.$router.push('/dashBoard')
                })
                .catch(e => {
                    console.log(e)
                })

            function login() {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, 1500)
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
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
    margin: 5% 0 30px 0;
}

.card {
    padding: 15px 15px 20px 15px;
    width: 350px;
    height: 380px;
    &__title {
        text-align: center;
        margin-bottom: 15px;
        font-weight: normal;
    }
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

.button {
    width: 100%;
    margin-top: 95px;
}
</style>
