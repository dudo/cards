import React from 'react'
import { Router, Route, Link } from 'react-router'

var CardsApp = require('./components/layouts/application.jsx')
var CardsIndex = require('./components/cards/index.jsx')
var NoMatch = require('./components/layouts/404.jsx')

export default (
  <Route path="/" component={CardsApp}>
    <IndexRoute component={CardsIndex}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)