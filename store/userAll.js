const USER_URL = process.env.USER_URL

const TODAY = new Date()

const FORMAT_TODAY = `${TODAY.getFullYear()}/${TODAY.getMonth() +
    1}/${TODAY.getDate()}`

TODAY.setDate(TODAY.getDate() - 365 * 2)

const FOMRAT_START_DAY = `${TODAY.getFullYear()}/${TODAY.getMonth() +
    1}/${TODAY.getDate()}`

export const state = () => ({
    list: [],
    listCount: null,
    listSetting: {
        phone: null,
        role: null,
        gender: null,
        startdate: FOMRAT_START_DAY,
        enddate: FORMAT_TODAY
    },
    default_start_day: FOMRAT_START_DAY,
    today: FORMAT_TODAY,
    modalStatus: false,
    modalData: {}
})

export const mutations = {
    setList(state, arr) {
        state.list = arr
    },

    setListCount(state, val) {
        state.listCount = val
    },

    setListSetting(state, obj) {
        state.listSetting = obj
    },

    setModalStatus(state, val) {
        state.modalStatus = val
    },

    setModalData(state, data) {
        state.modalData = data
    }
}

export const actions = {
    // 取得资料阵列
    setList(VuexContext, { data, session }) {
        return this.$axios
            .$post(USER_URL + '/admin/users', data, {
                headers: {
                    'k-session': session
                }
            })
            .then(result => {
                VuexContext.commit('setList', result.data.rows)
                VuexContext.commit('setListSetting', data.query)
                VuexContext.commit('setListCount', result.data.count)
                return true
            })
            .catch(e => {
                console.log('error in userAll/setList:', e.response.headers)
                return e.response.headers
            })
    },

    // 设定使用者资讯弹窗(user modal)显示状态
    setModalStatus(vuexContex, val) {
        vuexContex.commit('setModalStatus', val)
    },

    // 取得使用者详细资讯
    setModalData(vuexContex, { userId, session }) {
        return this.$axios
            .$get(USER_URL + `/admin/user/${userId}`, {
                headers: {
                    'k-session': session
                }
            })
            .then(result => {
                vuexContex.commit('setModalData', result.data)
                return true
            })
            .catch(e => {
                console.log(
                    'error in get userAll/setModalData:',
                    e.response.headers
                )
                return false
            })
    }
}

export const getters = {
    getList(state) {
        //深层复制阵列
        let list = JSON.parse(JSON.stringify(state.list))
        list.map(item => {
            if (item.gender !== null) {
                item.gender === 0 ? (item.gender = '女') : (item.gender = '男')
            }
            if (item.role !== null) {
                item.role === 0
                    ? (item.role = '管理员')
                    : (item.role = '一般使用者')
            }
            return item
        })
        return list
    }
}
