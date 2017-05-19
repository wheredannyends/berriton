/*

BERRITON - JAVASCRIPT
TABLE OF CONTENTS

0.01 - User Settings
0.02 - Scene Variables
0.03 - Dialogue Array Declarations
0.04 - HUD
0.05 - Berry Math Functions
0.06 - Goodie Functions

1.01 - Splash Screen
1.02 - Character Selection Screen
1.03 - Submit User Information

2.01 - Scene Change Buttons
2.02 - Scene Change Functions

3.01 - Brent Interactions
3.02 - James Interactions
3.03 - Tabetha Interactions
3.04 - Woat Interactions
3.05 - Kenneth Interactions
3.06 - Brobot Interactions

4.01 - Path Scene Berries
4.02 - Bridge Scene Berries
4.03 - House Exterior Scene Berries

*/

$(document).ready(function () {
	$("#loading-screen").delay(500).fadeOut("slow");
});


// 0.01 - User Settings

var user = {
	name: "Barry",
	charModelFront: "images/characters/raccoon-front.svg",
	charModelSide: "images/characters/raccoon-side.svg",
	berryCount: 0,
	goodieCount: 0
}

var pathScenePlayer = document.getElementById("pathscene-player-character"),
	bridgeScenePlayer = document.getElementById("bridgescene-player-character"),
	houseexteriorScenePlayer = document.getElementById("houseexteriorscene-player-character"),
	houseinteriorScenePlayer = document.getElementById("houseinteriorscene-player-character"),
	highwayScenePlayer = document.getElementById("highwayscene-player-character"),
	summitScenePlayer = document.getElementById("summitscene-player-character"),
	crossroadsScenePlayer = document.getElementById("crossroadsscene-player-character"),
	caveExteriorScenePlayer = document.getElementById("caveexteriorscene-player-character"),
	caveInteriorScenePlayer = document.getElementById("caveinteriorscene-player-character"),
	forestScenePlayer = document.getElementById("forestscene-player-character");


// 0.02 - Scene Variables

var pathScene = document.getElementById("pathscene"),
	bridgeScene = document.getElementById("bridgescene"),
	houseExteriorScene = document.getElementById("houseexteriorscene"),
	houseInteriorScene = document.getElementById("houseinteriorscene"),
	highwayScene = document.getElementById("highwayscene"),
	summitScene = document.getElementById("summitscene"),
	crossroadsScene = document.getElementById("crossroadsscene"),
	forestScene = document.getElementById("forestscene"),
	caveExteriorScene = document.getElementById("caveexteriorscene"),
	caveInteriorScene = document.getElementById("caveinteriorscene");

// 0.03 - Dialogue Array Declarations

var brentSpeechArr = [],
	jamesSpeechArr = [],
	tabethaSpeechArr = [],
	woatSpeechArr = [],
	brobotSpeechArr = [],
	kennethSpeechArr = [];

// 0.04 - HUD

var hud = document.getElementById("hud-container"),
	berryCountDisp = document.getElementById("hud-berry-count"),
	pieCountDisp = document.getElementById("hud-pie-count"),
	goodieContainer = document.getElementById("hud-goodies-container"),
	goodieDisp = document.getElementById("hud-goodies"),
	goodieArrow = document.getElementById("hud-goodies-arrow"),
	goodieDispIsOpen = false;

function goodieDispOpen() {
	for (var i = 1; i < goodieDisp.children.length; i++) {
		goodieDisp.children[i].style.height = "60%";
	}
	goodieArrow.style.transform = "rotate(180deg)";
	goodieArrow.style.paddingRight = "0";
	goodieArrow.style.paddingLeft = "5%";
	goodieDispIsOpen = true;
}

function goodieDispClose() {
	for (var i = 1; i < goodieDisp.children.length; i++) {
		goodieDisp.children[i].style.height = "0";
	}
	goodieArrow.style.transform = "none";
	goodieArrow.style.paddingRight = "5%";
	goodieArrow.style.paddingLeft = "0";
	goodieDispIsOpen = false;
}

goodieArrow.addEventListener("click", function () {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	} else {
		goodieDispClose();
	}
});

// 0.05 - Berry Math Functions

function berryInc() {
	user.berryCount++;
	berryCountDisp.style.opacity = "0";
	setTimeout(function () {
		berryCountDisp.innerText = user.berryCount;
		berryCountDisp.style.opacity = "1";
	}, 300);
}

function berryDec5() {
	user.berryCount -= 5;
	berryCountDisp.style.opacity = "0";
	setTimeout(function () {
		berryCountDisp.innerText = user.berryCount;
		berryCountDisp.style.opacity = "1";
	}, 300);
}

function berryDec10() {
	user.berryCount -= 10;
	berryCountDisp.style.opacity = "0";
	setTimeout(function () {
		berryCountDisp.innerText = user.berryCount;
		berryCountDisp.style.opacity = "1";
	}, 300);
}

// 0.06 - Goodie Functions

var recipeIcon = document.getElementById("goodie-1"),
	pieIcon = document.getElementById("goodie-2"),
	chargerIcon = document.getElementById("goodie-3"),
	woatMedalIcon = document.getElementById("goodie-4"),
	brobotMedalIcon = document.getElementById("goodie-5");

var haveRecipe = false,
	havePie = false,
	haveCharger = false,
	haveWoatMedal = false,
	haveBrobotMedal = false;

function recipeGet() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		recipeIcon.style.opacity = "0";
		setTimeout(function () {
			recipeIcon.src = "images/goodies/recipe.svg"
			setTimeout(function () {
				recipeIcon.style.opacity = "1";
				setTimeout(function () {
					haveRecipe = true;
					user.goodieCount++;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function pieGet() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		pieIcon.style.opacity = "0";
		setTimeout(function () {
			pieIcon.src = "images/goodies/pie.svg"
			setTimeout(function () {
				pieIcon.style.opacity = "1";
				setTimeout(function () {
					havePie = true;
					user.goodieCount++;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function chargerGet() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		chargerIcon.style.opacity = "0";
		setTimeout(function () {
			chargerIcon.src = "images/goodies/charger-empty.svg"
			setTimeout(function () {
				chargerIcon.style.opacity = "1";
				setTimeout(function () {
					haveCharger = true;
					user.goodieCount++;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function chargerEmpty() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		chargerIcon.style.opacity = "0";
		setTimeout(function () {
			chargerIcon.src = "images/goodies/charger-empty.svg"
			setTimeout(function () {
				chargerIcon.style.opacity = "1";
				setTimeout(function () {
					chargerIsFull = false;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function chargerFull() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		chargerIcon.style.opacity = "0";
		setTimeout(function () {
			chargerIcon.src = "images/goodies/charger-full.svg"
			setTimeout(function () {
				chargerIcon.style.opacity = "1";
				setTimeout(function () {
					chargerIsFull = true;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function woatMedalGet() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		woatMedalIcon.style.opacity = "0";
		setTimeout(function () {
			woatMedalIcon.src = "images/goodies/woat-medal.svg"
			setTimeout(function () {
				woatMedalIcon.style.opacity = "1";
				setTimeout(function () {
					haveWoatMedal = true;
					user.goodieCount++;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

function brobotMedalGet() {
	if (goodieDispIsOpen == false) {
		goodieDispOpen();
	}
	setTimeout(function () {
		brobotMedalIcon.style.opacity = "0";
		setTimeout(function () {
			brobotMedalIcon.src = "images/goodies/brobot-medal.svg"
			setTimeout(function () {
				brobotMedalIcon.style.opacity = "1";
				setTimeout(function () {
					haveBrobotMedal = true;
					user.goodieCount++;
					goodieDispClose();
				}, 1000);
			}, 300);
		}, 300);
	}, 400);
}

// 1.01 - Splash Screen

var splashContainer = document.getElementById("splash-container"),
	splashLogo = document.getElementById("splash-logo"),
	splashStart = document.getElementById("splash-start"),
	splashCloud1 = document.getElementById("splash-cloud-1"),
	splashCloud2 = document.getElementById("splash-cloud-2");

var curScene = null;

splashStart.addEventListener("click", function () {
	splashLogo.style.transform = "translateY(-10%)";
	splashLogo.style.opacity = "0";
	splashStart.style.transform = "translateY(-10%)";
	splashStart.style.opacity = "0";
	setTimeout(function () {
		splashLogo.classList.add("hidden");
		splashStart.classList.add("hidden");
		charSelContainer.classList.remove("hidden");
		charSelContainer.classList.add("flex");
	}, 300);
});

// 1.02 - Character Selection Screen

var charSelPreview = document.getElementById("char-sel-preview"),
	charSelLeft = document.getElementById("char-sel-left"),
	charSelRight = document.getElementById("char-sel-right"),
	charSelContainer = document.getElementById("char-sel-container"),
	charSelArr = ["images/characters/bear-front.svg", "images/characters/raccoon-front.svg", "images/characters/lion-front.svg", "images/characters/penguin-front.svg", "images/characters/pig-front.svg", "images/characters/panda-front.svg"],
	charSelCurrent = 0;

charSelRight.addEventListener("click", function () {
	charSelPreview.style.animation = "char-sel-right-anim 0.5s";
	setTimeout(function () {
		charSelCurrent++;
		if (charSelCurrent == charSelArr.length) {
			charSelCurrent = 0;
		}
		charSelPreview.src = charSelArr[charSelCurrent];
	}, 250);
	setTimeout(function () {
		charSelPreview.style.animation = "none";
	}, 500);
});

charSelLeft.addEventListener("click", function () {
	charSelPreview.style.animation = "char-sel-left-anim 0.5s";
	setTimeout(function () {
		charSelCurrent--;
		if (charSelCurrent == -1) {
			charSelCurrent = charSelArr.length - 1;
		}
		charSelPreview.src = charSelArr[charSelCurrent];
	}, 250);
	setTimeout(function () {
		charSelPreview.style.animation = "none";
	}, 500);
});

var charSelSub = document.getElementById("char-sel-submit"),
	charSelName = document.getElementById("char-sel-name"),
	forwardButContainer = document.getElementById("forward-but-container");

var userData = localStorage.getItem("userData");
if (userData) {

	user = JSON.parse(userData);

	for (var i = 0; i < charSelArr.length; i++) {
		if (user.charModelFront == charSelArr[i]) {
			charSelCurrent = i;
		}
	}

	charSelName.value = user.name;
	charSelPreview.src = user.charModelFront;

	user.berryCount = 0;
	user.goodieCount = 0;

	console.log(user);
}

// 1.03 - Submit User Information

function charSelSubFunc() {
	if (charSelName.value == "") {
		charSelName.placeholder = "You Don't Have A Name?"
	} else {

		// SET USERNAME

		user.name = charSelName.value;

		// SET DIALOGUE BASED ON NAME VALUE

		brentSpeechArr = ["Hey <span class=\"red-text\">" + user.name + "</span>, this is MY bridge.", "Look here...", "If you want to use my things,", "You have to give me something in return.", "I’m pretty hungry right now...", "About <span class=\"blue-text\">5 berries</span> hungry I'd say...", "There are usually a bunch <span class=\"blue-text\">in the trees</span>", "Anyone could just reach up and <span class=\"blue-text\">grab some</span>", "I'd get them myself,", "But if I go anywhere...", " someone might touch my bridge!", "Get me some food. *hmph*", "Wow!", "I had you pegged as some kind of dork...", "but you’re actually pretty cool!", "You can use my bridge, I guess..."];

		jamesSpeechArr = ["Psssst… over here <span class=\"red-text\">" + user.name + ".", "I hear that old koot in that there house...", "Serves up some pretty mean berry pie!", "Check it out...", "I ganked her recipe for berry pie,", "So I can have it all to myself!", "...", "What’s that?", "You think I should give it back?", "No. its mine!", "Tell you what...", "I'll come up with a quiz and you can earn it.", "If you can guess all the questions right...", "I’ll give you the recipe!", "But it will take some time...", "Maybe take a hike up the mountain over there.", "I'll whip it up in no time!", "Jeepers...", "You're back so soon!", "I'm still working on the quiz.", "Maybe Tabetha has a copy?", "Go check in with her at her place!", "Tabetha can't remember her own recipies!?", "I can't believe it!", "I'm still coming up with some questions", "If you wanna take a hike up the mountain...", "I'm sure it will be ready by the time you're back!", "Alright!", "Are you ready for the quiz!?", "Sure is a tough one...", "But I'm sure you know Berriton well enough by now!", "Hah! I guess its MY recipe after all!", "...", "I guess I could give you another shot", "Maybe some of the folk around here could help you...", "But there's no way I'm gonna give it to you...", "Unless you pass the quiz!", "Darn!", "You sure know a lot about Berriton...", "Here's the recipe...", "You've earned it..."];

		tabethaSpeechArr = ["Oh hello <span class=\"red-text\">" + user.name + "</span>!", "My name is Tabetha.", "I’m the chef around here!", "I love to bake", "And like I've always said...", "The most important ingredient to any pie...", "...is <span class=\"blue-text\">love!</span>", "Sadly, my berry pie recipe has gone missing...", "I have searched everywhere!", "I’ve searched under the table...", "Behind the cabinet...", "In the chimney...", "I've even poked my head into the garburator and taken a peek!", "But, no luck...", "It's such a shame...", "I was about to bake a pie for my friend <span class=\"blue-text\">on the mountain.</span>", "Oooh ho ho!", "Thank you <span class=\"red-text\">" + user.name + "!", "Now, let me see what I need...", "Oh! I need some berries!", "Could you please grab me some berries?", "<span class=\"blue-text\">10</span> oughta do it!", "Alright! We're all set!", "Head on over and <span class=\"blue-text\">take it out of the over</span>!"];

		woatSpeechArr = ["Hello <span class=\"red-text\">" + user.name + "</span> How goes it?", "The name’s Woat the Goat.", "I’m somewhat of the elder here in Berriton", "So check it out...", "Tabetha, the lovely lady in <span class=\"blue-text\">that house down there</span>,", "Told me she would have a pie ready for me this afternoon.", "It's now getting close to the afternoon...", "Do you think you could go see where my pie is?", "Haaaay yes!", "That’s what I was looking for!", "Thank you for the pie <span class=\"red-text\">" + user.name + "</span>", "See ya around!"];

		brobotSpeechArr = ["Bzzzzzzt...", "Need...", "<span class=\"blue-text\">Energy</span>...", "Bzzt...", "Low...", "Charge...", "Bzzzzt...", "<span class=\"blue-text\">More</span>...", "Energy...", "Please...", "Bzzt...", "I am starting to feel better...", "Just a little more...", "Bzzzzzzt...", "Just <span class=\"blue-text\">a little more</span>...", "Bzzzt...", "Bzzzzzzt!", "Thanks <span class=\"red-text\">" + user.name + "</span>!", "That energy hit the spot.", "I feel great!", "Here...", "Take this for all your trouble...", "Bzzzzt!"];

		kennethSpeechArr = ["Just a little bit of this...", "And voila!", "...", "Oh hey <span class=\"red-text\">" + user.name + "</span>!", "Sorry, I was busy with this machine...", "It's a generator!", "It takes the acidic properties of berries...", "And transforms it into pure <span class=\"blue-text\">energy</span>!", "I've been working on a prototype battery charger", "So that people can <span class=\"blue-text\">take this energy anywhere</span>!", "Here...", "I have an extra", "Try using it with the generator", "As long as you have <span class=\"blue-text\">5 berries</span>...", "You will be able to take energy all over Berriton!", "Hmm...", "Looks like the charger's full...", "Come back if you use up all that energy!", "Use the generator!", "It should take <span class=\"blue-text\">5 berries</span> to fill it up!", "Yikes!", "I think there's something wrong with the machine...", "It won't make any more energy!", "I guess I'll have to fix it, huh?", "..."];

		// SET CHARACTER MODEL

		if (charSelCurrent == 0) {
			user.charModelFront = "images/characters/bear-front.svg";
			user.charModelSide = "images/characters/bear-side.svg";

			setPlayerCharacter();
		} else if (charSelCurrent == 1) {
			user.charModelFront = "images/characters/raccoon-front.svg";
			user.charModelSide = "images/characters/raccoon-side.svg";

			setPlayerCharacter();
		} else if (charSelCurrent == 2) {
			user.charModelFront = "images/characters/lion-front.svg";
			user.charModelSide = "images/characters/lion-side.svg";

			setPlayerCharacter();
		} else if (charSelCurrent == 3) {
			user.charModelFront = "images/characters/penguin-front.svg";
			user.charModelSide = "images/characters/penguin-side.svg";

			setPlayerCharacter();
		} else if (charSelCurrent == 4) {
			user.charModelFront = "images/characters/pig-front.svg";
			user.charModelSide = "images/characters/pig-side.svg";

			setPlayerCharacter();
		} else if (charSelCurrent == 5) {
			user.charModelFront = "images/characters/panda-front.svg";
			user.charModelSide = "images/characters/panda-side.svg";

			setPlayerCharacter();
		} else {

		}

		// SAVE TO LOCAL STORAGE

		var localUserInfo = JSON.stringify(user);
		localStorage.setItem("userData", localUserInfo);

		// BEGIN GAME

		splashContainer.style.opacity = "0";
		charSelContainer.style.animation = "none";
		setTimeout(function () {
			charSelContainer.style.animation = "slide-totop 0.5s";
		}, 1);
		setTimeout(function () {
			splashContainer.classList.add("hidden");
			pathScene.classList.remove("hidden");
			forwardButContainer.classList.remove("hidden");
			hud.classList.remove("hidden");
		}, 300);
		setTimeout(function () {
			//		$(pathScene).fadeIn("slow");
			pathScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
			hud.style.opacity = "1";
		}, 600);

		curScene = "pathScene";


	}
}

function setPlayerCharacter() {
	pathScenePlayer.src = user.charModelFront;
	bridgeScenePlayer.src = user.charModelSide;
	houseexteriorScenePlayer.src = user.charModelFront;
	houseinteriorScenePlayer.src = user.charModelSide;
	highwayScenePlayer.src = user.charModelSide;
	summitScenePlayer.src = user.charModelSide;
	crossroadsScenePlayer.src = user.charModelSide;
	caveExteriorScenePlayer.src = user.charModelSide;
	caveInteriorScenePlayer.src = user.charModelFront;
	forestScenePlayer.src = user.charModelSide;
}

charSelSub.addEventListener("click", function () {

	charSelSubFunc();

});

charSelName.addEventListener("keyup", function (ev) {

	if (ev.keyCode == 13) {
		charSelSubFunc();
	}

});

// 2.01 - Scene Change Buttons

var forwardBut1 = document.getElementById("forward-but-1"),
	forwardBut2 = document.getElementById("forward-but-2");

var bridgeSceneComplete = false,
	houseExteriorSceneComplete = false,
	houseInteriorSceneComplete = false,
	summitSceneComplete = false,
	forestSceneComplete = false,
	kennethComplete = false;

function moveForwardButs() {
	forwardBut1.classList.remove("hidden");
	forwardBut1.style.width = "6%";
	forwardBut2.classList.remove("hidden");
	forwardBut2.style.width = "6%";

	if (curScene == "pathScene") {
		forwardBut1.src = "images/ui-elements/forward-button-up.svg"
		forwardBut1.style.top = "44%";
		forwardBut1.style.left = "47%";

		forwardBut2.src = "images/ui-elements/forward-button-left.svg"
		forwardBut2.style.top = "70%";
		forwardBut2.style.left = "22%";
	}

	if (curScene == "bridgeScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "23%";
		forwardBut1.style.left = "5%";

		if (bridgeSceneComplete == false) {
			forwardBut1.classList.add("hidden");
		}

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "60%";
		forwardBut2.style.left = "90%";
	}

	if (curScene == "houseExteriorScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "64%";
		forwardBut1.style.left = "3%";

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "56%";
		forwardBut2.style.left = "91%";
	}

	if (curScene == "houseInteriorScene") {
		forwardBut1.classList.add("hidden");

		forwardBut2.src = "images/ui-elements/forward-button-down.svg"
		forwardBut2.style.top = "83%";
		forwardBut2.style.left = "47%";
	}

	if (curScene == "highwayScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "40%";
		forwardBut1.style.left = "2%";

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "56%";
		forwardBut2.style.left = "91%";
	}

	if (curScene == "summitScene") {
		forwardBut1.classList.add("hidden");

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "78%";
		forwardBut2.style.left = "89%";
	}

	if (curScene == "crossroadsScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "68%";
		forwardBut1.style.left = "2%";

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "70%";
		forwardBut2.style.left = "91%";
	}

	if (curScene == "caveExteriorScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "42%";
		forwardBut1.style.left = "25%";

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "62%";
		forwardBut2.style.left = "91%";
	}
	if (curScene == "caveInteriorScene") {
		forwardBut1.classList.add("hidden");

		forwardBut2.src = "images/ui-elements/forward-button-up.svg"
		forwardBut2.style.top = "50%";
		forwardBut2.style.left = "89%";
		forwardBut2.style.width = "5%";
	}
	if (curScene == "forestScene") {
		forwardBut1.classList.add("hidden");

		forwardBut2.src = "images/ui-elements/forward-button-right.svg"
		forwardBut2.style.top = "55%";
		forwardBut2.style.left = "91%";
	}

	// Close Goodie Display

	if (goodieDispIsOpen == true) {
		goodieDispClose();
	}
}

// 2.02 - Scene Change Functions

forwardBut1.addEventListener("click", function () {

	// PATH to BRIDGE

	if (curScene == "pathScene") {
		curScene = "bridgeScene";
		pathScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			pathScene.classList.add("hidden");
			bridgeScene.classList.remove("hidden");
			moveForwardButs();
		}, 320);
		setTimeout(function () {
			bridgeScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// BRIDGE to HOUSE EXTERIOR
	else if (curScene == "bridgeScene") {
		curScene = "houseExteriorScene";
		bridgeScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			bridgeScene.classList.add("hidden");
			houseExteriorScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			houseExteriorScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (brentSpeechOpen == true) {
			brentSpeechContainerClose();
			brentSpeechOpen = false;
		}
	}

	// HOUSE EXTERIOR to HIGHWAY
	else if (curScene == "houseExteriorScene") {
		curScene = "highwayScene";
		houseExteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			houseExteriorScene.classList.add("hidden");
			highwayScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			highwayScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (jamesSpeechOpen == true) {
			jamesSpeechContainerClose();
			jamesSpeechOpen = false;
		}
	}

	// HIGHWAY to SUMMIT
	else if (curScene == "highwayScene") {
		curScene = "summitScene";
		highwayScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			highwayScene.classList.add("hidden");
			summitScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			summitScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// CROSSROADS to FOREST
	else if (curScene == "crossroadsScene") {
		curScene = "forestScene";
		crossroadsScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			crossroadsScene.classList.add("hidden");
			forestScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			forestScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// CAVE EXTERIOR to CAVE INTERIOR
	else if (curScene == "caveExteriorScene") {
		curScene = "caveInteriorScene";
		caveExteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			caveExteriorScene.classList.add("hidden");
			caveInteriorScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			caveInteriorScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);

		if (haveCharger == true && generatorProg < 3) {
			generator.style.animation = "oven-pulse 2s 2";
			setTimeout(function () {
				generator.style.animation = "none";
			}, 3000);
		}
	}

});

forwardBut2.addEventListener("click", function () {

	// SUMMIT to HIGHWAY

	if (curScene == "summitScene") {
		curScene = "highwayScene";
		summitScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			summitScene.classList.add("hidden");
			highwayScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			highwayScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (woatSpeechOpen == true) {
			woatSpeechContainerClose();
			woatSpeechOpen = false;
		}
	}

	// HIGHWAY to HOUSE EXTERIOR
	else if (curScene == "highwayScene") {
		curScene = "houseExteriorScene";
		highwayScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			highwayScene.classList.add("hidden");
			houseExteriorScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			houseExteriorScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);

	}

	// HOUSE INTERIOR to HOUSE EXTERIOR
	else if (curScene == "houseInteriorScene") {
		curScene = "houseExteriorScene";
		houseInteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			houseInteriorScene.classList.add("hidden");
			houseExteriorScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			houseExteriorScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (tabethaSpeechOpen == true) {
			tabethaSpeechContainerClose();
			tabethaSpeechOpen = false;
		}
	}

	// HOUSE EXTERIOR to BRIDGE
	else if (curScene == "houseExteriorScene") {
		curScene = "bridgeScene";
		houseExteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			houseExteriorScene.classList.add("hidden");
			bridgeScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			bridgeScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (jamesSpeechOpen == true) {
			jamesSpeechContainerClose();
			jamesSpeechOpen = false;
		}
	}

	// BRIDGE to PATH
	else if (curScene == "bridgeScene") {
		curScene = "pathScene";
		bridgeScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			bridgeScene.classList.add("hidden");
			pathScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			pathScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
		if (brentSpeechOpen == true) {
			brentSpeechContainerClose();
			brentSpeechOpen = false;
		}
	}

	// PATH to CROSSROADS
	else if (curScene == "pathScene") {
		curScene = "crossroadsScene";
		pathScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			pathScene.classList.add("hidden");
			crossroadsScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			crossroadsScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// CAVE EXTERIOR to CROSSROADS
	else if (curScene == "caveExteriorScene") {
		curScene = "crossroadsScene";
		caveExteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			caveExteriorScene.classList.add("hidden");
			crossroadsScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			crossroadsScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// CAVE INTERIOR to CAVE EXTERIOR
	else if (curScene == "caveInteriorScene") {
		curScene = "caveExteriorScene";
		caveInteriorScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			caveInteriorScene.classList.add("hidden");
			caveExteriorScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			caveExteriorScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// CROSSROADS to PATH
	else if (curScene == "crossroadsScene") {
		curScene = "pathScene";
		crossroadsScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			crossroadsScene.classList.add("hidden");
			pathScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			pathScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

	// FOREST to CROSSROADS
	else if (curScene == "forestScene") {
		curScene = "crossroadsScene";
		forestScene.style.opacity = "0";
		forwardButContainer.style.opacity = "0";
		setTimeout(function () {
			forestScene.classList.add("hidden");
			crossroadsScene.classList.remove("hidden");
			moveForwardButs();
		}, 300);
		setTimeout(function () {
			crossroadsScene.style.opacity = "1";
			forwardButContainer.style.opacity = "1";
		}, 500);
	}

});

// HOUSE EXTERIOR to HOUSE INTERIOR

var houseExteriorArrow = document.getElementById("houseexteriorscene-arrow");

houseExteriorArrow.addEventListener("click", function () {
	curScene = "houseInteriorScene";
	houseExteriorScene.style.opacity = "0";
	forwardButContainer.style.opacity = "0";
	setTimeout(function () {
		houseExteriorScene.classList.add("hidden");
		houseInteriorScene.classList.remove("hidden");
		moveForwardButs();
	}, 300);
	setTimeout(function () {
		houseInteriorScene.style.opacity = "1";
		forwardButContainer.style.opacity = "1";
	}, 500);
});

// CROSSROADS to CAVE EXTERIOR

var crossroadsArrow = document.getElementById("crossroadsscene-arrow");

crossroadsArrow.addEventListener("click", function () {
	curScene = "caveExteriorScene";
	crossroadsScene.style.opacity = "0";
	forwardButContainer.style.opacity = "0";
	setTimeout(function () {
		crossroadsScene.classList.add("hidden");
		caveExteriorScene.classList.remove("hidden");
		moveForwardButs();
	}, 300);
	setTimeout(function () {
		caveExteriorScene.style.opacity = "1";
		forwardButContainer.style.opacity = "1";
	}, 500);
});

// 3.01 - Brent Interactions

var brent = document.getElementById("brent-container"),
	brentInit = false,
	brentSpeech = document.getElementById("brent-speech-container"),
	brentSpeechOpen = false,
	brentSpeechCircles = document.getElementById("brent-speech-circle-container"),
	brentSpeechLabel = document.getElementById("brent-speech-label"),
	brentSpeechText = document.getElementById("brent-speech-text"),
	brentSpeechProg = 0,
	brentSpeechButton = document.getElementById("brent-speech-button");

function brentSpeechContainerOpen() {
	brentSpeech.style.width = "25%";
	brentSpeech.style.height = "20%";
	brentSpeechCircles.style.opacity = "0";
	brentSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		brentSpeechCircles.classList.remove("flex");
		brentSpeechCircles.classList.add("hidden");
		brentSpeechText.classList.remove("hidden");
		brentSpeechText.innerHTML = brentSpeechArr[brentSpeechProg];
		brentSpeechLabel.style.opacity = "1";
	}, 300);
	setTimeout(function () {
		brentSpeechText.style.opacity = "1";
	}, 500);
	brentSpeechOpen = true;
}

function brentSpeechContainerClose() {
	brentSpeechText.style.opacity = "0";
	brentSpeechLabel.style.opacity = "0";
	brentSpeechButton.classList.add("hidden");
	setTimeout(function () {
		brentSpeech.style.width = "8%";
		brentSpeech.style.height = "6%";
		brentSpeechText.classList.add("hidden");
		brentSpeechCircles.classList.remove("hidden");
		brentSpeechCircles.classList.add("flex");
		brentSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		brentSpeechCircles.style.opacity = "1";
	}, 500);
	brentSpeechOpen = false;
}

function brentDialogueFreeze() {
	brent.style.pointerEvents = "none";
	setTimeout(function () {
		brent.style.pointerEvents = "auto";
	}, 700);

	if (brentSpeechOpen == true) {
		brentSpeechButton.classList.add("hidden");
		brentSpeechButton.style.opacity = "0";
		setTimeout(function () {
			brentSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			brentSpeechButton.style.opacity = "1";
		}, 700);
	}
}

brent.addEventListener("click", function () {
	if (bridgeSceneComplete == false) {
		if (brentInit == false || user.berryCount < 5) {
			if (brentSpeechOpen == false) {
				brentSpeechContainerOpen();
			} else if (brentSpeechProg < brentSpeechArr.length - 5) {
				brentSpeechProg++;
				brentSpeechText.style.opacity = "0";
				setTimeout(function () {
					brentSpeechText.innerHTML = brentSpeechArr[brentSpeechProg];
					brentSpeechText.style.opacity = "1";
				}, 300);

			} else {
				brentSpeechProg = 0;
				brentSpeechContainerClose();
				brentInit = true;
			}
		} else {
			if (brentSpeechOpen == false) {
				brentSpeechProg = 12;
				brentSpeechContainerOpen();
			} else if (brentSpeechProg < brentSpeechArr.length - 1) {
				brentSpeechProg++;
				brentSpeechText.style.opacity = "0";
				setTimeout(function () {
					brentSpeechText.innerHTML = brentSpeechArr[brentSpeechProg];
					brentSpeechText.style.opacity = "1";
				}, 300);
			} else {
				brentSpeechContainerClose();
				setTimeout(function () {
					bridgeSceneComplete = true;
					berryDec5();
					brent.style.transform = "translate"
					forwardBut1.style.opacity = "0";
					forwardBut1.classList.remove("hidden");
					setTimeout(function () {
						forwardBut1.style.opacity = "1";
					}, 300);
				}, 300);
			}
		}
	} else {

		if (brentSpeechOpen == false) {
			brentSpeechProg = 13;
			brentSpeechContainerOpen();
		} else if (brentSpeechProg < brentSpeechArr.length - 2) {
			brentSpeechProg++;
			brentSpeechText.style.opacity = "0";
			setTimeout(function () {
				brentSpeechText.innerHTML = brentSpeechArr[brentSpeechProg];
				brentSpeechText.style.opacity = "1";
			}, 300);
		} else {
			brentSpeechContainerClose();
		}
	}
	brentDialogueFreeze();
});

// 3.02 - James Interactions

var james = document.getElementById("james-container"),
	jamesInit = false,
	jamesSpeech = document.getElementById("james-speech-container"),
	jamesSpeechOpen = false,
	jamesSpeechCircles = document.getElementById("james-speech-circle-container"),
	jamesSpeechLabel = document.getElementById("james-speech-label"),
	jamesSpeechButton = document.getElementById("james-speech-button"),
	jamesSpeechText = document.getElementById("james-speech-text"),
	jamesSpeechProg = 0;

var quiz = document.getElementById("quiz-container"),
	quizContent = document.getElementById("quiz-content"),
	quizQuestion = document.getElementById("quiz-question"),
	quizAnswer1 = document.getElementById("quiz-answer-1"),
	quizAnswer2 = document.getElementById("quiz-answer-2"),
	quizAnswer3 = document.getElementById("quiz-answer-3"),
	quizAnswer4 = document.getElementById("quiz-answer-4"),
	quizCurrent = 1,
	quizScore = 0,
	quizAttempted = false;

function jamesSpeechContainerOpen() {
	jamesSpeech.style.width = "25%";
	jamesSpeech.style.height = "20%";
	jamesSpeechCircles.style.opacity = "0";
	jamesSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		jamesSpeechCircles.classList.remove("flex");
		jamesSpeechCircles.classList.add("hidden");
		jamesSpeechLabel.style.opacity = "1";
		jamesSpeechText.classList.remove("hidden");
		jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
	}, 300);
	setTimeout(function () {
		jamesSpeechText.style.opacity = "1";
	}, 500);
	jamesSpeechOpen = true;
}

function jamesSpeechContainerClose() {
	jamesSpeechText.style.opacity = "0";
	jamesSpeechLabel.style.opacity = "0";
	jamesSpeechButton.classList.add("hidden");
	setTimeout(function () {
		jamesSpeech.style.width = "8%";
		jamesSpeech.style.height = "6%";
		jamesSpeechText.classList.add("hidden");
		jamesSpeechCircles.classList.remove("hidden");
		jamesSpeechCircles.classList.add("flex");
		jamesSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		jamesSpeechCircles.style.opacity = "1";
	}, 500);
	jamesSpeechOpen = false;
}

function jamesDialogueFreeze() {
	james.style.pointerEvents = "none";
	setTimeout(function () {
		james.style.pointerEvents = "auto";
	}, 700);

	if (jamesSpeechOpen == true) {
		jamesSpeechButton.classList.add("hidden");
		jamesSpeechButton.style.opacity = "0";
		setTimeout(function () {
			jamesSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			jamesSpeechButton.style.opacity = "1";
		}, 700);
	}
}

function quizClick() {
	if (quizCurrent == 4) {
		quizAttempted = true;
		if (quizScore == 4) {
			jamesSpeechProg = 37;
		} else {
			jamesSpeechProg = 31;
			quizScore = 0;
		}
		quiz.style.opacity = "0";
		setTimeout(function () {
			jamesSpeechContainerOpen();
			jamesDialogueFreeze();
			quiz.classList.add("hidden");
			quizQuestion.innerHTML = "What can you find <span class=\"blue-text\">in the trees</span> in Berriton?";
			quizAnswer1.innerText = "Bananas";
			quizAnswer2.innerText = "Berries";
			quizAnswer3.innerText = "Bears";
			quizAnswer4.innerText = "Bros";
			quizCurrent = 1;
		}, 300);
	} else {
		quizContent.style.opacity = "0";
		setTimeout(function () {
			if (quizCurrent == 1) {
				quizQuestion.innerText = "Who owns the Berriton Bridge?";
				quizAnswer1.innerText = "Woat the Goat";
				quizAnswer2.innerText = "Tabetha the Goose";
				quizAnswer3.innerText = "Brobot the Robot";
				quizAnswer4.innerText = "Brent the Troll";
				quizCurrent++;
			} else if (quizCurrent == 2) {
				quizQuestion.innerText = "What is the most important ingredient in pie?";
				quizAnswer1.innerText = "Love";
				quizAnswer2.innerText = "Berries";
				quizAnswer3.innerText = "Pie Crust";
				quizAnswer4.innerText = "Gluten-Free Gluten";
				quizCurrent++;
			} else if (quizCurrent == 3) {
				quizQuestion.innerText = "Who is the elder here in Berriton?";
				quizAnswer1.innerText = "James the Dolphin";
				quizAnswer2.innerText = user.name + " the Human";
				quizAnswer3.innerText = "Woat the Goat";
				quizAnswer4.innerText = "kenneth the Deer";
				quizCurrent++;
			}
			quizContent.style.opacity = "1";
		}, 500);
	}
}

james.addEventListener("click", function () {
	if (houseExteriorSceneComplete == false) {
		if (jamesInit == false || (woatInit == false && tabethaInit == false)) {
			if (jamesSpeechOpen == false) {
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 25) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechProg = 0;
				jamesSpeechContainerClose();
				jamesInit = true;
			}
		} else if (woatInit == true && tabethaInit == false) {
			if (jamesSpeechOpen == false) {
				jamesSpeechProg = 17;
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 20) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechProg = 0;
				jamesSpeechContainerClose();
			}
		} else if (woatInit == false && tabethaInit == true) {
			if (jamesSpeechOpen == false) {
				jamesSpeechProg = 22;
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 15) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechProg = 0;
				jamesSpeechContainerClose();
			}
		} else if (woatInit == true && tabethaInit == true && quizAttempted == false) {
			if (jamesSpeechOpen == false) {
				jamesSpeechProg = 27;
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 11) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechProg = 0;
				jamesSpeechContainerClose();
				setTimeout(function () {
					quiz.classList.remove("hidden");
					setTimeout(function () {
						quiz.style.opacity = "1";
					}, 300);
				}, 300);
			}
		} else if (quizAttempted == true) {
			if (quizScore == 4) {
				if (jamesSpeechProg < jamesSpeechArr.length - 1) {
					jamesSpeechProg++;
					jamesSpeechText.style.opacity = "0";
					setTimeout(function () {
						jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
						jamesSpeechText.style.opacity = "1";
					}, 300);
				} else {
					jamesSpeechProg = 0;
					houseExteriorSceneComplete = true;
					recipeGet();
					jamesSpeechContainerClose();
				}
			} else {
				if (jamesSpeechProg < jamesSpeechArr.length - 5) {
					jamesSpeechProg++;
					jamesSpeechText.style.opacity = "0";
					setTimeout(function () {
						jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
						jamesSpeechText.style.opacity = "1";
					}, 300);
				} else {
					jamesSpeechProg = 0;
					jamesSpeechContainerClose();
					quizAttempted = false;
				}
			}
		}
	} else {

		if (jamesSpeechOpen == false) {
			jamesSpeechProg = 38;
			jamesSpeechContainerOpen();
		} else if (jamesSpeechProg < jamesSpeechArr.length - 3) {
			jamesSpeechProg++;
			jamesSpeechText.style.opacity = "0";
			setTimeout(function () {
				jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
				jamesSpeechText.style.opacity = "1";
			}, 300);
		} else {
			jamesSpeechContainerClose();
		}
	}
	jamesDialogueFreeze();
});

quizAnswer1.addEventListener("click", function () {
	if (quizCurrent == 3) {
		quizScore++;
	}
	quizClick();
});

quizAnswer2.addEventListener("click", function () {
	if (quizCurrent == 1) {
		quizScore++;
	}
	quizClick();
});

quizAnswer3.addEventListener("click", function () {
	if (quizCurrent == 4) {
		quizScore++;
	}
	quizClick();
});

quizAnswer4.addEventListener("click", function () {
	if (quizCurrent == 2) {
		quizScore++;
	}
	quizClick();
});

// 3.03 - Tabetha Interactions

var tabetha = document.getElementById("tabetha-container"),
	tabethaInit = false,
	recipeFoundInit = false,
	pieCooked = false,
	tabethaSpeech = document.getElementById("tabetha-speech-container"),
	tabethaSpeechOpen = false,
	tabethaSpeechCircles = document.getElementById("tabetha-speech-circle-container"),
	tabethaSpeechLabel = document.getElementById("tabetha-speech-label"),
	tabethaSpeechButton = document.getElementById("tabetha-speech-button"),
	tabethaSpeechText = document.getElementById("tabetha-speech-text"),
	tabethaSpeechProg = 0,
	houseInteriorOven = document.getElementById("houseinteriorscene-oven"),
	ovenAnimPlayed = false;

function tabethaSpeechContainerOpen() {
	tabethaSpeech.style.width = "25%";
	tabethaSpeech.style.height = "20%";
	tabethaSpeechCircles.style.opacity = "0";
	tabethaSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		tabethaSpeechCircles.classList.remove("flex");
		tabethaSpeechCircles.classList.add("hidden");
		tabethaSpeechLabel.style.opacity = "1";
		tabethaSpeechText.classList.remove("hidden");
		tabethaSpeechText.innerHTML = tabethaSpeechArr[tabethaSpeechProg];
	}, 300);
	setTimeout(function () {
		tabethaSpeechText.style.opacity = "1";
	}, 500);
	tabethaSpeechOpen = true;
}

function tabethaSpeechContainerClose() {
	tabethaSpeechText.style.opacity = "0";
	tabethaSpeechLabel.style.opacity = "0";
	tabethaSpeechButton.classList.add("hidden");
	setTimeout(function () {
		tabethaSpeech.style.width = "8%";
		tabethaSpeech.style.height = "6%";
		tabethaSpeechText.classList.add("hidden");
		tabethaSpeechCircles.classList.remove("hidden");
		tabethaSpeechCircles.classList.add("flex");
		tabethaSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		tabethaSpeechCircles.style.opacity = "1";
	}, 500);
	tabethaSpeechOpen = false;
}

function tabethaDialogueFreeze() {
	tabetha.style.pointerEvents = "none";
	setTimeout(function () {
		tabetha.style.pointerEvents = "auto";
	}, 700);

	if (tabethaSpeechOpen == true) {
		tabethaSpeechButton.classList.add("hidden");
		tabethaSpeechButton.style.opacity = "0";
		setTimeout(function () {
			tabethaSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			tabethaSpeechButton.style.opacity = "1";
		}, 700);
	}
}

tabetha.addEventListener("click", function () {
	if (houseInteriorSceneComplete == false) {
		if (tabethaInit == false || haveRecipe == false) {
			if (tabethaSpeechOpen == false) {
				tabethaSpeechContainerOpen();
			} else if (tabethaSpeechProg < tabethaSpeechArr.length - 9) {
				tabethaSpeechProg++;
				tabethaSpeechText.style.opacity = "0";
				setTimeout(function () {
					tabethaSpeechText.innerHTML = tabethaSpeechArr[tabethaSpeechProg];
					tabethaSpeechText.style.opacity = "1";
				}, 300);

			} else {
				tabethaSpeechProg = 0;
				tabethaSpeechContainerClose();
				tabethaInit = true;
			}
		} else if (user.berryCount < 10 || recipeFoundInit == false) {
			if (tabethaSpeechOpen == false) {
				tabethaSpeechProg = 16;
				tabethaSpeechContainerOpen();
			} else if (tabethaSpeechProg < tabethaSpeechArr.length - 3) {
				tabethaSpeechProg++;
				tabethaSpeechText.style.opacity = "0";
				setTimeout(function () {
					tabethaSpeechText.innerHTML = tabethaSpeechArr[tabethaSpeechProg];
					tabethaSpeechText.style.opacity = "1";
				}, 300);

			} else {
				tabethaSpeechProg = 0;
				tabethaSpeechContainerClose();
				recipeFoundInit = true;
			}
		} else {
			if (tabethaSpeechOpen == false) {
				tabethaSpeechProg = 22;
				tabethaSpeechContainerOpen();
			} else if (tabethaSpeechProg < tabethaSpeechArr.length - 1) {
				tabethaSpeechProg++;
				tabethaSpeechText.style.opacity = "0";
				setTimeout(function () {
					tabethaSpeechText.innerHTML = tabethaSpeechArr[tabethaSpeechProg];
					tabethaSpeechText.style.opacity = "1";
				}, 300);
			} else {
				tabethaSpeechContainerClose();
				setTimeout(function () {
					houseInteriorSceneComplete = true;
					houseInteriorOven.style.animation = "oven-pulse 2s 2";
					setTimeout(function () {
						houseInteriorOven.style.animation = "none";
					}, 3000);
					berryDec10();
				}, 300);
			}
		}
	} else {

		if (tabethaSpeechOpen == false) {
			tabethaSpeechProg = 17;
			tabethaSpeechContainerOpen();
		} else if (tabethaSpeechProg < tabethaSpeechArr.length - 7) {
			tabethaSpeechProg++;
			tabethaSpeechText.style.opacity = "0";
			setTimeout(function () {
				tabethaSpeechText.innerHTML = tabethaSpeechArr[tabethaSpeechProg];
				tabethaSpeechText.style.opacity = "1";
			}, 300);
		} else {
			tabethaSpeechContainerClose();
		}
	}
	tabethaDialogueFreeze();
});

houseInteriorOven.addEventListener("click", function () {
	if (houseInteriorSceneComplete == true && pieCooked == false) {
		pieGet();
		pieCooked = true;
	}
});

// 3.04 - Woat Interactions

var woat = document.getElementById("woat-container"),
	woatInit = false,
	woatSpeech = document.getElementById("woat-speech-container"),
	woatSpeechOpen = false,
	woatSpeechCircles = document.getElementById("woat-speech-circle-container"),
	woatSpeechLabel = document.getElementById("woat-speech-label"),
	woatSpeechButton = document.getElementById("woat-speech-button"),
	woatSpeechText = document.getElementById("woat-speech-text"),
	woatSpeechProg = 0;

function woatSpeechContainerOpen() {
	woatSpeech.style.width = "25%";
	woatSpeech.style.height = "20%";
	woatSpeechCircles.style.opacity = "0";
	woatSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		woatSpeechCircles.classList.remove("flex");
		woatSpeechCircles.classList.add("hidden");
		woatSpeechLabel.style.opacity = "1";
		woatSpeechText.classList.remove("hidden");
		woatSpeechText.innerHTML = woatSpeechArr[woatSpeechProg];
	}, 300);
	setTimeout(function () {
		woatSpeechText.style.opacity = "1";
	}, 500);
	woatSpeechOpen = true;
}

function woatSpeechContainerClose() {
	woatSpeechText.style.opacity = "0";
	woatSpeechLabel.style.opacity = "0";
	woatSpeechButton.classList.add("hidden");
	setTimeout(function () {
		woatSpeech.style.width = "8%";
		woatSpeech.style.height = "6%";
		woatSpeechText.classList.add("hidden");
		woatSpeechCircles.classList.remove("hidden");
		woatSpeechCircles.classList.add("flex");
		woatSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		woatSpeechCircles.style.opacity = "1";
	}, 500);
	woatSpeechOpen = false;
}

function woatDialogueFreeze() {
	woat.style.pointerEvents = "none";
	setTimeout(function () {
		woat.style.pointerEvents = "auto";
	}, 700);

	if (woatSpeechOpen == true) {
		woatSpeechButton.classList.add("hidden");
		woatSpeechButton.style.opacity = "0";
		setTimeout(function () {
			woatSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			woatSpeechButton.style.opacity = "1";
		}, 700);
	}
}

woat.addEventListener("click", function () {
	if (summitSceneComplete == false) {
		if (woatInit == false || havePie == false) {
			if (woatSpeechOpen == false) {
				woatSpeechContainerOpen();
			} else if (woatSpeechProg < woatSpeechArr.length - 5) {
				woatSpeechProg++;
				woatSpeechText.style.opacity = "0";
				setTimeout(function () {
					woatSpeechText.innerHTML = woatSpeechArr[woatSpeechProg];
					woatSpeechText.style.opacity = "1";
				}, 300);

			} else {
				woatSpeechProg = 0;
				woatSpeechContainerClose();
				woatInit = true;
			}
		} else {
			if (woatSpeechOpen == false) {
				woatSpeechProg = 8;
				woatSpeechContainerOpen();
			} else if (woatSpeechProg < woatSpeechArr.length - 1) {
				woatSpeechProg++;
				woatSpeechText.style.opacity = "0";
				setTimeout(function () {
					woatSpeechText.innerHTML = woatSpeechArr[woatSpeechProg];
					woatSpeechText.style.opacity = "1";
				}, 300);
			} else {
				woatSpeechContainerClose();
				setTimeout(function () {
					summitSceneComplete = true;
					woatMedalGet();
				}, 300);
			}
		}
	} else {

		if (woatSpeechOpen == false) {
			woatSpeechProg = 10;
			woatSpeechContainerOpen();
		} else if (woatSpeechProg < woatSpeechArr.length - 2) {
			woatSpeechProg++;
			woatSpeechText.style.opacity = "0";
			setTimeout(function () {
				woatSpeechText.innerHTML = woatSpeechArr[woatSpeechProg];
				woatSpeechText.style.opacity = "1";
			}, 300);
		} else {
			woatSpeechContainerClose();
		}
	}
	woatDialogueFreeze();
});

// 3.05 - Kenneth Interactions

var kenneth = document.getElementById("kenneth-container"),
	kennethInit = false,
	haveCharger = false,
	chargerIsFull = false,
	kennethSpeech = document.getElementById("kenneth-speech-container"),
	kennethSpeechOpen = false,
	kennethSpeechCircles = document.getElementById("kenneth-speech-circle-container"),
	kennethSpeechLabel = document.getElementById("kenneth-speech-label"),
	kennethSpeechButton = document.getElementById("kenneth-speech-button"),
	kennethSpeechText = document.getElementById("kenneth-speech-text"),
	kennethSpeechProg = 0;

var generator = document.getElementById("caveinteriorscene-generator"),
	generatorProg = 0;

function kennethSpeechContainerOpen() {
	kennethSpeech.style.width = "25%";
	kennethSpeech.style.height = "20%";
	kennethSpeechCircles.style.opacity = "0";
	kennethSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		kennethSpeechCircles.classList.remove("flex");
		kennethSpeechCircles.classList.add("hidden");
		kennethSpeechLabel.style.opacity = "1";
		kennethSpeechText.classList.remove("hidden");
		kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
	}, 300);
	setTimeout(function () {
		kennethSpeechText.style.opacity = "1";
	}, 500);
	kennethSpeechOpen = true;
}

function kennethSpeechContainerClose() {
	kennethSpeechText.style.opacity = "0";
	kennethSpeechLabel.style.opacity = "0";
	kennethSpeechButton.classList.add("hidden");
	setTimeout(function () {
		kennethSpeech.style.width = "8%";
		kennethSpeech.style.height = "6%";
		kennethSpeechText.classList.add("hidden");
		kennethSpeechCircles.classList.remove("hidden");
		kennethSpeechCircles.classList.add("flex");
		kennethSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		kennethSpeechCircles.style.opacity = "1";
	}, 500);
	kennethSpeechOpen = false;
}

function kennethDialogueFreeze() {
	kenneth.style.pointerEvents = "none";
	setTimeout(function () {
		kenneth.style.pointerEvents = "auto";
	}, 700);

	if (kennethSpeechOpen == true) {
		kennethSpeechButton.classList.add("hidden");
		kennethSpeechButton.style.opacity = "0";
		setTimeout(function () {
			kennethSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			kennethSpeechButton.style.opacity = "1";
		}, 700);
	}
}

kenneth.addEventListener("click", function () {
	if (haveCharger == false) {
		if (kennethSpeechOpen == false) {
			kennethSpeechProg = 0;
			kennethSpeechContainerOpen();
		} else if (kennethSpeechProg < kennethSpeechArr.length - 11) {
			kennethSpeechProg++;
			kennethSpeechText.style.opacity = "0";
			setTimeout(function () {
				kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
				kennethSpeechText.style.opacity = "1";
			}, 300);
		} else {
			kennethSpeechProg = 0;
			chargerGet();
			kennethSpeechContainerClose();
			generator.style.animation = "oven-pulse 2s 2";
			setTimeout(function () {
				generator.style.animation = "none";
			}, 3000);
		}

	} else {
		if (generatorProg < 3) {

			if (chargerIsFull == false && user.berryCount >= 5) {
				if (kennethSpeechOpen == false) {
					kennethSpeechProg = 13;
					kennethSpeechContainerOpen();
				} else if (kennethSpeechProg < kennethSpeechArr.length - 11) {
					kennethSpeechProg++;
					kennethSpeechText.style.opacity = "0";
					setTimeout(function () {
						kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
						kennethSpeechText.style.opacity = "1";
					}, 300);
				} else {
					kennethSpeechProg = 0;
					kennethSpeechContainerClose();
				}
			} else if (chargerIsFull == true) {
				if (kennethSpeechOpen == false) {
					kennethSpeechProg = 16;
					kennethSpeechContainerOpen();
				} else if (kennethSpeechProg < kennethSpeechArr.length - 8) {
					kennethSpeechProg++;
					kennethSpeechText.style.opacity = "0";
					setTimeout(function () {
						kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
						kennethSpeechText.style.opacity = "1";
					}, 300);
				} else {
					kennethSpeechProg = 0;
					kennethSpeechContainerClose();
				}
			} else {
				if (kennethSpeechOpen == false) {
					kennethSpeechProg = 13;
					kennethSpeechContainerOpen();
				} else if (kennethSpeechProg < kennethSpeechArr.length - 11) {
					kennethSpeechProg++;
					kennethSpeechText.style.opacity = "0";
					setTimeout(function () {
						kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
						kennethSpeechText.style.opacity = "1";
					}, 300);
				} else {
					kennethSpeechProg = 0;
					kennethSpeechContainerClose();
				}
			}
		} else {
			if (kennethSpeechOpen == false) {
				kennethSpeechProg = 20;
				kennethSpeechContainerOpen();
			} else if (kennethSpeechProg < kennethSpeechArr.length - 1) {
				kennethSpeechProg++;
				kennethSpeechText.style.opacity = "0";
				setTimeout(function () {
					kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
					kennethSpeechText.style.opacity = "1";
				}, 300);
			} else {
				kennethSpeechProg = 0;
				kennethSpeechContainerClose();
			}
		}
	}
	kennethDialogueFreeze();
});

generator.addEventListener("click", function () {
	if (haveCharger == true && generatorProg < 3) {
		if (chargerIsFull == false && user.berryCount >= 5) {
			chargerFull();
			generatorProg++;
			berryDec5();
		} else if (chargerIsFull == true) {
			if (kennethSpeechOpen == false) {
				kennethSpeechProg = 16;
				kennethSpeechContainerOpen();
			} else if (kennethSpeechProg < kennethSpeechArr.length - 8) {
				kennethSpeechProg++;
				kennethSpeechText.style.opacity = "0";
				setTimeout(function () {
					kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
					kennethSpeechText.style.opacity = "1";
				}, 300);
			} else {
				kennethSpeechProg = 0;
				kennethSpeechContainerClose();
			}
			kennethDialogueFreeze();
		} else {
			if (kennethSpeechOpen == false) {
				kennethSpeechProg = 13;
				kennethSpeechContainerOpen();
			} else if (kennethSpeechProg < kennethSpeechArr.length - 11) {
				kennethSpeechProg++;
				kennethSpeechText.style.opacity = "0";
				setTimeout(function () {
					kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
					kennethSpeechText.style.opacity = "1";
				}, 300);
			} else {
				kennethSpeechProg = 0;
				kennethSpeechContainerClose();
			}
			kennethDialogueFreeze();
		}
	} else if (haveCharger == true && generatorProg == 3) {
		if (kennethSpeechOpen == false) {
			kennethSpeechProg = 20;
			kennethSpeechContainerOpen();
		} else if (kennethSpeechProg < kennethSpeechArr.length - 1) {
			kennethSpeechProg++;
			kennethSpeechText.style.opacity = "0";
			setTimeout(function () {
				kennethSpeechText.innerHTML = kennethSpeechArr[kennethSpeechProg];
				kennethSpeechText.style.opacity = "1";
			}, 300);
		} else {
			kennethSpeechProg = 0;
			kennethSpeechContainerClose();
		}
		kennethDialogueFreeze();
	}
});

// 3.06 - Brobot Interactions

var brobot = document.getElementById("brobot-container"),
	brobotCharModel = document.getElementById("brobot"),
	brobotInit = false,
	brobotChargeLevel = 0,
	brobotComplete = false,
	brobotSpeech = document.getElementById("brobot-speech-container"),
	brobotSpeechOpen = false,
	brobotSpeechCircles = document.getElementById("brobot-speech-circle-container"),
	brobotSpeechLabel = document.getElementById("brobot-speech-label"),
	brobotSpeechButton = document.getElementById("brobot-speech-button"),
	brobotSpeechText = document.getElementById("brobot-speech-text"),
	brobotSpeechProg = 0;

function brobotSpeechContainerOpen() {
	brobotSpeech.style.width = "25%";
	brobotSpeech.style.height = "20%";
	brobotSpeechCircles.style.opacity = "0";
	brobotSpeechLabel.classList.remove("hidden");
	setTimeout(function () {
		brobotSpeechCircles.classList.remove("flex");
		brobotSpeechCircles.classList.add("hidden");
		brobotSpeechLabel.style.opacity = "1";
		brobotSpeechText.classList.remove("hidden");
		brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
	}, 300);
	setTimeout(function () {
		brobotSpeechText.style.opacity = "1";
	}, 500);
	brobotSpeechOpen = true;
}

function brobotSpeechContainerClose() {
	brobotSpeechText.style.opacity = "0";
	brobotSpeechLabel.style.opacity = "0";
	brobotSpeechButton.classList.add("hidden");
	setTimeout(function () {
		brobotSpeech.style.width = "8%";
		brobotSpeech.style.height = "6%";
		brobotSpeechText.classList.add("hidden");
		brobotSpeechCircles.classList.remove("hidden");
		brobotSpeechCircles.classList.add("flex");
		brobotSpeechLabel.classList.add("hidden");
	}, 300);
	setTimeout(function () {
		brobotSpeechCircles.style.opacity = "1";
	}, 500);
	brobotSpeechOpen = false;
}

function brobotDialogueFreeze() {
	brobot.style.pointerEvents = "none";
	setTimeout(function () {
		brobot.style.pointerEvents = "auto";
	}, 700);

	if (brobotSpeechOpen == true) {
		brobotSpeechButton.classList.add("hidden");
		brobotSpeechButton.style.opacity = "0";
		setTimeout(function () {
			brobotSpeechButton.classList.remove("hidden");
		}, 400);
		setTimeout(function () {
			brobotSpeechButton.style.opacity = "1";
		}, 700);
	}
}

brobot.addEventListener("click", function () {
	if (forestSceneComplete == false) {
		if (brobotInit == false) {
			if (brobotSpeechOpen == false) {
				brobotSpeechContainerOpen();
			} else if (brobotSpeechProg < brobotSpeechArr.length - 17) {
				brobotSpeechProg++;
				brobotSpeechText.style.opacity = "0";
				setTimeout(function () {
					brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
					brobotSpeechText.style.opacity = "1";
				}, 300);
			} else {
				brobotSpeechProg = 0;
				brobotSpeechContainerClose();
				brobotInit = true;
			}
		} else if (brobotChargeLevel == 0 && chargerIsFull == true) {
			chargerEmpty();
			setTimeout(function () {
				brobotSpeechProg = 6;
				brobotSpeechContainerOpen();
				brobotDialogueFreeze();
				brobotChargeLevel = 1;
			}, 2000);
		} else if (brobotChargeLevel == 1 && chargerIsFull == false) {
			if (brobotSpeechOpen == false) {
				brobotSpeechProg = 6;
				brobotSpeechContainerOpen();
			} else if (brobotSpeechProg < brobotSpeechArr.length - 14) {
				brobotSpeechProg++;
				brobotSpeechText.style.opacity = "0";
				setTimeout(function () {
					brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
					brobotSpeechText.style.opacity = "1";
				}, 300);
			} else {
				brobotSpeechContainerClose();
			}
		} else if (brobotChargeLevel == 1 && chargerIsFull == true) {
			chargerEmpty();
			setTimeout(function () {
				brobotSpeechProg = 10;
				brobotSpeechContainerOpen();
				brobotDialogueFreeze();
				brobotChargeLevel = 2;
			}, 2000);
		} else if (brobotChargeLevel == 2 && chargerIsFull == false) {
			if (brobotSpeechOpen == false) {
				brobotSpeechProg = 10;
				brobotSpeechContainerOpen();
			} else if (brobotSpeechProg < brobotSpeechArr.length - 10) {
				brobotSpeechProg++;
				brobotSpeechText.style.opacity = "0";
				setTimeout(function () {
					brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
					brobotSpeechText.style.opacity = "1";
				}, 300);
			} else {
				brobotSpeechContainerClose();
			}
		} else {
			chargerEmpty();
			setTimeout(function () {
				brobot.style.opacity = "0";
				setTimeout(function () {
					brobotCharModel.src = "images/npc/brobot-charged.svg";
					setTimeout(function () {
						brobot.style.opacity = "1";
						setTimeout(function () {
							brobotSpeechProg = 17;
							brobotSpeechContainerOpen();
							brobotDialogueFreeze();
							brobotChargeLevel = 3;
							forestSceneComplete = true;
						}, 300);
					}, 150)
				}, 300);
			}, 2000);
		}
	} else if (brobotComplete == false) {


		if (brobotSpeechOpen == false) {
			brobotSpeechProg = 17;
			brobotSpeechContainerOpen();
		} else if (brobotSpeechProg < brobotSpeechArr.length - 1) {
			brobotSpeechProg++;
			brobotSpeechText.style.opacity = "0";
			setTimeout(function () {
				brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
				brobotSpeechText.style.opacity = "1";
			}, 300);
		} else {
			brobotComplete = true;
			brobotSpeechContainerClose();
			brobotMedalGet();
		}

	} else {
		if (brobotSpeechOpen == false) {
			brobotSpeechProg = 17;
			brobotSpeechContainerOpen();
		} else if (brobotSpeechProg < brobotSpeechArr.length - 5) {
			brobotSpeechProg++;
			brobotSpeechText.style.opacity = "0";
			setTimeout(function () {
				brobotSpeechText.innerHTML = brobotSpeechArr[brobotSpeechProg];
				brobotSpeechText.style.opacity = "1";
			}, 300);
		} else {
			brobotComplete = true;
			brobotSpeechContainerClose();
		}
	}
	brobotDialogueFreeze();
});

// 4.01 - Path Scene Berries

var pathBerry1 = document.getElementById("pathscene-berry-1"),
	pathBerry2 = document.getElementById("pathscene-berry-2"),
	pathBerry3 = document.getElementById("pathscene-berry-3"),
	pathBerry4 = document.getElementById("pathscene-berry-4"),
	pathBerry5 = document.getElementById("pathscene-berry-5"),
	pathBerry6 = document.getElementById("pathscene-berry-6"),
	pathBerry7 = document.getElementById("pathscene-berry-7"),
	pathBerry8 = document.getElementById("pathscene-berry-8");

pathBerry1.addEventListener("click", function () {
	berryInc();
	pathBerry1.style.opacity = "0";
	setTimeout(function () {
		pathBerry1.classList.add("hidden");
	}, 300);
});

pathBerry2.addEventListener("click", function () {
	berryInc();
	pathBerry2.style.opacity = "0";
	setTimeout(function () {
		pathBerry2.classList.add("hidden");
	}, 300);
});

pathBerry3.addEventListener("click", function () {
	berryInc();
	pathBerry3.style.opacity = "0";
	setTimeout(function () {
		pathBerry3.classList.add("hidden");
	}, 300);
});

pathBerry4.addEventListener("click", function () {
	berryInc();
	pathBerry4.style.opacity = "0";
	setTimeout(function () {
		pathBerry4.classList.add("hidden");
	}, 300);
});

pathBerry5.addEventListener("click", function () {
	berryInc();
	pathBerry5.style.opacity = "0";
	setTimeout(function () {
		pathBerry5.classList.add("hidden");
	}, 300);
});

pathBerry6.addEventListener("click", function () {
	berryInc();
	pathBerry6.style.opacity = "0";
	setTimeout(function () {
		pathBerry6.classList.add("hidden");
	}, 300);
});

pathBerry7.addEventListener("click", function () {
	berryInc();
	pathBerry7.style.opacity = "0";
	setTimeout(function () {
		pathBerry7.classList.add("hidden");
	}, 300);
});

pathBerry8.addEventListener("click", function () {
	berryInc();
	pathBerry8.style.opacity = "0";
	setTimeout(function () {
		pathBerry8.classList.add("hidden");
	}, 300);
});

// 4.02 - Bridge Scene Berries

var bridgeBerry1 = document.getElementById("bridgescene-berry-1"),
	bridgeBerry2 = document.getElementById("bridgescene-berry-2"),
	bridgeBerry3 = document.getElementById("bridgescene-berry-3");

bridgeBerry1.addEventListener("click", function () {
	berryInc();
	bridgeBerry1.style.opacity = "0";
	setTimeout(function () {
		bridgeBerry1.classList.add("hidden");
	}, 300);
});

bridgeBerry2.addEventListener("click", function () {
	berryInc();
	bridgeBerry2.style.opacity = "0";
	setTimeout(function () {
		bridgeBerry2.classList.add("hidden");
	}, 300);
});

bridgeBerry3.addEventListener("click", function () {
	berryInc();
	bridgeBerry3.style.opacity = "0";
	setTimeout(function () {
		bridgeBerry3.classList.add("hidden");
	}, 300);
});

// 4.03 - House Exterior Scene Berries

var houseExtBerry1 = document.getElementById("houseexteriorscene-berry-1"),
	houseExtBerry2 = document.getElementById("houseexteriorscene-berry-2"),
	houseExtBerry3 = document.getElementById("houseexteriorscene-berry-3"),
	houseExtBerry4 = document.getElementById("houseexteriorscene-berry-4");

houseExtBerry1.addEventListener("click", function () {
	berryInc();
	houseExtBerry1.style.opacity = "0";
	setTimeout(function () {
		houseExtBerry1.classList.add("hidden");
	}, 300);
});

houseExtBerry2.addEventListener("click", function () {
	berryInc();
	houseExtBerry2.style.opacity = "0";
	setTimeout(function () {
		houseExtBerry2.classList.add("hidden");
	}, 300);
});

houseExtBerry3.addEventListener("click", function () {
	berryInc();
	houseExtBerry3.style.opacity = "0";
	setTimeout(function () {
		houseExtBerry3.classList.add("hidden");
	}, 300);
});

houseExtBerry4.addEventListener("click", function () {
	berryInc();
	houseExtBerry4.style.opacity = "0";
	setTimeout(function () {
		houseExtBerry4.classList.add("hidden");
	}, 300);
});

// 4.04 - Crossroads Scene Berries

var crossroadsBerry1 = document.getElementById("crossroadsscene-berry-1"),
	crossroadsBerry2 = document.getElementById("crossroadsscene-berry-2"),
	crossroadsBerry3 = document.getElementById("crossroadsscene-berry-3"),
	crossroadsBerry4 = document.getElementById("crossroadsscene-berry-4");

crossroadsBerry1.addEventListener("click", function () {
	berryInc();
	crossroadsBerry1.style.opacity = "0";
	setTimeout(function () {
		crossroadsBerry1.classList.add("hidden");
	}, 300);
});

crossroadsBerry2.addEventListener("click", function () {
	berryInc();
	crossroadsBerry2.style.opacity = "0";
	setTimeout(function () {
		crossroadsBerry2.classList.add("hidden");
	}, 300);
});

crossroadsBerry3.addEventListener("click", function () {
	berryInc();
	crossroadsBerry3.style.opacity = "0";
	setTimeout(function () {
		crossroadsBerry3.classList.add("hidden");
	}, 300);
});

crossroadsBerry4.addEventListener("click", function () {
	berryInc();
	crossroadsBerry4.style.opacity = "0";
	setTimeout(function () {
		crossroadsBerry4.classList.add("hidden");
	}, 300);
});

// 4.05 - Forest Scene Berries

var forestBerry1 = document.getElementById("forestscene-berry-1"),
	forestBerry2 = document.getElementById("forestscene-berry-2"),
	forestBerry3 = document.getElementById("forestscene-berry-3"),
	forestBerry4 = document.getElementById("forestscene-berry-4"),
	forestBerry5 = document.getElementById("forestscene-berry-5"),
	forestBerry6 = document.getElementById("forestscene-berry-6"),
	forestBerry7 = document.getElementById("forestscene-berry-7"),
	forestBerry8 = document.getElementById("forestscene-berry-8");

forestBerry1.addEventListener("click", function () {
	berryInc();
	forestBerry1.style.opacity = "0";
	setTimeout(function () {
		forestBerry1.classList.add("hidden");
	}, 300);
});

forestBerry2.addEventListener("click", function () {
	berryInc();
	forestBerry2.style.opacity = "0";
	setTimeout(function () {
		forestBerry2.classList.add("hidden");
	}, 300);
});

forestBerry3.addEventListener("click", function () {
	berryInc();
	forestBerry3.style.opacity = "0";
	setTimeout(function () {
		forestBerry3.classList.add("hidden");
	}, 300);
});

forestBerry4.addEventListener("click", function () {
	berryInc();
	forestBerry4.style.opacity = "0";
	setTimeout(function () {
		forestBerry4.classList.add("hidden");
	}, 300);
});

forestBerry5.addEventListener("click", function () {
	berryInc();
	forestBerry5.style.opacity = "0";
	setTimeout(function () {
		forestBerry5.classList.add("hidden");
	}, 300);
});

forestBerry6.addEventListener("click", function () {
	berryInc();
	forestBerry6.style.opacity = "0";
	setTimeout(function () {
		forestBerry6.classList.add("hidden");
	}, 300);
});

forestBerry7.addEventListener("click", function () {
	berryInc();
	forestBerry7.style.opacity = "0";
	setTimeout(function () {
		forestBerry7.classList.add("hidden");
	}, 300);
});

forestBerry8.addEventListener("click", function () {
	berryInc();
	forestBerry8.style.opacity = "0";
	setTimeout(function () {
		forestBerry8.classList.add("hidden");
	}, 300);
});

// 4.06 - Cave Exterior Scene Berries

var caveExtBerry1 = document.getElementById("caveexteriorscene-berry-1"),
	caveExtBerry2 = document.getElementById("caveexteriorscene-berry-2"),
	caveExtBerry3 = document.getElementById("caveexteriorscene-berry-3"),
	caveExtBerry4 = document.getElementById("caveexteriorscene-berry-4");

caveExtBerry1.addEventListener("click", function () {
	berryInc();
	caveExtBerry1.style.opacity = "0";
	setTimeout(function () {
		caveExtBerry1.classList.add("hidden");
	}, 300);
});

caveExtBerry2.addEventListener("click", function () {
	berryInc();
	caveExtBerry2.style.opacity = "0";
	setTimeout(function () {
		caveExtBerry2.classList.add("hidden");
	}, 300);
});

caveExtBerry3.addEventListener("click", function () {
	berryInc();
	caveExtBerry3.style.opacity = "0";
	setTimeout(function () {
		caveExtBerry3.classList.add("hidden");
	}, 300);
});


// SHORTCUTS

jamesInit = true;
woatInit = true;
tabethaInit = true;
//user.berryCount = 100;
//chargerIsFull = true;