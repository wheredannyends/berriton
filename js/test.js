// HOUSE EXTERIOR INTERACTIONS

var james = document.getElementById("james-container"),
	jamesSpeech = document.getElementById("james-speech-container"),
	jamesSpeechOpen = false,
	jamesSpeechCircles = document.getElementById("james-speech-circle-container"),
	jamesSpeechLabel = document.getElementById("james-speech-label"),
	jamesSpeechText = document.getElementById("james-speech-text"),
	jamesSpeechProg = 0,
	jamesQuiz = document.getElementById("james-quiz-container"),
	jamesQuizCanTake = false,
	jamesQuizPass = false,
	jamesQuizQuestion = document.getElementById("james-quiz-question"),
	jamesQuizProg = 0,
	jamesQuizInProg = false,
	jamesQuizOver = false,
	jamesQuizQuestionArr = ["What do the people of Berriton love?", "Who owns the Berriton bridge?", "What is the most important ingredient in pie?", "Who is the elder here in Berriton?"],
	jamesQuizAnswerArr = [""];

function jamesSpeechContainerOpen() {
	jamesSpeech.style.width = "25%";
	jamesSpeech.style.height = "20%";
	jamesSpeechCircles.style.opacity = "0";
	//		jamesSpeechLabel.style.opacity = "0";
	setTimeout(function () {
		jamesSpeechCircles.classList.remove("flex");
		jamesSpeechCircles.classList.add("hidden");
		//			jamesSpeechLabel.classList.add("hidden");

		if (jamesQuizCanTake == true && jamesQuizPass == false) {
			jamesQuizInProg = true;
			jamesQuiz.classList.remove("hidden");
			jamesQuiz.classList.add("flex");
			jamesQuestion.innerHTML = jamesQuizQuestionArr[jamesQuizProg];
			setTimeout(function () {
				jamesQuiz.style.opacity = "1";
			}, 500);
		} else {
			jamesSpeechText.classList.remove("hidden");
			jamesSpeechText.innerHTML = jamesSpeechQuestionArr[jamesSpeechProg];
			setTimeout(function () {
				jamesSpeechText.style.opacity = "1";
			}, 500);
		}
	}, 300);

	jamesSpeechOpen = true;
}

function jamesSpeechContainerClose() {
	if (jamesQuizInProg == true) {
		jamesQuiz.style.opacity = "0";
	} else {
		jamesSpeechText.style.opacity = "0";
	}
	setTimeout(function () {
		jamesSpeech.style.width = "8%";
		jamesSpeech.style.height = "6%";

		if (jamesQuizInProg == true) {
			jamesQuiz.classList.add("hidden")
		} else {
			jamesSpeechText.classList.add("hidden");
		}
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

// if scene challange not complete completed
	// if cannot take the quiz
		//// go away dialogue
	// if can take the quiz
		// let you take quiz dialogue
			//// quiz and block click
	// if passed quiz
		// if dont have recipe
			//// give recipe dialogue
		// if have recipe
			//// talk to tabetha dialogue

james.addEventListener("click", function(){
	// if scene challange not complete completed
	
	if (houseexteriorSceneComplete == false) {
		
		// if cannot take the quiz
		if (jamesQuizCanTake == false) {
			//// go away dialogue
		} 
		
		// if can take the quiz
		
		else if (jamesQuizCanTake == true && jamesQuizPass == false) {
			
			//quiz dialogue
			//quiz
		}
		
		else {
			
			if (user.pieRecipeGot == false) {
				//// give recipe dialogue
				user.pieRecipeGot = true;
				houseexteriorSceneComplete;
			}
			
		}
			

	} else {
		//// talk to tabetha
	}
	
	
	
});




/*james.addEventListener("click", function () {
	if (houseexteriorSceneComplete == false) {
		if (jamesQuizCanTake == false) {
			if (jamesSpeechOpen == false) {
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length - 4) {
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
		} else if (jamesQuizCanTake == true && jamesQuizPass == false) {




			// Open speech bubble and show dialogue



			// check to see if started but not completed quiz

			if (jamesQuizInProg == true && jamesQuizProg < jamesQuizQuestionArr.length) {

			}

			// check to see if completed quiz
			else if (jamesQuizOver == true) {

			}

			// don't do anything
			else {}

			//			jamesQuiz();
			//			
			//			if (jamesSpeechOpen == false) {
			//				jamesSpeechContainerOpen();
			//			} else if (jamesQuizProg < jamesQuizQuestionArr.length) {
			//				jamesQuizProg++;
			//				jamesQuiz.style.opacity = "0";
			//				setTimeout(function () {
			//					jamesQuizQuestion.innerHTML = jamesQuizQuestionArr[jamesSpeechProg];
			//					jamesQuizQuestion.style.opacity = "1";
			//				}, 300);
			//
			//			} else {
			//				jamesSpeechProg = 0;
			//				jamesSpeechContainerClose();
			//			}


		} else {
			jamesSpeechProg = 8;
			if (jamesSpeechOpen == false) {
				jamesSpeechContainerOpen();
			} else if (jamesSpeechProg < jamesSpeechArr.length) {
				jamesSpeechProg++;
				jamesSpeechText.style.opacity = "0";
				setTimeout(function () {
					jamesSpeechText.innerHTML = jamesSpeechArr[brentSpeechProg];
					jamesSpeechText.style.opacity = "1";
				}, 300);
			} else {
				jamesSpeechContainerClose();
				setTimeout(function () {
					houseexteriorSceneComplete = true;
					berryDec5();
					james.style.transform = "translate"
					forwardBut1.style.opacity = "0";
					forwardBut1.classList.remove("hidden");
					setTimeout(function () {
						forwardBut1.style.opacity = "1";
					}, 300);
				}, 300);
			}
		}
	} else {

		if (jamesSpeechOpen == false) {
			jamesSpeechProg = 8;
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
});*/