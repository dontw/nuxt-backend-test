export const state = () => ({
    list: [
        {
            nickname: 'doge',
            passportNumber: '000001-1',
            phone: '12345678912',
            name: '富贵郭',
            passportName: '王美美',
            passportRel: '母亲',
            gender: 0,
            height: 360,
            weight: 530,
            birthday: '1949/10/01'
        }
    ],

    listCount: 1,
    listSetting: {
        phone: null,
        passportName: null,
        gender: null
    },
    modalStatus: true,
    modalData: {
        nickname: 'doge',
        passportNumber: '000001-1',
        phone: '12345678912',
        name: '富贵郭',
        passportName: '王美美',
        passportRel: '母亲',
        gender: 0,
        height: 360,
        weight: 530,
        birthday: '1949/10/01'
    }
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
    // 设定使用者资讯弹窗(user modal)显示状态
    setModalStatus(vuexContex, val) {
        vuexContex.commit('setModalStatus', val)
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
            return item
        })
        return list
    }
}
