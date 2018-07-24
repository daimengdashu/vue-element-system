import Mock from 'mockjs'
import {returnLoginInfo} from './login'

// 登录
Mock.mock('/api/login', 'post', returnLoginInfo)

export default Mock
