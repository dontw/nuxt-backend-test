const pkg = require('./package')

module.exports = {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, user-scalable=no'
            },
            {
                name: 'renderer', //針對360瀏覽器 http://http://se.360.cn/v6/help/meta.html
                content: 'webkit'
            },
            {
                'http-equiv': 'X-UA-Compatible', //強制瀏覽器兼容模式方案
                content: 'IE=edge,chrome=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#2D8CF0'
    },

    /*
     ** Global CSS
     */
    css: [{
        src: '../assets/less/global.less',
        lang: 'less'
    }],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: '~plugins/iview.js',
        ssr: true
    }, {
        src: '~plugins/qriously.js'
    }],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios', [
            'nuxt-i18n',
            {
                locales: [{
                        code: 'cn',
                        iso: 'zh-cn',
                        langFile: 'zh-cn.json',
                        name: '中文'
                    },
                    {
                        code: 'en',
                        iso: 'en-US',
                        langFile: 'en.json',
                        name: 'English'
                    }
                ],
                defaultLocale: 'cn',
                loadLanguagesAsync: true
            }
        ]
    ],

    /*
     ** Middleware configuration
     */
    router: {
        middleware: ['routerBlocker']
    },

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },

    transition: {
        name: 'fade', // vue css trasition class name
        mode: 'out-in'
    }
}
