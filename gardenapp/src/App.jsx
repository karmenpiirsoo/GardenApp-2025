import './App.css'
import NavigationBar from './components/NavigationBar'
import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/public/HomePage'
import Cart from './pages/public/Cart'
import { ContactUs } from './pages/public/ContactUs'
import NotFound from './pages/public/NotFound'
import Products from './pages/public/Products'
import Services from './pages/public/Services'
import SingleProduct from './pages/public/SingleProduct'
import YourGarden from './pages/public/YourGarden'
import AdminHome from './pages/admin/AdminHome'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import MaintainProducts from './pages/admin/MaintainProducts'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calendar from './pages/public/Calendar'


function App() {

  const [dark, setDark] = useState(localStorage.getItem("mode") || "false")

  function darkMode() {
    setDark("true"); 
    localStorage.setItem("mode", "true")
  }

  function lightMode() {
    setDark("false"); 
    localStorage.setItem("mode", "false")
  }

  return (
    <>
      <div className={dark === "true" ? "dark" : "light"}>
        <NavigationBar />
        <span className='theme-buttons'>
        <button onClick={darkMode}>Dark</button>
        <button onClick={lightMode}>Light</button>
        </span>
        <br /><br />
      <div className="text">Your garden in your pocket</div>
        <Routes>
          <Route path='' element={ <HomePage /> } />
          <Route path='calendar' element={ <Calendar /> } />
          <Route path='cart' element={ <Cart /> } />
          <Route path='contactus' element={ <ContactUs /> } />
          <Route path='shop' element={ <Products /> } />
          <Route path='services' element={ <Services /> } />
          <Route path='product/:index' element={ <SingleProduct /> } />
          <Route path='your-garden' element={ <YourGarden /> } />

          <Route path='admin' element={ <AdminHome /> } />
          <Route path='admin/add-product' element={ <AddProduct /> } />
          <Route path='admin/edit-product/:productId' element={ <EditProduct /> } />
          <Route path='admin/maintain-products' element={ <MaintainProducts /> } />

          <Route path='login' element={ <Login /> } />
          <Route path='signup' element={ <Signup /> } />

          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
