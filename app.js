const express = require('express')

const app = express()
const router = require('./src/routes/index')

app.use(express.json())
app.use('/', router)

module.exports = app