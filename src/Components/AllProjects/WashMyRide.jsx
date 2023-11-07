import React from 'react'
import "./KhalekBdarak.css"
import homePageWashMyRide from "./washMyRideHomePage.png"
import registerPageWashMyRide from "./washMyRideRegisterPage.png"
import loginPageWashMyRide from "./washMyRideLoginPage.png"
import accessoryPageWashMyRide from "./washMyRideAccessoryPage.png"
import checkOutPageWashMyRide from "./washMyRideCheckOutPage.png"
import locationPageWashMyRide from "./washMyRideSetLocationPage.png"
import confirmationPageWashMyRide from "./washMyRideConfirmationPage.png"
import cartPageWashMyRide from "./washMyRideCartPage.png"
import adminDashBoardPageWashMyRide from "./washMyRideAdminDashBoardPage.png"
const WashMyRide = () => {
  return (
    <div className='khalekbdarakDiv'>
      <h1 className='khalekBdarakHeader'>Wash My Ride</h1>
      <p className='khalekBdarakParagraph'>A webSite that represent services and accessories for cars ,client can order his serviece and add accessories for his order ,then he has to confirm the time and location soo that the employee will come for him in the time.<br/>Also the website has an admin dashboard ,soo the admin account will be able to add services and accessoriesand admins. <br/>Also he will get the orders to set the employees for every order.</p>
      <section className='sliderContainer'>
        <div className='slider-wrapper'>
          <div className='slider'>
            
            <img id='slider-1' src={homePageWashMyRide}/>
            <img id="slider-2" src={registerPageWashMyRide}/>
            <img id="slider-3" src={loginPageWashMyRide}/>
            <img id="slider-4" src={accessoryPageWashMyRide}/>
            <img id="slider-5" src={checkOutPageWashMyRide}/>
            <img id="slider-6" src={locationPageWashMyRide}/>
            <img id="slider-7" src={confirmationPageWashMyRide}/>
            <img id="slider-8" src={cartPageWashMyRide}/>
            <img id="slider-9" src={adminDashBoardPageWashMyRide}/>
              
            
          </div>
          <div className='slider-nav'>
            <a href='#slider-1'></a>
            <a href='#slider-2'></a>
            <a href='#slider-3'></a>
            <a href='#slider-4'></a>
            <a href='#slider-5'></a>
            <a href='#slider-6'></a>
            <a href='#slider-7'></a>
            <a href='#slider-8'></a>
            <a href='#slider-9'></a>
            
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default WashMyRide