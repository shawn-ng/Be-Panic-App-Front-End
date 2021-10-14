// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router'
// import { removeToken, getPayload } from '../../api/Auth.js'
// import logo from '../images/logo.jpg'
// import styles from '../navbar/Navbar.module.css'

// import { connect } from 'react-redux'
// import Navbar from '../navbar/Navbar.js'

// const NavBar = ({ basket }) => {
//   const location = useLocation()
//   const [roleState, setRoleState] = React.useState()
//   const [basketCount, setBasketCount] = useState(0)

//   const handleClick = () => {
//     removeToken()
//   }

//   const fetchingRoleType = async () => {
//     try {
//       const roleType = await getPayload()

//       setRoleState(roleType.role)
//     } catch (err) {
//       console.log('Fetching Role Error:', err)
//     }
//   }
//   React.useEffect(() => {
//     fetchingRoleType()
//   }, [])

//   useEffect(() => {
//     let count = 0
//     basket.forEach((item) => {
//       count += item.qty
//     })

//     setBasketCount(count)
//   }, [basket, basketCount])

//   return (
//     <div className="navbar is-dark">
//       <nav className="navbar-menu is-fullwidth is-dark">
//         <div className="container">
//           <div className="navbar-brand is-dark">
//             <img src={logo} alt={logo} className="image is-64x64" />
//             <Link to="/" className="navbar-item">
//               Home
//             </Link>
//             <Link to="/products" className="navbar-item">
//               Products
//             </Link>

//             <div className="navbar-end">
//               <Link to="/basket" className="navbar-item">
//                 🧺 Basket
//                 <div className={styles.basket_counter}>{basketCount}</div>
//               </Link>
//               {roleState === 'super admin' && window.localStorage.token ? (
//                 <Link to="/superAdmin" className="navbar-item">
//                   Users
//                 </Link>
//               ) : null}
//               {roleState === 'admin' && window.localStorage.token ? (
//                 <Link to="/admin" className="navbar-item">
//                   Admin
//                 </Link>
//               ) : null}
//               {window.localStorage.token ? (
//                 <Link
//                   to={{
//                     pathname: '/login',
//                   }}
//                   className="navbar-item"
//                   onClick={handleClick}
//                 >
//                   LogOut
//                 </Link>
//               ) : (
//                 <>
//                   <Link to="/register" className="navbar-item">
//                     Register
//                   </Link>
//                   <Link to={{ pathname: '/login' }} className="navbar-item">
//                     Login
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     basket: state.shop.basket,
//   }
// }

// // export default Navbar
// export default connect(mapStateToProps)(Navbar)
