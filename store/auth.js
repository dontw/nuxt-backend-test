import getEncrypt from '../tools/encrypt'
import axios from 'axios'

export const state = () => ({
    session: null,
})

export const mutations = {
    setSession(state, session) {
        state.session = session
    },

    clearSession(state) {
        state.token = null
    }
}

export const actions = {

    authUser(vueContext, {
        user,
        pwd
    }) {
        const K_TOKEN = process.env.K_TOKEN
        const API_PWD_KEY = process.env.API_PWD_KEY
        return axios
            .post('http://192.168.2.215:21000/api/v1/admin/login', {
                user,
                pwd: getEncrypt(pwd, API_PWD_KEY)
            }, {
                headers: {
                    'k-token': K_TOKEN,
                    'k-source': 0,
                    'Content-Type': 'application/json'
                }
            })
            .then(result => {
                console.log(result)
            })
            .catch(e => {
                console.log(e)
            })

        // return fetch('http://192.168.2.215:21000/api/v1/admin/login', {
        //     method: 'POST',
        //     headers: new Headers({
        //         'k-token': K_TOKEN,
        //         'k-source': 0,
        //         'Content-Type': 'application/json'
        //     })
        // }).then(response => {
        //     console.log(response)
        // })
    }
}
