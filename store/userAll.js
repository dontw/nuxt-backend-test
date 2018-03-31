export const state = () => ({
    list: [],
    modalStatus: false,
    modalData: {}
})

export const mutations = {
    setList(state, arr) {
        state.list = arr
    },

    setModalStatus(state, val) {
        state.modalStatus = val
    },

    setModalData(state, data) {
        state.modalData = data
    }

}

export const actions = {
    setList(VuexContext) {
        return this.$axios
            .$get(`admin/users`)
            .then(result => {
                VuexContext.commit('setList', result.data.rows)
                return true
            })
            .catch(e => {
                console.log('error in userAll/setList:', e)
                return false
            })
    },
    setModalStatus(vuexContex, val) {
        vuexContex.commit('setModalStatus', val)
    },

    setModalData(vuexContex, userId) {
        console.log('selected user id', userId)
        return this.$axios
            .$get(`/admin/user/${userId}`)
            .then(result => {
                vuexContex.commit('setModalData', result.data)
                return true
            })
            .catch(e => {
                console.log('error in get userAll/setModalData:', e)
                return false
            })
    }
}

// export const getters = {

// }
