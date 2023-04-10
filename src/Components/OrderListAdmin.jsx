import React from 'react'
import useStore from '../hooks/useStore'
import { useNavigate } from 'react-router-dom';

function OrderListAdmin() {
    const{orders,setOrders}= useStore()
    const navigate = useNavigate();
  return (
    <div className=" mx-auto bg-white gap-2 w-full md:w-8/12 lg:w-6/12 xl:6/12">
     <table className="table-auto w-full  px-3">
  <thead>
    <tr className='px-2 py-2 w-full text-white bg-slate-700'>
      <th className='px-2 py-2'>Order By</th>
      <th className='px-2 py-2'>Product Name</th>
      
    </tr>
  </thead>
  <tbody>
  {orders.map((order=> {
    return(
    <> 
<tr onClick={function () {
       navigate(`/admin/order/${order.id}`,{ state:order })
      }} className='px-2 py-2 w-full table-row'>
<td className='px-2 py-2'>{order.OrderBy}</td>
<td>{order.title}</td> 
</tr> </> )
}))}
    
     
   
  </tbody>
</table>
      </div>
  )
}

export default OrderListAdmin