const express = require('express')
const next = require('next')
const {parse} = require('url')
const {join} = require('path')
const path = require('path')
const buildSitemap = require('../lib/sitemap')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

const startServer = () => {
  app
    .prepare()
    .then(() => {
      const server = express()

      server.use(function(req, res, next) {
        res.locals.app = app
        next()
      })

      server.get('/privacy_policy', (req, res) => {
        return app.render(req, res, '/privacy_policy', req.query)
      })

      server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true)
        const rootStaticFiles = ['/robots.txt', '/sitemap.xml']
        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
          if (parsedUrl.pathname.indexOf('sitemap') > -1) {
            buildSitemap()
              .then((response) => {
                console.log(response)

                const pathToSitemap = path.join(
                  process.cwd(),
                  'static',
                  'sitemap.xml'
                )
                app.serveStatic(req, res, pathToSitemap)
              })
              .catch((e) => {
                console.log(
                  `The following error has ocurred while trying to build sitemap: ${
                    e.message
                  }`
                )
                app.render(req, res, '/', req.query)
              })
          } else {
            const path = join(__dirname, 'static', parsedUrl.pathname)
            app.serveStatic(req, res, path)
          }
        } else {
          return handle(req, res)
        }
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
