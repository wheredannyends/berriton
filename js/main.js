// SPLASH SCREEN

var splashContainer = document.getElementById("splash-container"),
	splashStart = document.getElementById("splash-start");

splashStart.addEventListener("click", function () {
	splashContainer.style.animation = "slide-totop .5s forwards";
	setTimeout(function () {
		splashContainer.classList.add("hidden");
		charSelContainer.classList.remove("hidden");
		charSelContainer.classList.add("flex");
	}, 300)
});

// CHARACTER SELECTION SCREEN

var charSelPreview = document.getElementById("char-sel-preview"),
	charSelLeft = document.getElementById("char-sel-left"),
	charSelRight = document.getElementById("char-sel-right"),
	charSelContainer = document.getElementById("char-sel-container"),
	charSelArr = ["images/characters/racoon.svg", "images/characters/lion.svg"],
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
	pathScene = document.getElementById("pathscene");

charSelSub.addEventListener("click", function () {
	charSelContainer.style.animation = "slide-totop .5s forwards";
	setTimeout(function(){
		pathScene.classList.remove("hidden");
	}, 300);
	setTimeout(function(){
		pathScene.style.opacity = "1";
	}, 500);
	
	
})

// LOADER

$(document).ready(function () {
	$("#loading-screen").delay(2000).fadeOut(500);
});