//digital clock

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
}

setInterval(showTime, 1000);


//Analog clock
setInterval(function(){
  var date = new Date();
  updateClock(date);
}, 1000);

function updateClock(date){
  var secHand = document.getElementById("sec-hand").style;
  var minHand = document.getElementById("min-hand").style;
  var hrHand = document.getElementById("hr-hand").style;
  
  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}


//stopwatch
var h1 = document.getElementsByTagName("h1")[3],
  start = document.getElementById("start"),
  stop = document.getElementById("stop"),
  clear = document.getElementById("clear"),
  seconds = 0,
  minutes = 0,
  hours = 0,
  t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  h1.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 1000);
  start.disabled = true;
}

// Start button 
start.onclick = timer;

// Stop button 
stop.onclick = function() {
  clearTimeout(t);
  start.disabled = false;
};

//  Clear button 
clear.onclick = function() {
  clearTimeout(t);
  h1.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  start.disabled = false;
};


//timer
function tmr() {
  if (sec <= 0 && min <= 0 && hour <= 0) {
    alert("time over");
    clearInterval(interval);
    return;
  }

  if (sec == 0) {
    if (min == 0) {
      hour--;
      min = 60;
    }
    min--;
    sec = 60;
  }

  sec--;

  document.getElementById(
    "demo"
  ).textContent =
  (hour ? (hour > 9 ? hour : "0" + hour) : "00") +
  ":" +
  (min ? (min > 9 ? min : "0" + min) : "00") +
  ":" +
  (sec > 9 ? sec : "0" + sec);


}

//start stop button
var but = document.getElementById("spst");
but.disabled = true;

function funtmr() {
  sec = document.getElementById("sec").value;
  min = document.getElementById("min").value;
  hour = document.getElementById("hr").value;
  but.disabled = false;
  // console.log(sec,min,hour)
  interval = setInterval(tmr, 1000);
}

var c = 0;
function funstoptmr() {
  if (c % 2 == 0) {
    clearInterval(interval);
    but.innerText = "start";
  } else {
    interval = setInterval(tmr, 1000);
    but.innerText = "stop";
  }
  c++;
}


// alarm
function alrm() {
  alarm = document.getElementById("alarm").value;
  value=document.getElementById("alrmsg").value;
  time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();

  // console.log(hr + ":" + min);

  currentTime = hr + ":" + min;
  if (alarm == currentTime) {
    alert(value);
    clearInterval(alr);
    button.innerText = "Alarm On"
  }

}

var funalr = () => {
  button = document.getElementById("alarmbt");
  if(button.innerText == "Alarm On"){
    alr = setInterval(alrm, 1000);
    button.innerText="Alarm Off"
  }
  else{
    clearInterval(alr);
    button.innerText="Alarm On"
  }
};
