const app = require('express')()

app.use('/photos', (req, res) => {
  console.log('[PHOTOS]', req)
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

module.exports = app
