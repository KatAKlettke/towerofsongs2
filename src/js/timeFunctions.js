// Mental Energy Decay
function mentalDecay() {
	player.mental = player.mental - decayPerMinute;
}

// Physical energy Decay
function physicalDecay() {
	player.physical = player.physical - decayPerMinute;
}

// Calculating Weeks and Weekdays
function calculateWeekday() {
	let weekdayNumber = player.day % 7;
	let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	player.weekday = daysOfWeek[weekdayNumber];
	player.week = parseInt((player.day-1)/7+1);	
}

// Calculating minutes
function calcMinsHours() {
	// If the minute is 59, change the hour
	if (player.minute == 59) {
		// If the hour is 23, change the day
		if (player.hour == 23) {
			player.day++;
			// and reset the hour to 0
			player.hour = 0;
		}
		// If the hour is less than 23, count the hour up
		else {
			player.hour++;
		}
		// Set the minutes to zero (still in the minute 59 branch here)
		player.minute = 0;
	}
	// If the mintue is lower than 59, count the minutes up
	else {
		player.minute++;
	}

}

function startingDay() {
	let startingWeekday = player.weekday;
	let startingWeek = player.week;
	// If the weekday changed during the calculations, generate new daily headlines
	// Once this game runs on servers, these will have to be generated server-side, to make sure the tags are right for every player!
	// Tags will only be generated once per real-time day then
	if (startingWeekday != player.weekday) {
		selectDailyHeadlines(neutralHeadlines, tags);
		if (isFirstJobDone) {
			pickCurrentJobs();
		}
	}
	if (startingWeek != player.week){
		sendBill();
	}
}

// Calculating time
function calcTime() {
	calcMinsHours();
	// Calculating day of week
	calculateWeekday();
	// Create display time (Weekday, HH:MMam/pm)
	// AM display
	if (player.hour < 12){
		if (player.minute < 10) {
			player.time = player.hour + ':0' + player.minute + 'am';
		}
		else {
			player.time = player.hour + ':' + player.minute + 'am';
		}
	}
	// If it's past noon, switch to PM but dont subtract 12 yet
	else if (player.hour == 12){
				if (player.minute < 10) {
			player.time = player.hour + ':0' + player.minute + 'pm';
		}
		else {
			player.time = player.hour + ':' + player.minute + 'pm';
		}
	}
	// PM display
	else {
		if (player.minute < 10) {
			player.time = player.hour - 12 + ':0' + player.minute + 'pm';
		}
		else {
			player.time = player.hour - 12 + ':' + player.minute + 'pm';
		}
	}
	startingDay();
	displayTime();
}

