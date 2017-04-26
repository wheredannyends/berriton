// USER SETTINGS

var user = {
	name: "Barry",
	charModelFront: "images/characters/raccoon-front.svg",
	charModelSide: "images/characters/raccoon-side.svg",
	berryCount: 0,
	goodieCount: 0,
	pieCount: 0,
	pieRecipe: 0
}

var pathScenePlayer = document.getElementById("pathscene-player-character"),
	bridgeScenePlayer = document.getElementById("bridgescene-player-character"),
	houseexteriorScenePlayer = document.getElementById("houseexteriorscene-player-character"),
	highwayScenePlayer = document.getElementById("highwayscene-player-character"),
	summitScenePlayer = document.getElementById("summitscene-player-character");

// SCENE VARIABLES

var pathScene = document.getElementById("pathscene"),
	bridgeScene = document.getElementById("bridgescene"),
	houseExteriorScene = document.getElementById("houseexteriorscene"),
	houseInteriorScene = document.getElementById("houseinteriorscene")
highwayScene = document.getElementById("highwayscene"),
	summitScene = document.getElementById("summitscene");

// ARRAY VARIABLES

var brentSpeechArr = [],
	jamesSpeechArr = [],
	tabethaSpeechArr = [],
	woatSpeechArr;




// BERRIES, PIES, & OTHER GOODIES

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

function pieRecipeInc() {
	user.pieRecipe++;
	user.goodieCount++;
	var newPieRecipe = document.createElement("img");
	newPieRecipe.src = "images/goodies/recipe.svg";
	newPieRecipe.alt = "Recipe";
	goodieDisp.appendChild(newPieRecipe);
	if (goodieDispVisible == false) {
		goodieContainer.classList.remove("hidden");
		setTimeout(function () {
			goodieContainer.style.opacity = "1";
		}, 300);
		goodieDispVisible = true;
	}
}

function pieInc() {
	user.pieCount++;
	user.goodieCount++;
	var newPie = document.createElement("img");
	newPie.src = "images/goodies/pie.svg";
	newPie.alt = "Pie";
	goodieDisp.appendChild(newPie);
	if (goodieDispVisible == false) {
		goodieContainer.classList.remove("hidden");
		setTimeout(function () {
			goodieContainer.style.opacity = "1";
		}, 300);
		goodieDispVisible = true;
	}
}

function pieDec() {
	user.pieCount--;
	user.goodieCount--;
	goodieDisp.removeChild(goodieDisp.childNodes[0]);
	if (user.goodieCount == 0) {
		goodieContainer.style.opacity = "0";
		setTimeout(function () {
			goodieContainer.classList.add("hidden");
		}, 300);
		goodieDispVisible = false;
	}
}

function pieRecipeDec() {
	user.pieRecipe--;
	user.goodieCount--;
	goodieDisp.removeChild(goodieDisp.childNodes[0]);
	if (user.goodieCount == 0) {
		goodieContainer.style.opacity = "0";
		setTimeout(function () {
			goodieContainer.classList.add("hidden");
		}, 300);
		goodieDispVisible = false;
	}
}

// SPLASH SCREEN

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

// HUD

var hud = document.getElementById("hud-container"),
	berryCountDisp = document.getElementById("hud-berry-count"),
	pieCountDisp = document.getElementById("hud-pie-count"),
	goodieContainer = document.getElementById("hud-goodies-container"),
	goodieDisp = document.getElementById("hud-goodies"),
	goodieArrow = document.getElementById("hud-goodies-arrow"),
	goodieDispVisible = false,
	goodieDispOpen = false;

hud.addEventListener("click", function () {
	if (goodieDispVisible == true) {
		if (goodieDispOpen == false) {
			for (var i = 0; i < goodieDisp.children.length; i++) {
				goodieDisp.children[i].style.width = "80%";
				goodieDisp.children[i].style.marginBottom = "10%";
			}
			goodieArrow.style.transform = "rotate(180deg)";
			goodieDispOpen = true;
		} else {
			for (var i = 0; i < goodieDisp.children.length; i++) {
				goodieDisp.children[i].style.width = "0";
				goodieDisp.children[i].style.marginBottom = "0";
			}
			goodieArrow.style.transform = "none";
			goodieDispOpen = false;
		}
	}
});

// CHARACTER SELECTION SCREEN

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

// SUBMIT USER INFO & BEGIN GAME

function setPlayerCharacter() {
	pathScenePlayer.src = user.charModelFront;
	bridgeScenePlayer.src = user.charModelSide;
	houseexteriorScenePlayer.src = user.charModelFront;
	highwayScenePlayer.src = user.charModelSide;
	summitScenePlayer.src = user.charModelSide;
}

charSelSub.addEventListener("click", function () {

	if (charSelName.value == "") {
		charSelName.placeholder = "You Don't Have A Name?"
	} else {

		// SET USERNAME

		user.name = charSelName.value;

		// SET DIALOGUE BASED ON NAME VALUE

		brentSpeechArr = ["Hey <span class=\"red-text\">" + user.name + "</span> this is MY bridge.", "Look here...", "If you want to use my things,", "You have to give me something in return.", "I’m pretty hungry right now...", "About <span class=\"blue-text\">5 berries</span> hungry I'd say...", "But if I go anywhere...", " someone might touch my bridge!", "Get me some food. *hmph*", "Wow!", "I had you pegged as some kind of dork...", "but you’re actually pretty cool!", "You can use my bridge, I guess..."];

		jamesSpeechArr = ["Psssst… over here <span class=\"red-text\">" + user.name + ".", "I hear that old koot in that there house...", "Serves up some pretty mean berry pie!", "Check it out...", "I ganked her recipe for berry pie,", "So I can have it all to myself!", "...", "What’s that?", "You think I should give it back?", "No. its mine!", "Tell you what...", "I'll come up with a quiz and you can earn it.", "If you can guess all the questions right...", "I’ll give you the recipe!", "But it will take some time...", "Maybe take a hike up the mountain over there.", "I'll whip it up in no time!", "Jeepers...", "You're back so soon!", "I'm still working on the quiz.", "Maybe Tabetha has a copy?", "Go check in with her at her place!", "Tabetha can't remember her own recipies!?", "I can't believe it!", "I'm still coming up with some questions", "If you wanna take a hike up the mountain...", "I'm sure it will be ready by the time you're back!", "I've been working on this quiz for hours!", "I just can't seem to crack the code...", "I'm sure I'll get later on!", "But there's no time right now...", "Anyway! I'll let you borrow the recipe for now...", "But I'll get it back once usability testing is over!", "I can guarantee it!"];

		tabethaSpeechArr = ["Oh hello <span class=\"red-text\">" + user.name + "</span>!", "My name is Tabetha.", "I’m the chef around here!", "I love to bake", "And like I've always said...", "The most important ingredient to any pie...", "...is <span class=\"blue-text\">love!</span>", "Sadly, my berry pie recipe has gone missing...", "I have searched everywhere!", "I’ve searched under the table...", "Behind the cabinet...", "In the chimney...", "I've even poked my head into the garburator and taken a peek!", "But, no luck...", "It's such a shame...", "I was about to bake a pie for my friend <span class=\"blue-text\">on the mountain.</span>", "Oooh ho ho!", "Thank you <span class=\"red-text\">" + user.name + "!", "Now, let me see what I need...", "Oh! I need some berries!", "Could you please grab me some berries?", "<span class=\"blue-text\">10</span> oughta do it!", "Alright! We're all set!", "Just head over to the oven and grab yourself a pie!"]

		woatSpeechArr = ["Hello <span class=\"red-text\">" + user.name + "</span> How goes it?", "The name’s Woat the Goat.", "I’m somewhat of the elder here in Berriton", "So check it out...", "Tabetha, the lovely lady in <span class=\"blue-text\">that house down there</span>,", "Told me she would have a pie ready for me this afternoon.", "It's now getting close to the afternoon...", "Do you think you could go see where my pie is?", "Haaaay yes!", "That’s what I was looking for!", "Thank you for the pie <span class=\"red-text\">" + user.name + "</span>", "See ya around!"];
// bear raccoon lion penguin pig panda
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
		console.log(user);
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



});

// FORWARD BUTTONS

var forwardBut1 = document.getElementById("forward-but-1"),
	forwardBut2 = document.getElementById("forward-but-2");

var bridgeSceneComplete = false,
	houseExteriorSceneComplete = false,
	houseInteriorSceneComplete = false,
	summitSceneComplete = false;

function moveForwardButs() {
	forwardBut1.classList.remove("hidden");
	forwardBut2.classList.remove("hidden");

	if (curScene == "pathScene") {
		forwardBut1.src = "images/ui-elements/forward-button-up.svg"
		forwardBut1.style.top = "44%";
		forwardBut1.style.left = "47%";

		forwardBut2.classList.add("hidden");
	}

	if (curScene == "bridgeScene") {
		forwardBut1.src = "images/ui-elements/forward-button-left.svg"
		forwardBut1.style.top = "23%";
		forwardBut1.style.left = "5%";

		if (bridgeSceneComplete == false) {
			forwardBut1.classList.add("hidden");
		} else {
			forwardBut1.classList.remove("hidden");
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

	// Hide Buttons

	if (curScene == "summitScene") {
		forwardBut1.style.opacity = "0";
	} else {
		forwardBut1.style.opacity = "1";
	}

}

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



});


forwardBut2.addEventListener("click", function () {

	// PATH to BRIDGE

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

	}

	// BRIDGE to HOUSE EXTERIOR
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

	}

	// HOUSE EXTERIOR to HIGHWAY
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

	}



	// HIGHWAY to SUMMIT
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

	}

});


// BRENT INTERACTIONS

var brent = document.getElementById("brent-container"),
	brentInit = false,
	brentSpeech = document.getElementById("brent-speech-container"),
	brentSpeechOpen = false,
	brentSpeechCircles = document.getElementById("brent-speech-circle-container"),
	brentSpeechLabel = document.getElementById("brent-speech-label"),
	brentSpeechText = document.getElementById("brent-speech-text"),
	brentSpeechProg = 0;

function brentSpeechContainerOpen() {
	brentSpeech.style.width = "25%";
	brentSpeech.style.height = "20%";
	brentSpeechCircles.style.opacity = "0";
	//		brentSpeechLabel.style.opacity = "0";
	setTimeout(function () {
		brentSpeechCircles.classList.remove("flex");
		brentSpeechCircles.classList.add("hidden");
		//			brentSpeechLabel.classList.add("hidden");
		brentSpeechText.classList.remove("hidden");
		brentSpeechText.innerHTML = brentSpeechArr[brentSpeechProg];
	}, 300);
	setTimeout(function () {
		brentSpeechText.style.opacity = "1";
	}, 500);
	brentSpeechOpen = true;
}

function brentSpeechContainerClose() {
	brentSpeechText.style.opacity = "0";
	setTimeout(function () {
		brentSpeech.style.width = "8%";
		brentSpeech.style.height = "6%";
		brentSpeechText.classList.add("hidden");
		brentSpeechCircles.classList.remove("hidden");
		brentSpeechCircles.classList.add("flex");
		//			brentSpeechLabel.classList.remove("hidden");
	}, 300);
	setTimeout(function () {
		brentSpeechCircles.style.opacity = "1";
		//			brentSpeechLabel.style.opacity = "1";
	}, 500);
	brentSpeechOpen = false;
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
				brentSpeechProg = 9;
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
			brentSpeechProg = 9;
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
		}
	}
});

// HOUSE INTERACTION

var houseExteriorHouse = document.getElementById("houseexteriorscene-house");

houseExteriorHouse.addEventListener("click", function () {
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

var james = document.getElementById("james-container"),
	jamesInit = false,
	jamesSpeech = document.getElementById("james-speech-container"),
	jamesSpeechOpen = false,
	jamesSpeechCircles = document.getElementById("james-speech-circle-container"),
	jamesSpeechLabel = document.getElementById("james-speech-label"),
	jamesSpeechText = document.getElementById("james-speech-text"),
	jamesSpeechProg = 0;

function jamesSpeechContainerOpen() {
	jamesSpeech.style.width = "25%";
	jamesSpeech.style.height = "20%";
	jamesSpeechCircles.style.opacity = "0";
	//		jamesSpeechLabel.style.opacity = "0";
	setTimeout(function () {
		jamesSpeechCircles.classList.remove("flex");
		jamesSpeechCircles.classList.add("hidden");
		//			jamesSpeechLabel.classList.add("hidden");
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
	setTimeout(function () {
		jamesSpeech.style.width = "8%";
		jamesSpeech.style.height = "6%";
		jamesSpeechText.classList.add("hidden");
		jamesSpeechCircles.classList.remove("hidden");
		jamesSpeechCircles.classList.add("flex");
		//			jamesSpeechLabel.classList.remove("hidden");
	}, 300);
	setTimeout(function () {
		jamesSpeechCircles.style.opacity = "1";
		//			jamesSpeechLabel.style.opacity = "1";
	}, 500);
	jamesSpeechOpen = false;
}

james.addEventListener("click", function () {
	if (houseExteriorSceneComplete == false) {
		if (jamesInit == false || (woatInit == false && tabethaInit == false)) {
			if (jamesSpeechOpen == false) {
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 18) {
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
			} else if (jamesSpeechProg < jamesSpeechArr.length - 13) {
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
			} else if (jamesSpeechProg < jamesSpeechArr.length - 8) {
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
		} else {
			if (jamesSpeechOpen == false) {
				jamesSpeechProg = 27;
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 1) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[jamesSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechContainerClose();
				setTimeout(function () {
					houseExteriorSceneComplete = true;
					pieRecipeInc();
				}, 300);
			}
		}
	} else {

		if (jamesSpeechOpen == false) {
			jamesSpeechProg = 27;
			jamesSpeechContainerOpen();
		} else if (jamesSpeechProg < jamesSpeechArr.length - 1) {
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
});




// TABETHA INTERACTIONS

var tabetha = document.getElementById("tabetha-container"),
	tabethaInit = false,
	recipeFoundInit = false,
	pieCooked = false,
	tabethaSpeech = document.getElementById("tabetha-speech-container"),
	tabethaSpeechOpen = false,
	tabethaSpeechCircles = document.getElementById("tabetha-speech-circle-container"),
	tabethaSpeechLabel = document.getElementById("tabetha-speech-label"),
	tabethaSpeechText = document.getElementById("tabetha-speech-text"),
	tabethaSpeechProg = 0,
	houseInteriorOven = document.getElementById("houseinteriorscene-oven");

function tabethaSpeechContainerOpen() {
	tabethaSpeech.style.width = "25%";
	tabethaSpeech.style.height = "20%";
	tabethaSpeechCircles.style.opacity = "0";
	//		tabethaSpeechLabel.style.opacity = "0";
	setTimeout(function () {
		tabethaSpeechCircles.classList.remove("flex");
		tabethaSpeechCircles.classList.add("hidden");
		//			tabethaSpeechLabel.classList.add("hidden");
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
	setTimeout(function () {
		tabethaSpeech.style.width = "8%";
		tabethaSpeech.style.height = "6%";
		tabethaSpeechText.classList.add("hidden");
		tabethaSpeechCircles.classList.remove("hidden");
		tabethaSpeechCircles.classList.add("flex");
		//			tabethaSpeechLabel.classList.remove("hidden");
	}, 300);
	setTimeout(function () {
		tabethaSpeechCircles.style.opacity = "1";
		//			tabethaSpeechLabel.style.opacity = "1";
	}, 500);
	tabethaSpeechOpen = false;
}

tabetha.addEventListener("click", function () {
	if (houseInteriorSceneComplete == false) {
		if (tabethaInit == false || user.pieRecipe < 1) {
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
					berryDec10();
					pieRecipeDec();
				}, 300);
			}
		}
	} else {

		if (tabethaSpeechOpen == false) {
			tabethaSpeechProg = 15;
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
		}
	}
});

houseInteriorOven.addEventListener("click", function () {
	if (houseInteriorSceneComplete == true && pieCooked == false) {
		pieInc();
		pieCooked = true;
	}
});

// WOAT INTERACTIONS

var woat = document.getElementById("woat-container"),
	woatInit = false,
	woatSpeech = document.getElementById("woat-speech-container"),
	woatSpeechOpen = false,
	woatSpeechCircles = document.getElementById("woat-speech-circle-container"),
	woatSpeechLabel = document.getElementById("woat-speech-label"),
	woatSpeechText = document.getElementById("woat-speech-text"),
	woatSpeechProg = 0;

function woatSpeechContainerOpen() {
	woatSpeech.style.width = "25%";
	woatSpeech.style.height = "20%";
	woatSpeechCircles.style.opacity = "0";
	//		woatSpeechLabel.style.opacity = "0";
	setTimeout(function () {
		woatSpeechCircles.classList.remove("flex");
		woatSpeechCircles.classList.add("hidden");
		//			woatSpeechLabel.classList.add("hidden");
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
	setTimeout(function () {
		woatSpeech.style.width = "8%";
		woatSpeech.style.height = "6%";
		woatSpeechText.classList.add("hidden");
		woatSpeechCircles.classList.remove("hidden");
		woatSpeechCircles.classList.add("flex");
		//			woatSpeechLabel.classList.remove("hidden");
	}, 300);
	setTimeout(function () {
		woatSpeechCircles.style.opacity = "1";
		//			woatSpeechLabel.style.opacity = "1";
	}, 500);
	woatSpeechOpen = false;
}

woat.addEventListener("click", function () {
	if (summitSceneComplete == false) {
		if (woatInit == false || user.pieCount < 1) {
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
					pieDec();
				}, 300);
			}
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
		}
	}
});


// BERRY COLLECTION

// PATH SCENE BERRIES

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

// BRIDGE SCENE BERRIES

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

// HOUSE EXTERIOR BERRIES

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


// LOADER

$(document).ready(function () {
	$("#loading-screen").delay(500).fadeOut("slow");
});
