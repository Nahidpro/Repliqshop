import { createContext, useState } from "react";
import ProductCollection from "../utility/ProductCollection";
import users from "../utility/UserList";
import OrderCollection from "../utility/ProductOrderCollection,js";

 const storeContext = createContext() 
 export const StoreProvider = ({children}) => {
  
    const [store,setStore] = useState(ProductCollection)
    const [Cartiopen,setcartOpen] = useState(false)
    const [Cart,setCart] = useState([])
    const [userlist,setUser] = useState(users)
    const [orders,setOrders] = useState(OrderCollection)
    const [menuisOpen, setMenuIsOpen] = useState(false)
// this function add Product to Cart or increase Cart Product Quantity
    function increaseCartQuantity(product) {
      setCart(currItems => {
        if (currItems.find(item => item.id === product.id) == null) {
          return [...currItems, {...product, quantity: 1, totalPrice:product.price }]
        } else {
          return currItems.map(item => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1, totalPrice:parseInt((item.price * (item.quantity + 1))) ,  }
            } else {
              return item
            }
          })
        }
      })
    }
    // this function remove Product to Cart or decreas Cart Product Quantity
    function decreaseCartQuantity(product) {
      setCart(currItems => {
        if (currItems.find(item => item.id === product.id)?.quantity === 1) {
          return currItems.filter(item => item.id !== product.id)
        } else {
          return currItems.map(item => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity - 1 ,totalPrice : item.price * (item.quantity - 1)   }
            } else {
              return item
            }
          })
        }
      })
    }
    function removeFromCart(product) {
      setCart(currItems => {
        return currItems.filter(item => item.id !== product.id)
      })
    }

 
   let getCartTotalPrice = Cart.reduce((cartTotal, product) => cartTotal + product.totalPrice, 0);
    
    
    return(
    <storeContext.Provider value={{store,setStore,Cartiopen,setcartOpen,Cart,increaseCartQuantity,decreaseCartQuantity,getCartTotalPrice,removeFromCart,userlist,orders,setOrders,menuisOpen,setMenuIsOpen}}>
      {children}
    </storeContext.Provider>
    )
}
export default storeContext