let [millSec ,Sec ,  Min , Hours ] = [0,0,0,0]
let displayTime = document.getElementById("displayTime");
let timer =null;
function StopWatch(){
    millSec++
    if(millSec === 60){
        millSec =0;
        Sec++;
        if(Sec === 60){
            Sec = 0;
            Min++
            if(Min === 60){
                Min =0;
                Hours++;
            }
        }
    }
    let h = Hours <10 ? "0" + Hours : Hours;
    let m = Min <10 ? "0" + Min : Min;
    let s = Sec<10 ? "0" + Sec : Sec;
    let ms = millSec<10 ? "0" + millSec : millSec;
    displayTime.innerHTML = h +":"+ m + ":" + s + ":" + ms;
}
function WatchStart(){
    if(timer !==null){
        clearInterval(timer)
    }
  timer = setInterval(StopWatch , 100 )
}
function WatchStop(){
    clearInterval(timer)
}
function Reset(){
    clearInterval(timer);
    [millSec ,Sec ,  Min , Hours ] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00:00";
}