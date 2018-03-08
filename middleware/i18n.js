module.exports = ({
    app,
    store,
    route,
    params,
    error,
    hotReload
}) => {
    // If middleware is called from hot-reloading, ignore it
    if (hotReload) return
    // Get locale from params
    const locale = params.lang || 'zh-cn'
    if (store.state.locales.indexOf(locale) === -1) {
        return error({
            message: 'This zh-cn locale could not be found.',
            statusCode: 404
        })
    }
    // Set locale
    store.commit('SET_LANG', locale)
    app.i18n.locale = store.state.locale
}
