import React from 'react'
import useStore from '../hooks/useStore'
import { Navigate, useNavigate } from 'react-router-dom';


function UserList() {
const {userlist} = useStore()
const navigate = useNavigate();

  return (
    <div className=" mx-auto bg-white gap-2 w-full md:w-8/12 lg:w-6/12 xl:6/12">
     <table className="table-auto w-full  px-3">
  <thead>
    <tr className='px-2 py-2 w-full text-white bg-slate-700'>
      <th className='px-2 py-2'>User Neme</th>
      <th className='px-2 py-2'>Mobile</th>
      
    </tr>
  </thead>
  <tbody>
    {userlist.map((user=> {
        return(
    <tr onClick={function(){
        navigate(`/admin/user/${user.id}`,{ state:user })
      }} key={user.id}  className='px-2 py-2 w-full table-row'>
    <td className='px-2 py-2'>{user.name}</td>
    <td>{user.mobileNumber}</td>
</tr>)
    }))}
    
     
   
  </tbody>
</table>
      </div>
  )
}

export default UserList