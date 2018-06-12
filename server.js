const express = require('express')
const path = require('path')

const app = express()
const apiApp = require('./api')

// API routes
app.use('/api', apiApp)

// serve SPA and its assets
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

const appPort = process.env.PORT || 8080
app.listen(appPort)

console.log(`[server] Running on port ${appPort}`)
