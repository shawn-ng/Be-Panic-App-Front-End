import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'
import Home from './common/Home.js'
import Products from './common/Products.js'
import ShowProduct from './common/ShowProduct.js'
import Search from './common/Search.js'
import Register from '../auth/Register.js'
import Login from '../auth/Login.js'
import SuperAdminView from '../adminConsole/super admin/superAdminView.js'

import '../styles/styles.scss'
import AdminView from '../adminConsole/admin/adminView.js'
// const Home = React.lazy(() => import('./common/Home.js'))

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ShowProduct} />
        <Route path="/search" component={Search} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/superAdmin" component={SuperAdminView} />
        <Route path="/admin" component={AdminView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
