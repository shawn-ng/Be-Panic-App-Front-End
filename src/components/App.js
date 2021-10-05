import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'

import '../styles/styles.scss'
const Home = React.lazy(() => import('../components/common/Home'))

const App = () => (
  <BrowserRouter>
    <NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </NavBar>
  </BrowserRouter>
)

export default App
