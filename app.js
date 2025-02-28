const express = require('express')
const bodyParser = require('body-parser')

const loginRoutes = require('./routes/login')
const formRoutes = require('./routes/form')

const app = express()

app.use(bodyParser.urlencoded({'extended':false}))


app.use(loginRoutes)
app.use(formRoutes)

app.listen(4000,()=>{
    console.log('app started listening')
})