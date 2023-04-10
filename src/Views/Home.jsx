import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import ProductCardListView from '../Components/ProductCardListView'
import ProductList from '../Components/ProductList'
import ProductListAdmin from '../Components/ProductListAdmin'

function Home() {
  return (
    <div className=' mt-2'>
        
       <ProductList/>
    
    </div>
  )
}

export default Home