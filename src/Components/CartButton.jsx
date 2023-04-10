import React from 'react'
import useStore from '../hooks/useStore'

export default function CartButton({product}) {
const {increaseCartQuantity,decreaseCartQuantity} = useStore()
  return (
    <div className='flex items-center justify-center w-full px-1 py-1 text-black  '>
    <button onClick={()=> decreaseCartQuantity(product)} className='py-2 w-2/6 flex-grow-1  bg-zinc-300 text-lg'>-</button>
    <button className='py-2 px-4 w-2/6 bg-zinc-100'>{product.quantity}</button>
    <button onClick={()=> increaseCartQuantity(product)} className='py-2 px-4 w-2/6 bg-zinc-300'>+</button>
  </div>
  )
}
