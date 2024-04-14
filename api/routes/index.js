const express = require('express')
const wordsRouter = require('./words.route')

function routerApi(app) {
  const router  = express.Router();
  app.use('/api/v1',router)
  router.use('/words',wordsRouter)
}

module.exports = routerApi
