
function toss(params) {
 
var r1= Math.floor(Math.random()*2+1)




//images 1 dice//
if (r1===1) {
    document.querySelector("h1").innerHTML="HEAD";
}
else{
    document.querySelector("h1").innerHTML="TAIL";
}

var r1i = "images/dice"+r1+".png";
document.querySelector(".img1").setAttribute("src",r1i);
}




document.querySelector("button").addEventListener("click",mouseC)
function mouseC() {
    document.querySelector(".text").classList.add("fade")
    document.querySelector(".img1").classList.add("ani")
    var audio = new Audio('sounds/coinflip.mp3')
    audio.play()
    setTimeout(fade,500) 
    function fade() 
        {
        
        document.querySelector(".img1").classList.remove("ani")
        document.querySelector(".text").classList.remove("fade")
        
        }
}