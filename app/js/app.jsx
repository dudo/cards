import React from 'react'
import { Router } from 'react-router'

var routes = require('./routes.jsx')
var el = document.getElementById('content')

React.render(<Router routes={routes}/>, el)