// MODAL
let modal = document.getElementById("modalContainer");
let btnNew = document.getElementById("btnNew");
let goButton = document.getElementById("goButton");

btnNew.onclick = function() {
	modal.style.display = "block";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

goButton.onclick = function() {
	timerRunning = true;
};

let timerMin = document.getElementById("timerMin");
let timerSec = document.getElementById("timerSec");
let minutes;
let seconds = 59;
let workTime = document.getElementById("workTime");
let breakTime = document.getElementById("breakTime");
let timerRunning = false;

while(timerRunning == true) {
	// working time
	if(workTime.value == 15) {
		minutes = 15;
		runTimer(minutes, seconds);
	} else if (workTime.value == 20) {
		minutes = 20;
		runTimer(minutes, seconds);
	} else {
		minutes = 25;
		runTimer(minutes, seconds);
	}

	// break time
	if(breakTime.value == 5) {
		minutes = 5;
		runTimer(minutes, seconds);
	} else {
		minutes = 10;
		runTimer(minutes, seconds);
	}
}

function runTimer(minutes, seconds){
	// set timer for chosen time
	timerMin.innerHTML = minutes;

	// start countdown after 0.5 seconds
	setTimeout(() => {
		timerMin.innerHTML = minutes--;
		timerSec.innerHTML = seconds;
	}, "500");

	// timer running
	const intervalID = setInterval(() => {
		seconds--;
		timerSec.innerHTML = seconds;

		if(seconds == 0) {
			minutes--;
			timerSec.innerHTML = "00";
			timerMin.innerHTML = minutes;

			if (minutes != 0) {
				setTimeout (() => {
					seconds = 59;
					timerSec.innerHTML = seconds;
				}, "1000");
			} else {
				// play ending sound and start break time

				clearInterval(intervalID);
			}

		}

	}, "1000");

}



// end MODAL

