let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/cryptic-scrubland-09574.git',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl