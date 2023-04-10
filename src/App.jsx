import { useContext } from "react"
import Cart from "./Views/Cart"
import CartProductCard from "./Components/CartProductCard"
import Login from "./Views/Login"
import Navbar from "./Components/Navbar"

import ProductCardListView from "./Components/ProductCardListView"
import ProductDetailsView from "./Components/ProductDetailsView"

import ProductList from "./Components/ProductList"

import useStore from "./hooks/useStore"
import AdminDashboardView from "./Views/AdminDashboardView"
import { Route, Routes } from "react-router-dom"
import Home from "./Views/Home"
import UserList from "./Components/UserList"
import ProductListAdmin from "./Components/ProductListAdmin"
import UserDetails from "./Components/UserDetails"
import OrderListAdmin from "./Components/OrderListAdmin"
import OrderDetails from "./Components/OrderDetails"
import ProductDetailsAdmin from "./Components/ProductDetailsAdmin"


function App() {
 
  const {store,Cartiopen,setcartOpen ,order}  =  useStore()
  console.log(order);

  return (
    <div > 

      <Navbar/> 

  
{Cartiopen && <Cart/>}
     {/* <AdminDashboardView/> */}
{/* <div className="mx-auto"><ProductDetailsView image="https://source.unsplash.com/random/"
  title="Example Product 3"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi ut elit fermentum aliquet."
  price="19.99"/> </div> */}
  {/* <Cart/> */}
  {/* { store.map(product => <div className="my-3"> <ProductCardListView product={product}  /> </div>)} */}

{/* <ProductList/>
<ProductCardListView image="https://source.unsplash.com/random/"
  title="Example Product 3"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi ut elit fermentum aliquet."
  price="19.99"/> */}


 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin" element={<AdminDashboardView/>}>
      <Route path="customerlist" element={<UserList/>}    />
      <Route path="productlist" element={<ProductListAdmin/>} />
      <Route path="user/:id" element={<UserDetails/>} />
      <Route path="order/:id" element={<OrderDetails/>} />
      <Route path="product/:id" element={<ProductDetailsAdmin/>} />
      <Route path="orderlist" element={<OrderListAdmin/>} />
      
    </Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>

  </Routes>

     
    </div> 

  )
}

export default App
