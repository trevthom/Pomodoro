// MODAL
let modal = document.getElementById("modalContainer");
let btnAdd = document.getElementById("btnNew");

btnAdd.onclick = function() {
	modal.style.display = "block";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

let timerMin = document.getElementById("timerMin");
let timerSec = document.getElementById("timerSec");
let minutes;
let seconds = 59;
let workTime = document.getElementById("workTime");
let breakTime = document.getElementById("breakTime");

if(workTime.value == 15) {
	minutes = 15;
	setTimer(minutes, seconds);

} else if (workTime.value == 20) {
	minutes = 20;
	setTimer(minutes, seconds);
} else {
	minutes = 25;
	setTimer(minutes, seconds);
}

/*
function setTimer(minutes, seconds){
	// set timer for chosen time
	timerMin.innerHTML = minutes;
	timerSec.innerHTML = seconds;

	// start countdown after 0.5 seconds
	setTimeout(() => {
		timerMin.innerHTML = minutes--;
		timerSec.innerHTML = 59;
	}, "500");

	setInterval(() => {
		timerSec.innerHTML = seconds;
		seconds--;

		// correct the display for timerSec == 0
		if(seconds == 0) {
			timerSec.innerHTML = "00";
		}
	}, "1000");
}
*/

if(breakTime.value == 5) {

} else {

}
// end MODAL

