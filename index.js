let [milliSeconds, seconds, minutes]= [0,0,0];
let displayTime = document.getElementById("dislayTime");
let timer=null;

function stopwatch() {
  milliSeconds++;
  if(milliSeconds == 60) {
    milliSeconds =0;
    seconds++;
    if(seconds==60) {
      seconds=0;
      minutes++;
    }
  }
  let m= minutes<10 ?"0"+minutes : minutes;
  let s= seconds<10 ?"0"+seconds : seconds;
  let ms= milliSeconds<10 ?"0"+milliSeconds : milliSeconds;


  displayTime.innerHTML=m + ":" + s + ":" + ms;
}

function watchStart() {
  if(timer!=null){
    clearInterval(timer);
  }
  timer= setInterval(stopwatch,10);
}

function watchStop(){
  clearInterval(timer);

}
function watchReset() {
  clearInterval(timer);
  [milliSeconds,seconds, minutes]= [0,0,0];
  displayTime.innerHTML= "00:00:00";
}