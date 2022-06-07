// includes

// Defining constants
const decayPerMinute = 0.0347; 	        	// 0.0347222222222222222... *1440 (mins per day) = 50, this means losing 50% energy per day

// Initializing variables
var timePassing;
var mentalDecayTimer;
var physicalDecayTimer;
var inputCheck;
var timerCountdown;

// Starting values
var emailsUnread = true;		        	// Are there unread emails?
var emailsUnreadNumber = 1;	        		// How many emails are unread?
var emailsList = new Array(emailsUtilities['electricityWeek1']);		// Array of all emails the user has received
var electricityOn = true;		        	// Can get turned off when the user misses payments
var headlineCount = 0;			        	// Variable to cycle through the headlines for the day when displaying
var numberHotMeals = 4;
var numberColdMeals = 6;
var numberSnacks = 8;
var isFirstJobDone = false;

// Initializing Objects
var hotmeal = new Object();
hotmeal.title = 'A nice, hot filling meal';
hotmeal.nutrition = 40;			        	// How much physical energy gets added on consumption
hotmeal.decay = 1;				        	// How many days before one item gets subtracted in case electricity gets turned off
hotmeal.price = 5;
var coldmeal = new Object();
coldmeal.title = 'A delicious brunch, ready anytime';
coldmeal.nutrition = 30;
coldmeal.decay = 4;
coldmeal.price = 3.40;
var snack = new Object();
snack.title = 'A quick Pick-me-up';
snack.nutrition = 10;
snack.decay = 21;
snack.price = 1.20;
var activeJob = new Object();

// Initializing Player
var player = new Object();
player.name = 'Marty McFly';		        // Gonna be replaced immediately by the Player Creation dialogue
player.level = 1;
player.week = 1;
player.weekday = 'Monday';
player.day = 1;
player.hour = 8;
player.minute = 0;
player.time = '8:00am';
player.contacts = new Array(contacts[0], contacts[3]);
player.fame = 0;
player.fans = 0;
player.mental = 80;                         // Well-rested after sleep
player.physical = 50;                       // Hungry and needs food
player.cashshop = 25;                       // Starting currency for possible Cash-Shop, included so the HUD-Design can implement it
player.money = 100.00;
player.skill = 'Male Singer';				// Gonna be replaced immediately by the Player Creation dialogue
player.experience = 0;

// Build HUD and start time calculations
buildHud();
timePassing = window.setInterval(buildHud, 15000); // Every 15 sec the HUD will be reloaded -> time passes four times as fast as IRL
physicalDecayTimer = window.setInterval(physicalDecay, 15000);
mentalDecayTimer = window.setInterval(mentalDecay, 15000);


// Waiting for media to be loaded, then load first scene (Livingroom)
window.addEventListener('load', function(){buildLivingRoom(document.getElementById('Spielfeld'))});

// Load Character Creation Dialogue
loadPage1(); 