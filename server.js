const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const api = express();

api.use('/photos', (req, res) => {
  const page = parseInt(req.query.page || 1)
  const baseUrl = 'http://via.placeholder.com/320'

  const result = []
  for (let i = 0; i < 20; i++) {
    const color1 = Math.round(Math.random() * 1000)
    const color2 = Math.round(Math.random() * 1000)

    result.push({
      id: page + i,
      url: `${baseUrl}/${color1}/${color2}`
    })
  }

  res.json(result)
})

// API routes
app.use('/api', api)

// serve SPA and its assets
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const appPort = process.env.PORT || 8080
app.listen(appPort);

console.log(`[server] Running on port ${appPort}`)
