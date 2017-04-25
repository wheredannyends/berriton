var brent = document.getElementById("brent"),
	brentSpeech = document.getElementById("brent-speech-container"),
	brentSpeechOpen = false,
	brentSpeechCircles = document.getElementById("brent-speech-circle-container"),
	brentSpeechText = document.getElementById("brent-speech-text"),
	brentSpeechProg = 0,
	brentSpeechArr = ["Hey “buddy” this is MY bridge.", "Look here...", "If you want to use my things,", "You have to give me something in return.", "I’m pretty hungry right now...", "But if I go anywhere...", " someone might touch my bridge!", "Get me some food. *hmph*"];

brentSpeech.addEventListener("click", function () {
	if (brentSpeechOpen == false) {
		brentSpeech.style.width = "25%";
		brentSpeech.style.height = "20%";
		brentSpeechCircles.style.opacity = "0";
		setTimeout(function () {
			brentSpeechCircles.classList.remove("flex");
			brentSpeechCircles.classList.add("hidden");
			brentSpeechText.classList.remove("hidden");
			brentSpeechText.innerText = brentSpeechArr[brentSpeechProg];
		}, 300);
		setTimeout(function () {
			brentSpeechText.style.opacity = "1";
		}, 500);
		brentSpeechOpen = true;
	} else if (brentSpeechProg < brentSpeechArr.length - 1) {
		brentSpeechProg++;
		brentSpeechText.style.opacity = "0";
		setTimeout(function () {
			brentSpeechText.innerText = brentSpeechArr[brentSpeechProg];
			brentSpeechText.style.opacity = "1";
		}, 300);
		
	} else {
		brentSpeechText.style.opacity = "0";
		setTimeout(function () {
			brentSpeech.style.width = "8%";
			brentSpeech.style.height = "6%";
			brentSpeechText.classList.add("hidden");
			brentSpeechProg = 0;
			brentSpeechCircles.classList.remove("hidden");
			brentSpeechCircles.classList.add("flex");
		}, 300);
		setTimeout(function () {
			brentSpeechCircles.style.opacity = "1";
		}, 500);
		brentSpeechOpen = false;
	}
});