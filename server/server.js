const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()
const fetchReviews = require('../services/reviews-api')
const apiUrl = process.env.REACT_APP_API_URL

const startServer = () => {
  if (!apiUrl)
    throw new Error(
      'Please, provide an env var called REACT_APP_API_URL to bootstrap the app '
    )
  app
    .prepare()
    .then(() => {
      const server = express()

      server.use(function(req, res, next) {
        res.locals.app = app
        next()
      })

      server.get('/reviews/:page', async (req, res) => {
        const {page} = req.params
        try {
          const response = await fetchReviews(page)
          res.status(200).send(response.data)
        } catch (e) {
          res.status(500).send({error: e})
        }
      })

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
        return server
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
}

startServer()

module.exports = startServer
