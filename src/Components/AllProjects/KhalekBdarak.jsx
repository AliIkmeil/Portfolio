import React from 'react'
import "./KhalekBdarak.css"
import homePageKhalekBdarak from "./homePageKhalekBdarak.png"
import registerPageKhalekBdarak from "./registerPageKhalekBdarak.png"
import loginPageKhalekBdarak from "./loginPageKhalekBdarak.png"
import productPageKhalekBdarak from "./productsPageKhalekBdara.png"
import cartPageKhalekBdarak from "./productPageKhalekBdarak.png"
import paymentPageKhalekBdarak from "./PaymentPageKhalekBdarak.png"
const KhalekBdarak = () => {
  return (
    <div className='khalekbdarakDiv'>
      <h1 className='khalekBdarakHeader'>Khalek Bdarak SuperMarket</h1>
      <p>An E-Commerce webSite thats provides all the super market products in a sorted categories ,Firstly you have to register and login to your main account to procced to add you products in your cart ,after adding the products to your cart you have to checkout and save your credit card information ,Soo that the product will be delivered for you in few hours.</p>
      <section className='sliderContainer'>
        <div className='slider-wrapper'>
          <div className='slider'>
            
            <img id='slider-1' src={homePageKhalekBdarak}/>
            <img id="slider-2" src={registerPageKhalekBdarak}/>
            <img id="slider-3" src={loginPageKhalekBdarak}/>
            <img id="slider-4" src={productPageKhalekBdarak}/>
            <img id="slider-5" src={cartPageKhalekBdarak}/>
            <img id="slider-6" src={paymentPageKhalekBdarak}/>
            
            
          </div>
          <div className='slider-nav'>
            <a href='#slider-1'></a>
            <a href='#slider-2'></a>
            <a href='#slider-3'></a>
            <a href='#slider-4'></a>
            <a href='#slider-5'></a>
            <a href='#slider-6'></a>
            
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default KhalekBdarak