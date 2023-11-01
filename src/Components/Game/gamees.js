 document.getElementById("start").addEventListener("click",function(){
    document.getElementById("road").style.animation=`roadanimation 20s linear infinite`
    
    setInterval(()=>{
        num=Math.floor(Math.random()*(350-230+1)+230)
        document.getElementById("ecarimg1").style.left=`${num}px`
    },300)

document.getElementById("enemycar1").style.animation=`ecar1 3s linear infinite`
document.getElementById("enemycar2").style.animation=`ecar2 6s linear infinite`
document.getElementById("enemycar3").style.animation=`ecar3 5s linear infinite`
document.getElementById("enemycar4").style.animation=`ecar4 4s linear infinite`
})
