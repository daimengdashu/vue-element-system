import axios from 'axios'
import {Message} from 'element-ui'

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
  if (data.code === '222222') {
    Message({
      message: data.message,
      type: 'error'
    })
  }
  return data
}, error => {
  Message({
    message: error,
    type: 'error'
  })
  return Promise.reject(error)
})

export default service
