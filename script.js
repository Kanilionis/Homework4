// set 10 minute timer
var minutesLeft = 10;
var currentTime = Date.parse(new Date());
var timerEnd = new Date(currentTime + minutesLeft*60*1000);

function countdown (endTime){
        var t = Date.parse(endTime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        return {'minutes':minutes, 'seconds':seconds};
}
function runClock(endTime){
    var timeInterval = setInterval(updateClock, 1000);
    var clock = document.getElementById("timer");
    function updateClock(){
        var t = countdown(endTime);
        clock.textContent = "0" + t.minutes + ":" + t.seconds;
        if(t.seconds === 0){
            clock.textContent = "0" + t.minutes + ":0" + t.seconds;
            clearInterval(timeInterval);
        } else if(t.seconds <10){
            clock.textContent = "0" + t.minutes + ":0" + t.seconds;
        }
    } 
};
    runClock(timerEnd);




        
 
