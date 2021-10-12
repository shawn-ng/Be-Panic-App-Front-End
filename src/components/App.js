import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Register from '../auth/Register.js'
import Login from '../auth/Login.js'
import SuperAdminView from '../adminConsole/superAdmin/superAdminView.js'

import { connect } from 'react-redux'

import Navbar from './navbar/Navbar.js'
import Products from './products/Products.js'
import Basket from './basket/Basket.js'
import SingleItem from './SingleItem/SingleItem.js'

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Router exact path="/" component={Products} />
          <Router exact path="/basket" component={Basket} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Router exact path="/products:id" component={SingleItem} />
          )}
          <Router path="/register" component={Register} />
          <Router path="/login" component={Login} />
          <Router path="/superAdmin" component={SuperAdminView} />
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(App)
