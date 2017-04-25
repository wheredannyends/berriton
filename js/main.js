// USER SETTINGS

var username = "Barry";

// SCENE VARIABLES

var pathScene = document.getElementById("pathscene"),
	bridgeScene = document.getElementById("bridgescene"),
	houseExteriorScene = document.getElementById("houseexteriorscene"),
	highwayScene = document.getElementById("highwayscene"),
	summitScene = document.getElementById("summitscene");


// SPLASH SCREEN

var splashContainer = document.getElementById("splash-container"),
	splashStart = document.getElementById("splash-start");

var curScene = null;

splashStart.addEventListener("click", function () {
	splashContainer.style.animation = "slide-totop .5s forwards";
	setTimeout(function () {
		splashContainer.classList.add("hidden");
		charSelContainer.classList.remove("hidden");
		charSelContainer.classList.add("flex");
	}, 300)
});

// HUD

var hud = document.getElementById("hud-container"),
	berryCountDisp = document.getElementById("hud-berry-count");

// BERRIES

var berryCount = 0;

var pathBerry1 = document.getElementById("pathscene-berry-1"),
	pathBerry2 = document.getElementById("pathscene-berry-2"),
	pathBerry3 = document.getElementById("pathscene-berry-3"),
	pathBerry4 = document.getElementById("pathscene-berry-4"),
	pathBerry5 = document.getElementById("pathscene-berry-5"),
	pathBerry6 = document.getElementById("pathscene-berry-6"),
	pathBerry7 = document.getElementById("pathscene-berry-7"),
	pathBerry8 = document.getElementById("pathscene-berry-8");

function berryInc() {
	berryCount++;
	berryCountDisp.style.opacity = "0";
	setTimeout(function () {
		berryCountDisp.innerText = berryCount;
		berryCountDisp.style.opacity = "1";
	}, 300);
}

function berryDec5() {
	berryCount -= 5;
	berryCountDisp.style.opacity = "0";
	setTimeout(function () {
		berryCountDisp.innerText = berryCount;
		berryCountDisp.style.opacity = "1";
	}, 300);
}

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


// CHARACTER SELECTION SCREEN

var charSelPreview = document.getElementById("char-sel-preview"),
	charSelLeft = document.getElementById("char-sel-left"),
	charSelRight = document.getElementById("char-sel-right"),
	charSelContainer = document.getElementById("char-sel-container"),
	charSelArr = ["images/characters/racoon.svg", "images/characters/lion.svg", "images/characters/penguin.svg", "images/characters/pig.svg"],
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

charSelSub.addEventListener("click", function () {
	username = charSelName.value;
	console.log(username);
	charSelContainer.style.animation = "slide-totop 0.5s forwards";
	setTimeout(function () {
		pathScene.classList.remove("hidden");
		forwardButContainer.classList.remove("hidden");
		hud.classList.remove("hidden");
	}, 300);
	setTimeout(function () {
		pathScene.style.opacity = "1";
		forwardButContainer.style.opacity = "1";
		hud.style.opacity = "1";
	}, 500);

	curScene = "pathScene";

});

// Forward Buttons - Change scenes

var forwardBut1 = document.getElementById("forward-but-1"),
	forwardBut2 = document.getElementById("forward-but-2");

var bridgeSceneComplete = false;

function moveForwardButs() {
	forwardBut1.classList.remove("hidden");
	forwardBut2.classList.remove("hidden");

	if (curScene == "pathScene") {
		forwardBut1.style.top = "44%";
		forwardBut1.style.left = "47%";
		forwardBut1.style.transform = "none";

		forwardBut2.style.top = "70%";
		forwardBut2.style.left = "22%";
		forwardBut2.style.transform = "none";
	}

	if (curScene == "bridgeScene") {
		forwardBut1.style.top = "23%";
		forwardBut1.style.left = "5%";
		forwardBut1.style.transform = "rotate(-90deg)";

		if (bridgeSceneComplete == false) {
			forwardBut1.classList.add("hidden");
		} else {
			forwardBut1.classList.remove("hidden");
		}

		forwardBut2.style.top = "60%";
		forwardBut2.style.left = "90%";
		forwardBut2.style.transform = "rotate(180deg)";
	}

	if (curScene == "houseExteriorScene") {
		forwardBut1.style.top = "64%";
		forwardBut1.style.left = "5%";
		forwardBut1.style.transform = "rotate(-90deg)";

		forwardBut2.style.top = "64%";
		forwardBut2.style.left = "90%";
		forwardBut2.style.transform = "rotate(180deg)";
	}

	if (curScene == "highwayScene") {
		forwardBut1.style.top = "40%";
		forwardBut1.style.left = "2%";
		forwardBut1.style.transform = "rotate(-90deg)";

		forwardBut2.style.top = "56%";
		forwardBut2.style.left = "91%";
		forwardBut2.style.transform = "rotate(180deg)";
	}

	if (curScene == "summitScene") {
		forwardBut1.style.top = "40%";
		forwardBut1.style.left = "2%";

		forwardBut2.style.top = "80%";
		forwardBut2.style.left = "60%";
		forwardBut2.style.transform = "rotate(180deg)";


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
		}, 300);
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
	brentSpeech = document.getElementById("brent-speech-container"),
	brentSpeechOpen = false,
	brentSpeechCircles = document.getElementById("brent-speech-circle-container"),
	brentSpeechLabel = document.getElementById("brent-speech-label"),
	brentSpeechText = document.getElementById("brent-speech-text"),
	brentSpeechProg = 0,
	brentSpeechArr = ["Hey <span class=\"red-text\">" + username + "</span> this is MY bridge.", "Look here...", "If you want to use my things,", "You have to give me something in return.", "I’m pretty hungry right now...", "But if I go anywhere...", " someone might touch my bridge!", "Get me some food. *hmph*", "Wow!", "I had you pegged as some kind of dork...", "but you’re actually pretty cool!", "You can use my bridge, I guess..."];

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

});

brent.addEventListener("click", function () {
	if (bridgeSceneComplete == false) {
		if (berryCount < 5) {
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
			}
		} else {
			if (brentSpeechOpen == false) {
				brentSpeechProg = 8;
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
			brentSpeechProg = 8;
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

// LOADER

$(document).ready(function () {
	$("#loading-screen").fadeOut("slow");
});