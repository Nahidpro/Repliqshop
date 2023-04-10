import React from 'react'
import useStore from '../hooks/useStore'
import { Navigate, useNavigate } from 'react-router-dom';

function ProductListAdmin() {
const {Cart,increaseCartQuantity,store}  =useStore() 
const navigate = useNavigate();

  return (
    <div className=" mx-auto bg-white gap-2 w-full md:w-8/12 lg:w-6/12 xl:6/12">
     <table className="table-auto w-full  px-3">
  <thead>
    <tr className='px-2 py-2 w-full text-white bg-slate-700'>
      <th className='px-2 py-2'>Name</th>
      <th className='px-2 py-2'>Stock</th>
      
    </tr>
  </thead>
  <tbody>
  {store.map((product=> {
    return(
    <> 
<tr onClick={function(){
        navigate(`/admin/product/${product.id}`,{ state:product })
      }} className='px-2 py-2 w-full table-row'>
<td className='px-2 py-2'>{product.title}</td>
<td>{product.stock}</td> 
</tr> </> )
}))}
    
     
   
  </tbody>
</table>
      </div>
  )
}

export default ProductListAdmin

