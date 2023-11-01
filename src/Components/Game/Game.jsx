import React ,{useEffect}from 'react'
import "./Game.css"
import { Helmet } from 'react-helmet'
import firstCar from "./png-transparent-red-sedan-car-door-car-seat-top-view-motor-vehicle-red-car-top-view-orange-car-seat-car-thumbnail-removebg-preview.png"
import myCar from "./mycar.png"
import yellowCar from "./yellowcar.png"
import kashefCar from "./kashefCar.png"
import grayCar from "./grayCar.png"
const Game = () => {
    let num=0
    let t=15
    let l=0
    // const startBtn = document.getElementById("start")
    window.addEventListener("keydown",function(x){
        if (x.keyCode==87){
            t=t-3
        }
        if (x.keyCode==65){
            l=l-1
        }
        if (x.keyCode==83){
            t=t+3
        }
        if (x.keyCode==68){
            l=l+1
        }
        document.getElementById("mycar").style.top=`${t}vh`
        document.getElementById("mycar").style.left=`${l}vw`
    })
    // startBtn.style.display=`none`
    
useEffect(() => {
   
    document.getElementById("start").addEventListener("click",function(){
        console.log('aaaa');
        document.getElementById("start").style.display=`none`
        // document.getElementById("roda").style.display='none'
        document.getElementById("road").style.animation=`roadanimation 20s linear infinite`
        
        setInterval(()=>{
            num=Math.floor(Math.random()*(350-230+1)+230)
            
            document.getElementById("enemycar1").style.left=`${num}px`
            // console.log(num);
        },3000)
    
    document.getElementById("enemycar1").style.animation=`ecar1 3s linear infinite`
    document.getElementById("enemycar2").style.animation=`ecar2 6s linear infinite`
    document.getElementById("enemycar3").style.animation=`ecar3 5s linear infinite`
    document.getElementById("enemycar4").style.animation=`ecar4 4s linear infinite`
    })
    
    
}, [])

// document.getElementById("start").addEventListener("click",function(){
//         document.getElementById("road").style.animation=`roadanimation 20s linear infinite`
        
//         setInterval(()=>{
//             num=Math.floor(Math.random()*(350-230+1)+230)
//             document.getElementById("ecarimg1").style.left=`${num}px`
//         },3000)  

//     document.getElementById("enemycar1").style.animation=`ecar1 3s linear infinite`
//     document.getElementById("enemycar2").style.animation=`ecar2 6s linear infinite`
//     document.getElementById("enemycar3").style.animation=`ecar3 4s linear infinite`
//     document.getElementById("enemycar4").style.animation=`ecar4 5s linear infinite`
//   })
        
  
    return (
        <div id='gamePage'>
        <Helmet>
        <script src="./gamees.js"></script>
        </Helmet>
        {/* <script src='./Game.js'></script> */}
        <div id='score'>Score : 0</div>
        <button id='start'>Start</button>
        <div>
            <div id='enemycar1'><img id='ecarimg1' src={firstCar} className='ecarimg'/> </div>
            <div id='enemycar2'><img id='ecarimg2' src={kashefCar} className='ecarimg'/> </div>
            <div id='enemycar3'><img id='ecarimg3' src={yellowCar} className='ecarimg'/> </div>
            <div id='enemycar4'><img id='ecarimg4' src={grayCar} className='ecarimg'/> </div>
        </div>
        <div id='mycar'>
            <img id='mycarimg' src={myCar} className='ecarimg'/>
        </div>
        <div id='road'></div>
            
    </div>
  )
}

export default Game