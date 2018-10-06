const express = require('express')
const bodyParser = require('body-parser')

const loginRouetr = require('./routers/login.js')


const app = express()


// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// for parsing application/json
app.use(bodyParser.json())


app.use(loginRouetr)

app.listen(3000, function() {
  console.log('服务已启动')
})
