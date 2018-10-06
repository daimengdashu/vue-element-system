let userRole = [{
    name: 'admin',
    pass: '123',
    role: 'superadmin'
  },
  {
    name: 'ccc',
    pass: '123',
    role: 'normaluser'
  }
]

const fs = require('fs')
const path = require('path')

exports.login = function(req, res) {
  console.log(req.session)
  let username = req.body.username.trim()
  let password = req.body.password.trim()
  console.log(username, password)
  let userFlag = userRole.some(function(v, i) {
    return username === v.name
  })
  if (userFlag) {
    userRole.forEach(function(v, i) {
      if (username === v.name) {
        if (password === v.pass) {
          req.session.role = v.role
          req.session.username = username
          res.send({
            code: '000000',
            message: '登陆成功'
          })
        } else {
          res.send({
            code: '100000',
            message: '登陆失败'
          })
        }
      }
    });
  } else {
    res.send({
      code: '100000',
      message: '登陆失败'
    })
  }

}


exports.getMenus = function(req,res){
  console.log(req.session)

  const role = req.session.role
  res.locals.session = req.session;
  fs.readFile(path.join(__dirname,'../jsons/menus.json'),function(err,data){
    if(err){
      throw err;
    }else{
      data = JSON.parse(data.toString())
      data.forEach(function(v,i){
        if(role === v.role){
          res.send({
            code: '000000',
            message: '获取菜单成功',
            data: v.menus
          })
        }
      })
    }
  })
}

// exports.login = function(req, res) {
//   console.log(req.body)
//   let username = req.body.username;
//   let role = '',
//     infoData = [];
//   userRole.forEach(function(v, i) {
//     if (username === v.name) {
//       role = v.role
//     }
//   });
//   fs.readFile(path.join('__dirname', '../jsons/login.json'), function(err, data) {
//     if (err) {
//       throw err;
//     } else {
//       data = JSON.parse(data.toString())
//       console.log(data)
//       console.log(data[0].role)
//       data.forEach(function(v, i) {
//         if (role === v.role) {
//           infoData = v.menus
//           console.log(infoData)
//           res.send({
//             code: '000000',
//             messge: '获取成功',
//             data: infoData
//           })
//         }
//       })
//     }
//   })
// }
