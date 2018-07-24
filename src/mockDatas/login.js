
export function returnLoginInfo (req) {
  const username = JSON.parse(req.body).username
  console.log(username)
  var names = ['admin', 'aaa', 'ccc']
  if (names.indexOf(username) === -1) {
    return {
      code: '222222',
      message: '您的账号或密码错误!'
    }
  }
  if (username === 'admin') {
    return {
      code: '000000',
      message: '登录成功!',
      data: {
        menus: ['数据采集', '数据治理', '数据管理']
      }
    }
  }
  if (username === 'aaa') {
    return {
      code: '000000',
      message: '登录成功!',
      data: {
        menus: ['基础管理', '数据查询', '个人工作台']
      }
    }
  }
}
