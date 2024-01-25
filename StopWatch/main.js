let time = document.querySelector("#time");

let seconds = 0;
let startInterval;
function startStopWatch() {
  clearInterval(startInterval);
  startInterval = setInterval(() => {
    seconds++;
    showTimer();
  }, 1000);
}
function stopStopWatch() {
  clearInterval(startInterval);
}
function resetStopWatch() {
  clearInterval(startInterval);
  seconds = 0;
  time.innerHTML = "00:00:00";
}

function showTimer() {
  let hrs = parseInt(seconds / 3600);
  let mins = parseInt((seconds / 60) % 60);
  let secs = parseInt(seconds % 60);

  time.innerHTML = `${hrs < 10 ? "0" + hrs : hrs}:${
    mins < 10 ? "0" + mins : mins
  }:${secs < 10 ? "0" + secs : secs}`;
}
