import React, { Component } from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Footer from './components/Footer'
import Theme from './utils/Theme'

injectGlobal`
  ${reset};
  html, body, body, [data-reactroot] {
    min-height: 100%;
    width: 100%;
  }
  html, body {
    background: ${Theme.colors.primaryDarker};
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 16px;
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    font-weight: ${Theme.weights.regular};
    color: #3d556b;
    text-align: center;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [data-name="mojs-shape"] {
    position: fixed !important;
    z-index: 99999999;
    pointer-events: none;
  }
`

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Routes />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
