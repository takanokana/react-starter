import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
const app = document.getElementById('app')

// page
import Top from './containers/Top.jsx'

ReactDOM.render(
  <Router>
    <Route path="/">
      <Top />
    </Route>
  </Router>,
  app
)
