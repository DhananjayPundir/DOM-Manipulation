
const start = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let secs = 0;
let mins = 0;
let hours = 0;
let leadsec = 0;
let leadmin = 0;
let leadhour = 0;
let timer = null; 
let timerStatus = "stopped";

function stopwatch() {
    secs++;
    if (secs / 60 === 1) {
        secs = 0;
        mins++;
        if (mins / 60 === 1) {
            mins = 0;
            hours++;
        }
    }
    if (secs < 10) {
        leadsec = "0" +secs.toString();
    } else {
        leadsec = secs;
    }
    if (mins < 10) {
        leadmin = "0" +mins.toString();
    } else {
        leadmin = mins;
    }
    if (hours < 10) {
        leadhour = "0" +hours.toString();
    } else {
        leadhour = hours;
    }
    let display = document.getElementById('timer').innerText = leadhour + ":" + leadmin + ":" + leadsec;
}

start.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timer = window.setInterval(stopwatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timer);    
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timer);
    secs = 0;
    mins = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
});
