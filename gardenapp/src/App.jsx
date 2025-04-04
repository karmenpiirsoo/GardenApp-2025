import './App.css'
import NavigationBar from './components/NavigationBar'
import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/public/HomePage'
import Blog from './pages/public/Blog'
import Cart from './pages/public/Cart'
import ContactUs from './pages/public/ContactUs'
import NotFound from './pages/public/NotFound'
import Products from './pages/public/Products'
import Services from './pages/public/Services'
import SingleProduct from './pages/public/SingleProduct'
import YourGarden from './pages/public/YourGarden'
import AdminHome from './pages/admin/AdminHome'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainProducts from './pages/admin/MaintainProducts'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {


  return (
    <>
      <div>
        <NavigationBar />

        <Routes>
          <Route path='' element={ <HomePage /> } />
          <Route path='blog' element={ <Blog /> } />
          <Route path='cart' element={ <Cart /> } />
          <Route path='contactus' element={ <ContactUs /> } />
          <Route path='products' element={ <Products /> } />
          <Route path='services' element={ <Services /> } />
          <Route path='product/:index' element={ <SingleProduct /> } />
          <Route path='your-garden' element={ <YourGarden /> } />

          <Route path='admin' element={ <AdminHome /> } />
          <Route path='admin/add-product' element={ <AddProduct /> } />
          <Route path='admin/editu-product/:index' element={ <EditProduct /> } />
          <Route path='admin/maintain-categories' element={ <MaintainCategories /> } />
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
