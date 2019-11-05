import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from "react-router-dom"

import './index.css'
import App from './App'
import Events from './Events'
import EventDetails from './EventDetails'

const routing = (
  <Router>
    <App />
    <Route exact path="/" component={Events} />
    <Route path="/events/" component={Events} />
    <Route path="/eventdetails/:id" component={EventDetails} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))