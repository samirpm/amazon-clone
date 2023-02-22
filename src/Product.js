import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,price,image,rating}) {
  const[{basket},dispatch]=useStateValue()
  console.log(basket);
  const addtocart =()=>{
        dispatch({
          type:'Add_to_cart',
          item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
          }
        })
  }
  return (
    <div className='product'>
        <div className="pro-info">
            <p>{title}</p>
            <p className="pro-price">
                <small>$ </small>
                <strong>{price}</strong>
            </p>
            <div className="pro-rating">
                {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addtocart}>Add to Cart</button>
    </div>
  )
}

export default Product
