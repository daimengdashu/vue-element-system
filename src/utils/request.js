import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  Message({
    message: error,
    type: 'error'
  })
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  console.log(response)
  const data = response.data
  if (data.code === '000000') {
    return data
  } else if (data.code === '100000') {
    if (data.message === '登陆失败') {
      Message({
        message: data.message,
        type: 'error'
      })
    } else {
      MessageBox(data.message, '提示', {
        confirmButtonText: '确定'
      })
    }
  } else if (data.code === '999999') {
    MessageBox('登陆已过期,请重新登陆', '提示', {
      confirmButtonText: '确定'
    }).then(() => {
      console.log(111)
      // this.$router.push({
      //   path: '/login'
      // })
    })
  }
}, error => {
  Message({
    message: error,
    type: 'error'
  })
  return Promise.reject(error)
})

export default service
