import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home.js'

import '../styles/styles.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/all" component={AllProducts} /> */}
    </Switch>
  </BrowserRouter>
)

export default App
