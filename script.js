var othercar = document.querySelector(".othercar")
var car = document.querySelector(".car");
var colors=["green","purple","red","white","lightblue"]
var scoreDOM = document.querySelector(".score");
var arrowRight = document.querySelector(".fa-arrow-right")
var arrowLeft = document.querySelector(".fa-arrow-left")
var score = 0;

scoreDOM.innerHTML = score;
var driveInt;

onkeydown=(e)=>{

    if(e.key === "ArrowLeft"){
        let left = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
        left -= 100;
        car.style.left=`${left}px`
    }

    if(e.key === "ArrowRight"){
        let left = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
        left += 100;
        car.style.left=`${left}px`
    }

    if(e.key === "ArrowUp"){
        let top = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
        top -= 100;
        car.style.top=`${top}px`
    }

    if(e.key === "ArrowDown"){
        let top = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
        top += 100;
        car.style.top=`${top}px`
    }
}



function driveCar(){
    othercar.style.display='flex'
    let top = parseInt(window.getComputedStyle(othercar).getPropertyValue('top'));

    testCollision()

    if(top < 600){
        let speed = (Math.random() * 150 | 0) + 50
        top+=speed
         console.log(speed)
        othercar.style.top = `${top}px`
    }



    else{
        score+=100;
        scoreDOM.innerHTML = score;
        if(Math.random() > .5){
        othercar.style.left=`${Math.random() * 100 | 0 + 50}px` 
        }
        else{
            othercar.style.left=`${Math.random() * 100 | 0 + 150}px` 

        }
        othercar.style.display='none'
        othercar.style.top = '0px'
        othercar.style.background=colors[Math.random() * colors.length | 0]
        // setTimeout(driveCar,500)

    }
}

driveInt = setInterval(driveCar,250)




function testCollision(){
    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"))
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
    let othercarTop = parseInt(window.getComputedStyle(othercar).getPropertyValue("top"))
    let othercarLeft = parseInt(window.getComputedStyle(othercar).getPropertyValue("left"))

    console.log("carTop: " + carTop)

    let topDif = Math.abs(othercarTop - carTop)
    let leftDif = Math.abs(othercarLeft - carLeft)

    if( topDif < 50 && leftDif < 100){
        console.log('collision!')
        othercar.classList.add('crash')
        car.classList.add('crashone')
        document.querySelector(".scoreh3").innerHTML = `Game Over!<br> Score:${score}`
        clearInterval(driveInt)
    }
}


arrowRight.onclick=()=>{
    console.log("arrowRight")
    let left = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
    left += 100;
    car.style.left=`${left}px`
}


arrowLeft.onclick=()=>{
    console.log('arrowLeft')
    let left = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
    left -= 100;
    car.style.left=`${left}px`
}
