export default {
    filters: {
        //val 0:woman 1:man
        genderToLetter(val) {
            switch (val) {
                case 0:
                    return '女'
                case 1:
                    return '男'
                default:
                    return '无'
            }
        },

        roleToLetter(val) {
            switch (val) {
                case 0:
                    return '管理员'
                case 1:
                    return '一般用户'
                default:
                    return '无'
            }
        },

        bindToLetter(val) {
            switch (val) {
                case 0:
                    return '未绑定'
                case 1:
                    return '已绑定'
                default:
                    return '无'
            }
        }
    }
}
