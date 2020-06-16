const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } =  require('http-proxy-middleware')

const app = express()

app.use(cors())
app.use('*',createProxyMiddleware({ target: 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com', changeOrigin: true }))

app.listen(8080)