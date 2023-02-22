import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className="ho-container">
                <img className='ho-img' src="https://m.media-amazon.com/images/I/71Pm2QoyYPL._SX3000_.jpg" alt="" />
                <div className="ho-row">
                    <Product 
                    title='ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming'
                    price={450.44}
                    image="https://m.media-amazon.com/images/I/41YNwaJ91TL._AC_SY200_.jpg"
                    rating={4}
                    />
                     <Product
                    title='Redmi 108 cm (43 inches) Android 11 Series Full HD Smart LED TV L43M6-RA/L43M7-RA (Black)'
                    price={260.98}
                    image='https://m.media-amazon.com/images/I/71g3OF4CL9L._SL1500_.jpg'
                    rating={4}
                     />
                   
                     
                </div>
                <div className="ho-row">
                    <Product
                    title='Apple iPhone 14 Pro 1TB Deep Purple'
                    price={652.90}
                    image="https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg"
                    rating={5}  
                    />
                    <Product
                    title='2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display'
                    price={730.43}
                     image='https://m.media-amazon.com/images/I/710TJuHTMhL._SL1500_.jpg'
                     rating={5}
                     />
                    <Product
                    title='
                    Samsung Galaxy S22 Plus 5G (Phantom Black, 8GB, 256GB Storage)'
                    price={250.65}
                    image='https://m.media-amazon.com/images/I/71WdFQHjDwL._SL1500_.jpg'
                    rating={3}
                     />

                </div>
                <div className="ho-row">
                <Product
                    title='OnePlus 138.8 cm (55 inches) With Sliding Soundbar Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)'
                    price={375.00}
                    image='https://m.media-amazon.com/images/I/41WE9ZGEC4L._AC_UF226,226_FMjpg_.jpg'
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
