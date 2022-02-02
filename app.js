let daysEle    = document.querySelector('.Days-timer');
let HoursEle   = document.querySelector('.Hours-timer');
let MinutesEle = document.querySelector('.min-timer');
let secondsEle = document.querySelector('.sec-timer');
//  ## Get Date in MillSecond
let Countdown  = new Date("Dec 08 ,2022 24:00:00").getTime();

console.log(Countdown);

window.onload= TIMER;

function TIMER (){
    setInterval(()=>{

    let dateNow = new Date().getTime()
    let gap = Countdown - dateNow;
    
    let sec  = 1000 ;
    let min  = sec  * 60 ;
    let hour = min  * 60  ;
    let day  = hour * 24 ;
    // console.log(sec + " "+min+ " "+" "+hour+" "+day);

    var countDay  = Math.floor( gap / day );
    var countHour = Math.floor( (gap % day)  / hour );
    var countMinut= Math.floor( (gap % hour) / min );
    var countSec  = Math.floor( (gap %  min) / sec );
    
    daysEle    .textContent = countDay   ;
    HoursEle   .textContent = countHour  < 10 ? `0${countHour}` : countHour ;
    MinutesEle .textContent = countMinut < 10 ? `0${countMinut}` : countMinut;
    secondsEle .textContent = countSec   < 10 ? `0${countSec}` : countSec;
    
    // console.log('time noew is : '+ countDay + ":" + countHour +":"+ countMinut+":"+countSec);
},1000)
}

