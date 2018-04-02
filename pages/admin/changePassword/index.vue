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
import md5 from 'md5'
import getEncrypt from '~/tools/encrypt'
import errCodeMsg from '~/mixins/errCodeMsg'

export default {
    layout: 'adminPanel',
    mixins: [errCodeMsg],
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
            if (this.checkInput() && this.checkNewPwd()) {
                this.$axios
                    .$post(
                        process.env.API_URL + '/user/change/pwd',
                        {
                            opwd: getEncrypt(
                                md5(this.oldPwd),
                                process.env.API_PWD_KEY
                            ),
                            npwd: getEncrypt(
                                md5(this.newPwd),
                                process.env.API_PWD_KEY
                            )
                        },
                        {
                            headers: {
                                'k-session': this.$store.state.auth.session
                            }
                        }
                    )

                    .then(result => {
                        this.$router.push('/admin/changePassword/completed')
                    })

                    .catch(e => {
                        if (!e.response.headers)
                            return this.$Message.warning('连线异常')
                        this.$Message.warning(
                            this.errCodeMsg(e.response.headers.code)
                        )
                    })
            }
        },

        checkInput() {
            if (!this.oldPwd || !this.newPwd || !this.newPwdConfirm) {
                this.$Message.warning('输入栏位不可为空')
                return false
            }
            return true
        },

        checkNewPwd() {
            if (this.newPwd !== this.newPwdConfirm) {
                this.$Message.warning(
                    '请确认 新密码 及 新密码确认 栏位是否一致!'
                )
                return false
            }
            return true
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
