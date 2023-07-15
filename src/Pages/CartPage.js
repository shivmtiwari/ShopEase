import React from 'react'
import CartItems from '../Components/CartItems'
import CartTotal from '../Components/CartTotal'

const CartPage = () => {
  return (
    <div className='CartPage'>
      <CartItems/>
      {/* <CartTotal/> */}
    </div>
  )
}

export default CartPage