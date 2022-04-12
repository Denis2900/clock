let hours
if(new Date().getHours()>12){
    hours = (Math.abs(12 - new Date().getHours())*1800)+new Date().getMinutes()*30;
}
else{
    hours = (new Date().getHours()*1800)+new Date().getMinutes()*30;
}
let minutes = new Date().getMinutes()*6;;
let seconds = new Date().getSeconds()*6
let secondsArrow = document.querySelector('.seconds_arrow')
let minutesArrow = document.querySelector('.minutes_arrow')
let hoursArrow = document.querySelector('.hours_arrow')
let interval = setInterval(getTime,1000)
function getTime(){
    seconds+=6
    minutes+=0.1
    hours+=0.5
    if(seconds === 360){
        seconds = 0
    }
    if(minutes === 1800){
        minutes = 0
    }
    if(hours === 86400){
        hours = 0
    }
    minutesArrow.style.transform = `rotate(${minutes}deg)`
    secondsArrow.style.transform = `rotate(${seconds}deg)`
    hoursArrow.style.transform = `rotate(${hours/60}deg)`
}
