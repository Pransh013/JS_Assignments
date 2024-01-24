let time = document.querySelector('#time');
let ampm = document.querySelector('#ampm');
let format = document.querySelector('#format');

function digitalClock() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();



  if (format.value == 24) {
    ampm.innerHTML = "";
  } else {
    if(hrs > 12) ampm.innerHTML = "PM"
    else ampm.innerHTML = "AM"
  }

    if (format.value == 12) {
      hrs = hrs > 12 ? hrs - 12 : hrs;
    }

  time.innerHTML = `${hrs < 10 ? "0" + hrs : hrs}:${
    mins < 10 ? "0" + mins : mins
  }:${secs < 10 ? "0" + secs : secs}`;

  setTimeout(digitalClock, 1000);
}

digitalClock();