const app = require('express')()

const { fetchPhotos } = require('./lib/photos')

app.use('/photos', (req, res) => {
  const page = parseInt(req.query.page || 1)
  fetchPhotos().then(photos => {
    res.json(photos)
  })
})

module.exports = app
