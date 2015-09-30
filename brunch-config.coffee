module.exports = config:
  plugins:
    babel:
      pattern: /\.(es6|jsx)$/
  files:
    javascripts:
      joinTo: 'app.js'

    stylesheets:
      joinTo: 'app.css'