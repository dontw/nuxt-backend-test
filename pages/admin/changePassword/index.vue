<template>
    <div class="card-wrap">
        <Card class="card" dis-hover>
            <form action="" @submit.prevent="onSubmit">
                <h3 class="card-title" slot="title">修改管理者密码</h3>
                <div class="input-wrap">
                    <p>当前密码</p>
                    <i-input v-model="oldPwd" type="password" size="large" placeholder="当前密码"></i-input>
                </div>
                <div class="input-wrap">
                    <p>新密码</p>
                    <i-input v-model="newPwd" type="password" size="large" placeholder="新密码"></i-input>
                </div>
                <div class="input-wrap">
                    <p>新密码确认</p>
                    <i-input v-model="newPwdConfirm" type="password" size="large" placeholder="新密码确认"></i-input>
                </div>
                <Button class="button" size="large" type="primary" html-type="submit" :disabled="disableStatus" :loading="loadingStatus" long>送出</Button>
            </form>
        </Card>
    </div>
</template>
<script>
export default {
    layout: 'adminPanel',
    data() {
        return {
            oldPwd: null,
            newPwd: null,
            newPwdConfirm: null,
            disableStatus: false,
            loadingStatus: false
        }
    },

    methods: {
        onSubmit() {
            this.$axios
                .$post(
                    process.env.API_URL + '/user/change/pwd',
                    { opwd: this.oldPwd, npwd: this.newPwd },
                    {
                        headers: {
                            'k-session': this.$store.state.auth.session
                        }
                    }
                )
                .then(result => {
                    console.log(result)
                })
                .catch(e => {
                    console.log(e.response.headers)
                })
        }
    }
}
</script>
<style lang="less" scoped>
.card-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
}

.card {
    padding: 15px 15px 30px 15px;
    width: 350px;
    height: 400px;
}

.card-title {
    text-align: center;
}

.input-wrap {
    margin-bottom: 15px;
}

.input-wrap:last-of-type {
    margin-bottom: 60px;
}

.button {
    position: relative;
}
</style>
