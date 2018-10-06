const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const loginRouetr = require('./routers/login.js')


const app = express()


// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// for parsing application/json
app.use(bodyParser.json())

app.use(session({
	secret: 'keyboard cat',
	name: 'sessionId',
	resave: true,
	saveUninitialized: false,
	cookie: {
		maxAge: 10000
	}
}))

// app.use(function(req,res,next){
// 	console.log('hello')
// 	console.log(req.session)
// 	res.locals.session = req.session
// 	next()
// })


app.use(loginRouetr)

app.listen(3000, function() {
  console.log('服务已启动')
})
