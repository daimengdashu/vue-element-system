import Request from '@/utils/request'

export function initTree () {
  return Request({
    url: '/system/unitManage/initTree',
    method: 'post',
    data: {}
  })
}
