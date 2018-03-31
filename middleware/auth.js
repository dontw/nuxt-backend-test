export default function(context) {
    console.log('auth')
    let currRoute = context.route.path.split('/')[1]
    if (currRoute === 'login') {
        return
    } else {
        if (!context.store.getters['auth/isAuth']) {
            context.redirect('/login')
        }
    }
}
