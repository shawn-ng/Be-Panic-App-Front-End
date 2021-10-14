import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'
import Home from './common/Home.js'
import Products from './common/Products.js'
import ShowProduct from './common/ShowProduct.js'
import Basket from './common/Basket.js'
import Register from '../auth/Register.js'
import Login from '../auth/Login.js'
import SuperAdminView from '../adminConsole/superAdmin/superAdminView.js'
import AdminView from '../adminConsole/admin/adminView.js'

import '../styles/style.scss'

// import Navbar from './navbar/Navbar.js'
// import Products from './products/Products.js'
// import Basket from './basket/Basket.js'
// import SingleItem from './SingleItem/SingleItem.js'

function App({ current }) {
  const [basket, setBasket] = React.useState([])

  const handleBasketItemSelect = (item) => setBasket([...basket, item])

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/products"
          component={(props) => (
            <Products {...props} onItemSelect={handleBasketItemSelect} />
          )}
        />
        <Route path="/product/:id" component={ShowProduct} />
        <Route
          path="/basket"
          component={(props) => <Basket {...props} basket={basket} />}
        />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/superAdmin" component={SuperAdminView} />
        <Route path="/admin" component={AdminView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
