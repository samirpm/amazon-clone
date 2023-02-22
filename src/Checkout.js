import React from 'react'
import './Checkout.css'
import Total from './Total'
function Checkout() {
  return (
    <div className='checkout'>
        <div className="c-left">
            <img className='c-img' src="https://s0.2mdn.net/simgad/17230010273190974630" alt="" />
            <div className='c-title'>
                <h2>Your Shopping Cart</h2>
            </div>
        </div>
        <div className="c-right">
            <Total/>
        </div>
    </div>
  )
}

export default Checkout
