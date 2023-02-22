import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format'
function Total() {
  return (
    <div className='total'>
      <CurrencyFormat
      renderText={(value)=>(
        <div>
            <p>Subtotal (0 items):<strong>0</strong></p>
            <small className='t-gift'>
                <input type="checkbox" />  This order contains a gift
            </small>
        </div>
      )}
      decimalScale={2}
      value={0}
      displayType={"text"}
      thousandSeparator={true}
      prefix={'$'}
      />
      <button className='t-btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Total
