
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
        menus: [{
          menu: '系统管理',
          children: []
        }, {
          menu: '基础管理',
          children: []
        }, {
          menu: '数据采集',
          children: [{
            menu: '手动采集',
            children: []
          }, {
            menu: '自动采集',
            children: []
          }]
        }]
      }
    }
  }
  if (username === 'aaa') {
    return {
      code: '000000',
      message: '登录成功!',
      data: {
        menus: [{
          menu: '疑点库',
          children: []
        }, {
          menu: '数据治理',
          children: [{
            menu: '数据上传',
            children: []
          }, {
            menu: '数据定义',
            children: []
          }]
        }, {
          menu: '数据查询',
          children: []
        }]
      }
    }
  }
  if (username === 'ccc') {
    return {
      code: '000000',
      message: '登录成功!',
      data: {
        menus: [{
          menu: '项目管理',
          children: [{
            menu: '项目管理',
            children: []
          }]
        }, {
          menu: '整改认定',
          children: [{
            menu: '信息填报',
            children: []
          }, {
            menu: '项目分配',
            children: []
          }]
        }, {
          menu: '执行督查',
          children: [{
            menu: '问题提取',
            children: [{
              menu: '问题上传',
              children: [{
                menu: '文件上传',
                children: [{
                  menu: '文档上传',
                  children: []
                }]
              }]
            }]
          }, {
            menu: '问题审核',
            children: []
          }, {
            menu: '项目分配',
            children: []
          }]
        }]
      }
    }
  }
}
