import {
    ErrorBag
} from 'vee-validate'

const bag = new ErrorBag()

// const bag = {
//     field: 'Field name',
//     msg: 'Error message',
//     rule: 'Rule Name', // optional
//     scope: 'Scope Name', // optional
//     id: 'uniqueId' // optional
//   };

bag.add('email', '测试错误信息')
bag.add('user', '账号输入错误', 'type')
bag.add('user', '账号输入错误test', 'test')
bag.add('password', '密码输入错误', 'type')

export default bag
