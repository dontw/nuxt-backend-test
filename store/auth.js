import getEncrypt from '../tools/encrypt'
import Cookie from 'js-cookie'

const K_TOKEN = process.env.K_TOKEN
const API_PWD_KEY = process.env.API_PWD_KEY
const API_URL = process.env.API_URL

export const state = () => ({
    session: null,
    rsession: null
})

export const mutations = {
    setSession(state, session) {
        state.session = session
    },

    setRsession(state, rsession) {
        state.rsession = rsession
    },

    clearSession(state) {
        state.session = null
    },

    clearRsession(state) {
        state.rsession = null
    }
}

export const actions = {
    //send user name & pwd, get session & rsession
    authUser({ commit }, { user, pwd }) {
        return this.$axios
            .$post(
                API_URL + '/admin/login',
                {
                    user,
                    pwd: getEncrypt(pwd, API_PWD_KEY)
                },
                {
                    headers: {
                        'k-token': K_TOKEN,
                        'k-source': 0
                    }
                }
            )
            .then(result => {
                let { session, rsession } = result.data

                //add sesssions to state
                commit('setSession', session)
                commit('setRsession', rsession)

                //add sessions to cookie
                Cookie.set('session', session)
                Cookie.set('rsession', rsession)

                return { code: 'ok' }
            })
            .catch(e => {
                return e.response.headers
            })
    },

    initAuth({ commit, dispatch }) {
        let session = Cookie.get('session')
        let rsession = Cookie.get('rsession')

        //if there is no session & rsesson than logout and redirect to login page
        if (!session || !rsession) {
            // console.log('%c NO SESSION ', 'background: #ed3f14; color: #FFFFFF')
            dispatch('logout')
        } else {
            commit('setSession', session)
            commit('setRsession', rsession)
        }
    },

    logout({ commit }) {
        // get session and rsession from cookie
        let session = Cookie.get('session')
        let rsession = Cookie.get('rsession')

        //if there's session and ression, init logout api
        if (session && rsession) {
            this.$axios
                .$post(
                    API_URL + '/admin/logout',
                    { rsession },
                    { headers: { 'k-session': session } }
                )
                .then(result => {
                    console.log(result)
                })
                .catch(e => {
                    console.log(e)
                })
        }

        // claer state and cookie
        commit('clearSession')
        commit('clearRsession')
        Cookie.remove('session')
        Cookie.remove('rsession')
    }
}

export const getters = {
    isAuth(state) {
        return state.session != null
    }
}
