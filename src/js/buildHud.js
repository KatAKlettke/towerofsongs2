function buildHud() {
	//Check for unread emails first
	checkUnreadEmails();
	// Check for possible levelup
	isLeveledUp();
	// Get the HUD-element to replace in the end
	let hud = document.getElementById('Hud');
	// Create the HUD div to replace the previous hud-node and add the necessary ID
	let hudDiv = document.createElement('div');
	hudDiv.id = 'Hud';
	// Create the visual elements of the HUD with their respective IDs
	// Profile picture container
	let profileDiv = document.createElement('div');
	profileDiv.id = 'Profile';
	let profileImg = document.createElement('img');
	profileImg.src = 'https://loremflickr.com/100/100';
	profileImg.alt = 'Profile picture';
	profileDiv.appendChild(profileImg);
	// Add EventListener for the Character details
	profileDiv.addEventListener('click', function() {openAvatarDetails()});
	// Name and level display
	let nameContainerDiv = document.createElement('div');
	nameContainerDiv.id = 'Name';
	let nameContainerP1 = document.createElement('p');
	let userNameDisplay = document.createTextNode(player.name);
	nameContainerP1.appendChild(userNameDisplay);
	let nameContainerP3 = document.createElement('p');
	let userMoneyText = document.createTextNode('Current Balance: ' + player.money.toFixed(2) + '$');
	nameContainerP3.appendChild(userMoneyText);
	let nameContainerP4 = document.createElement('p');
	let userCashshopText = document.createTextNode('Shop Currency: ');
	let userCashshopDisplaySpan = document.createElement('span');
	userCashshopDisplaySpan.classList.add('symbole');
	let userCashshopDisplaySpanSymbol = document.createTextNode(' ');
	let userCashshopDisplayValue = document.createTextNode(player.cashshop);
	userCashshopDisplaySpan.appendChild(userCashshopDisplaySpanSymbol);
	nameContainerP4.appendChild(userCashshopText);
	nameContainerP4.appendChild(userCashshopDisplayValue);
	nameContainerP4.appendChild(userCashshopDisplaySpan);
	nameContainerDiv.appendChild(nameContainerP1);
	nameContainerDiv.appendChild(nameContainerP2);
	nameContainerDiv.appendChild(nameContainerP3);
	nameContainerDiv.appendChild(nameContainerP4);
	// Notification Area
	let notifDiv = document.createElement('div');
	notifDiv.id = 'Notification';
	// Create display of fame and fans and append to notif area
	let fameDisplayP = document.createElement('p');
	fameDisplayP.id = 'Fame';
	let fameDisplayFame = document.createTextNode('Fame: ' + player.fame);
	let fameDisplayFans = document.createTextNode('Fans: ' + player.fans);
	fameDisplayP.appendChild(fameDisplayFame);
	fameDisplayP.appendChild(document.createElement('br'));
	fameDisplayP.appendChild(fameDisplayFans);
	notifDiv.appendChild(fameDisplayP);
	// Create email notification symbol and append to notif area
	let emailDiv = document.createElement('div');
	emailDiv.id = 'Emailnotifcontainer';
	let emailSymbolP = document.createElement('p');
	emailSymbolP.id = 'Emailnotif';
	emailSymbolP.classList.add('symbole', 'large');
	emailDiv.appendChild(emailSymbolP);
	if (emailsUnread) {
		let emailSymbol = document.createTextNode('');
		emailSymbolP.appendChild(emailSymbol);
		emailSymbolP.appendChild(document.createElement('br'));
		emailDiv.appendChild(document.createTextNode('Unread Emails: ' + emailsUnreadNumber));
	}
	else {
		let emailSymbol = document.createTextNode('');
		emailSymbolP.appendChild(emailSymbol);
	}
	notifDiv.appendChild(emailDiv);
	// Energy Bars
	let energyDiv = document.createElement('div');
	energyDiv.id = 'Energy';
	let energyContainerP1 = document.createElement('p');
	let userLevelDisplay = document.createTextNode(player.skill + ', ' + 'Lv. ' + player.level);
	energyContainerP1.appendChild(userLevelDisplay);
	// Mental Energy Bar
	let mentalMeter = document.createElement('meter');
	mentalMeter.id = 'Mental';
	mentalMeter.min = 0;
	mentalMeter.max = 100;
	mentalMeter.value = player.mental;
	let mentalLabel = 'Mental Energy: ' + player.mental + '%'
	mentalMeter.title = mentalLabel;
	energyDiv.appendChild(mentalMeter);
	// Physical Energy Bar
	let physicalMeter = document.createElement('meter');
	physicalMeter.id = 'Physical';
	physicalMeter.min = 0;
	physicalMeter.max = 100;
	physicalMeter.value = player.physical;
	let physicalLabel = 'Physical Energy: ' + player.physical + '%'
	physicalMeter.title = physicalLabel;
	energyDiv.appendChild(physicalMeter);
	// Create Time Element
	let timeP = document.createElement('p');
	timeP.id = 'Time';
	// Append everything to the hudDiv
	hudDiv.appendChild(profileDiv);
	hudDiv.appendChild(nameContainerDiv);
	hudDiv.appendChild(notifDiv);
	hudDiv.appendChild(energyDiv);
	hudDiv.appendChild(timeP);
	hud.parentNode.replaceChild(hudDiv, hud);
	calcTime();
}





// Diplays the current time in the HUD
function displayTime() {
	let timeP = document.getElementById('Time');
	let timeDisplay = document.createTextNode(player.weekday + ', ' + player.time);
	timeP.appendChild(timeDisplay);
}