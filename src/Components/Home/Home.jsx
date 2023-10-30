import React from 'react'
import NavBar from "../NavBar/NavBar"
import "./Home.css"
const Home = () => {
  return (<div className='container'>
    
    <div className='wrapper'>
        <div className='cols cols0'>
            <span className='topline'>Hello</span>
            <h1 className='esme'>I'm <span className='multiText'>Ali Ikmeil</span></h1>
            <p className='descreption'>Ana saffaaa</p>
            <div className='btns'>
                <button className='homeButtons'>Download CV</button>
                <button className='homeButtons'>Contact me</button>
            </div>
        </div>
            <div className='cols cols1'>
                <div className='imgbox'>
                    <img src='https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww' id='splash'/>
                    <img src='https://scontent.famm8-1.fna.fbcdn.net/v/t1.15752-9/370090192_820662176469903_8616237447967342595_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEJrB31RRZGxMD8Hy1sXr36OCOoBVMOZWI4I6gFUw5lYnldJDDzxfilfRXvbE8uFmVD1mzGeyG7DHVvWYriht-k&_nc_ohc=MQ3Z1-j575YAX9Vx6FQ&_nc_ht=scontent.famm8-1.fna&oh=03_AdSf7ZYAL7z7zO6yB2qMZ-jNMQgiX76SWWHsgBCROStHcw&oe=65677E4E'/>
                </div>
            </div>
    </div>
  </div>
    
    )
}

export default Home