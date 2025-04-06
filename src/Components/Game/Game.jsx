import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Game.css"
import grayCar from "./grayCar-removebg-preview.png"
import kashefCar from "./kashefCar-removebg-preview.png"
import myCar from "./mycar-removebg-preview.png"
import firstCar from "./png-transparent-red-sedan-car-door-car-seat-top-view-motor-vehicle-red-car-top-view-orange-car-seat-car-thumbnail-removebg-preview-removebg-preview.png"
import yellowCar from "./yellowcar-removebg-preview.png"
const Game = () => {
    const navigate=useNavigate()
    let num=0
    let t=15
    let l=0
    // const startBtn = document.getElementById("start")
    window.addEventListener("keydown",function(x){
        if (x.keyCode==38){
            t=t-3
        }
        if (x.keyCode==37){
            l=l-1
        }
        if (x.keyCode==40){
            t=t+3
        }
        if (x.keyCode==39){
            l=l+1
        }
        document.getElementById("mycar").style.top=`${t}vh`
        document.getElementById("mycar").style.left=`${l}vw`
    })
    // startBtn.style.display=`none`
    
useEffect(() => {
   
    document.getElementById("start").addEventListener("click",function(){
        console.log('aaaa');
        document.getElementById("start").style.display='none'
        document.getElementById("road").style.animation='roadanimation 20s linear infinite'
        
        setInterval(()=>{
            num=Math.floor(Math.random()*(350-230+1)+230)
            
            document.getElementById("enemycar1").style.left=`${num}px`
            // console.log(num);
        },3000)
        setInterval(()=>{
            num=Math.floor(Math.random()*(150-50+1)+50)
            
            document.getElementById("enemycar2").style.left=`${num}px`
            // console.log(num);
        },6000)
        setInterval(()=>{
            num=Math.floor(Math.random()*(-50+140+1)-140)
            
            document.getElementById("enemycar3").style.left=`${num}px`
            // console.log(num);
        },5000)
        setInterval(()=>{
            num=Math.floor(Math.random()*(-220+330+1)-330)
            
            document.getElementById("enemycar4").style.left=`${num}px`
            // console.log(num);
        },4000)
    
    document.getElementById("enemycar1").style.animation=`ecar1 3s linear infinite`
    document.getElementById("enemycar2").style.animation=`ecar2 6s linear infinite`
    document.getElementById("enemycar3").style.animation=`ecar3 5s linear infinite`
    document.getElementById("enemycar4").style.animation=`ecar4 4s linear infinite`
    let n=0
    setInterval(()=>{
        document.getElementById("score").innerText=`Score : ${n}`
        n=n+1

        let car1left=Math.abs(document.getElementById("ecarimg1").getBoundingClientRect().left)
        let car1right=Math.abs(document.getElementById("ecarimg1").getBoundingClientRect().right)
        let car1top=Math.abs(document.getElementById("ecarimg1").getBoundingClientRect().top)
        let car1bottom=Math.abs(document.getElementById("ecarimg1").getBoundingClientRect().bottom)
    
        
        let car2left=Math.abs(document.getElementById("ecarimg2").getBoundingClientRect().left)
        let car2right=Math.abs(document.getElementById("ecarimg2").getBoundingClientRect().right)
        let car2top=Math.abs(document.getElementById("ecarimg2").getBoundingClientRect().top)
        let car2bottom=Math.abs(document.getElementById("ecarimg2").getBoundingClientRect().bottom)
    
        
        let car3left=Math.abs(document.getElementById("ecarimg3").getBoundingClientRect().left)
        let car3right=Math.abs(document.getElementById("ecarimg3").getBoundingClientRect().right)
        let car3top=Math.abs(document.getElementById("ecarimg3").getBoundingClientRect().top)
        let car3bottom=Math.abs(document.getElementById("ecarimg3").getBoundingClientRect().bottom)
    
        
        let car4left=Math.abs(document.getElementById("ecarimg4").getBoundingClientRect().left)
        let car4right=Math.abs(document.getElementById("ecarimg4").getBoundingClientRect().right)
        let car4top=Math.abs(document.getElementById("ecarimg4").getBoundingClientRect().top)
        let car4bottom=Math.abs(document.getElementById("ecarimg4").getBoundingClientRect().bottom)
    
        let myCarLeft=Math.abs(document.getElementById("mycarimg").getBoundingClientRect().left)
        let myCarRight=Math.abs(document.getElementById("mycarimg").getBoundingClientRect().right)
        let myCarTop=Math.abs(document.getElementById("mycarimg").getBoundingClientRect().top)
        let myCarBottom=Math.abs(document.getElementById("mycarimg").getBoundingClientRect().bottom)
        if (((car1left<myCarLeft&& myCarLeft<car1right)||(car1left<myCarRight&&myCarRight<car1right))&&((car1top<myCarTop&&myCarTop<car1bottom)||(car1top<myCarBottom&&myCarBottom<car1bottom)) ||((car2left<myCarLeft&& myCarLeft<car2right)||(car2left<myCarRight&&myCarRight<car2right))&&((car2top<myCarTop&&myCarTop<car2bottom)||(car2top<myCarBottom&&myCarBottom<car2bottom)) ||((car3left<myCarLeft&& myCarLeft<car3right)||(car3left<myCarRight&&myCarRight<car3right))&&((car3top<myCarTop&&myCarTop<car3bottom)||(car3top<myCarBottom&&myCarBottom<car3bottom)) ||((car4left<myCarLeft&& myCarLeft<car4right)||(car4left<myCarRight&&myCarRight<car4right))&&((car4top<myCarTop&&myCarTop<car4bottom)||(car4top<myCarBottom&&myCarBottom<car4bottom))||(myCarTop<20||myCarBottom>690||myCarRight>1170||myCarLeft<150) ){
            setTimeout(()=>{
                alert("Game Over")
            })
            location.reload()
        }
        })
    },1000)
    
    
}, [])

  
    return (
        <div id='gamePage'>
        {/* <script src='./Game.js'></script> */}
        <div id='score'>Score : 0</div>
        <button onClick={()=>{navigate("/")}} id='homePageButton'>Home Page</button>
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