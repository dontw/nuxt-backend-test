export const state = () => ({
    locales: ['zh-cn', 'en'],
    locale: 'zh-cn',
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}
