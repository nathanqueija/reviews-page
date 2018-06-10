const prod = process.env.NODE_ENV === 'production'

let favicon

if (!prod) {
  favicon = 'favicon-dev.png'
} else if (process.env.IS_STAGING === 'true') {
  favicon = 'favicon-staging.png'
} else {
  favicon = 'favicon.png'
}

module.exports = {
  'process.env.NODE_ENV': prod ? 'production' : 'development',
  'process.env.REACT_APP_API_URL':
    process.env.WEBSERVICE_BASE_URL || 'http://localhost:8080',
  'process.env.REACT_APP_FAVICON': favicon,
  'process.env.GOOGLE_ANALYTICS_TRACKING_ID': prod
    ? process.env.GOOGLE_ANALYTICS_TRACKING_ID
    : null,
  'process.env.GOOGLE_MAPS_KEY':
    process.env.GOOGLE_MAPS_KEY || 'AIzaSyDmYQLTPwsDPtErGWTgiejz17QCw39MEVQ',
  'process.env.TEST': process.env.TEST === 'cypress' ? 'cypress' : 'jest'
}
