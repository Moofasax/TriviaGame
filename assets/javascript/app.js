//test data
var triviaTestData = [
	{
		"question": "If you dropped each of these objects from the same height on the moon, which would hit the ground first?",
		"choices": [
			"hammer",
			"feather",
			"golf ball",
			"all would hit at the same time"
			],
		"answer": 3,
		"giffPath": "assets/images/featherHammer.gif",
		"wrongGiff": "assets/images/wrongMoonAnswer.gif",
		"answerExplan": "Since there is no atmosphere on the moon, there is no air resistance to slow the objects as they fall. Since the acceleration of gravity is constant, and each object will experience the same acceleration, they will all hit the ground at the same time!"
	},
	{
		"question": "Which wavelength of in the Electromagnetic spectrum is currently used for night time power generation?",
		"choices": [
			"gamma",
			"microwave",
			"radio",
			"infrared"
			],
		"answer": 3,
		"giffPath": "assets/images/lightwaveSplit.gif",
		"wrongGiff": "assets/images/pendilumFail.gif",
		"answerExplan": "The Earth releases Infrared radition at night out into space as it cools, if you tune the doping of semi-conductors, you can generate a potential, and thus a voltage!"
	},
	{
		"question": "Albert Einstein started to talk at what age?",
		"choices": [
			"3",
			"1",
			"2",
			"4"
			],
		"answer": 3,
		"giffPath": "assets/images/funnyEinstein.gif",
		"wrongGiff": "assets/images/einsteinWrongAnswer.gif",
		"answerExplan": "Albert Einstein did not start talking until 4 years of age!"
	},
	{
		"question": "What is newtons first law?",
		"choices": [
			"F = M * A",
			"Time is not constant and depends on how fast your frame of reference is moving.",
			"For every action there is an equal an opposite reaction",
			"An object at rest will remain at rest, (or in motion) unless acted upon"
			],
		"answer": 3,
		"giffPath": "assets/images/anObjectAtRest.gif",
		"wrongGiff": "assets/images/anObjectAtRest.gif",
		"answerExplan": "Newtons first law states: An object at rest will remain at rest, (or in motion) unless acted upon"
	},
	{
		"question": "What is the value of the gravitational constant of our universe?",
		"choices": [
			"G = 9.456 * 10^-11 m^3/(kg*s^2)",
			"G = 5.382 N",
			"G = 126.43 C",
			"G = 6.67428 * 10^-11 m^3/(kg*s^2)"
			],
		"answer": 3,
		"giffPath": "assets/images/funnyEinstein.gif",
		"wrongGiff": "assets/images/gravitySwingFail.gif",
		"answerExplan": "The gravitational constant, G, has the value, 6.67428 * 10^-11 m^3/(kg*s^2)"
	},
	{
		"question": "What is constant in all frames of reference?",
		"choices": [
			"The mass of an object",
			"The size of an object",
			"Nothing",
			"The speed of light"
			],
		"answer": 3,
		"giffPath": "assets/images/mindBlownCorrect.gif",
		"wrongGiff": "assets/images/mindBlownWrong.gif",
		"answerExplan": "The speed of light is constant in all frames of reference, you mass becomes heavier the faster you move, and your size shrinks as you move faster!!"
	},
	{
		"question": "Another word for a reaction that responds extremely quickly is?",
		"choices": [
			"pop",
			"bob",
			"a not slow reachion.. dude thats not a word",
			"EXPLOSION"
			],
		"answer": 3,
		"giffPath": "assets/images/nuclearTowerGif.gif",
		"wrongGiff": "assets/images/nuclearTowerGif.gif",
		"answerExplan": "Chemical reactions that respond extremely quickly are commonly refered to as EXPLOSIONS!!"
	},
	{
		"question": "What are the first three time derivatives of distance with respect to time refered to as?",
		"choices": [
			"distance, velocity, speed",
			"speed, velocity, acceleration",
			"velocity, acceleration, pop",
			"velocity, acceleration, jerk"
			],
		"answer": 3,
		"giffPath": "assets/images/funnyEinstein.gif",
		"wrongGiff": "assets/images/pendilumFail.gif",
		"answerExplan": "The three time derivatives of distance are, velocity, acceleration, and jerk. The next three are, snap, crackle, and pop!!"
	},
	{
		"question": "Which of these changes in degrees are the largest?",
		"choices": [
			"20C - 5C",
			"55F - 5F",
			"12K - 5K",
			"They are all the same."
			],
		"answer": 3,
		"giffPath": "assets/images/funnyEinstein.gif",
		"wrongGiff": "assets/images/einsteinWrongAnswer.gif",
		"answerExplan": "It doesnt matter what units you use for degrees of temperature, the difference is always the same magnitude"
	},
	{
		"question": "This is the last question brian came up with, what do you think brian was thinking when he got to the last question?",
		"choices": [
			"my back hurts",
			"sleep time",
			"Whats next",
			"Finally i am done, now i need food"
			],
		"answer": 3,
		"giffPath": "assets/images/funnyEinstein.gif",
		"wrongGiff": "assets/images/funnyEinstein.gif",
		"answerExplan": "Chemical reactions that respond extremely quickly are commonly refered to as EXPLOSIONS!!"
	},
];

//initialize game variables
var questionTimer = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var noGuessCounter = 0;
var currentQuestionCount = 0;
var testQuestionsArray = [];
var choiceOrderArray = [];
var clockRunning = false;

//game over function
function gameOver(){
	var resetString = '<div><p>Your game stats</p><p>Your correct count: ' +  correctCounter+ '</p><p>Your incorrect count: ' + incorrectCounter + '</p><p>Your unanswered count: ' + noGuessCounter + '</p></div>\
				<div id="startButton" class="centerClass hoverClass">\
					<span>Replay Game</span>\
				</div>\
				<div class="centerClass">\
					<h2>Select Difficulty</h2>\
				</div>\
				<div class="centerClass">\
					<div class="radioLeft">\
						<input type="radio" name="timeVal" value="expert">Expert: Timer = 10 sec (test your might)<br>\
						<input type="radio" name="timeVal" value="standard" checked="checked"> Standard (default): Timer = 25 sec<br>\
						<input type="radio" name="timeVal" value="totalNoob"> Total Noob: Timer = 45 sec\
					</div>\
				</div>';
	$("#gameContentWrapper").html(resetString);
}

//generate array with unique random numbers BRRRAAAHAHHHHHHH
function uniqueRandomNumArrayGeneration(min, max, arrayElementsNumber){
	foundFlag = 0;
	i = 0;
	var returnArray = [];
	while(i < arrayElementsNumber){
		randomNum = Math.floor(Math.random() * (max - min) + min);
		for(s=0; s<returnArray.length; s++){
			if(randomNum == returnArray[s]){
				foundFlag = 1;
			}
		}
		if(foundFlag == 0){
			returnArray.push(randomNum);
			i++;
		}
		foundFlag = 0;
	}
	return returnArray;
}

//generate the page that displays the answer, and the giff
function answerDisplay(questionGifPath, questionAnswer){
	var displayToScreen = '<div class="centerClass"><img src="' + questionGifPath + '" style="width: 270px;"><div class="centerClass">' + questionAnswer + '</div></div>';
	$(".choiceContainer").html(displayToScreen);
	clearInterval(clockTimerID);
	clockRunning = false;
	currentQuestionCount++;
	//need an if check to see if the game is over!!!!!!
	if(currentQuestionCount < 5){
		setTimeout(questionGeneration, 6000);
	} else {
		setTimeout(gameOver, 6000);
	}
}

$("div").on("click", "div.choiceClass", function(){
	tempAnswer = Number($(this).attr("name"));
	console.log("this is the current count when anwser is eval: " + currentQuestionCount);
	tempQuestionAnswer = Number(triviaTestData[testQuestionsArray[currentQuestionCount]]["answer"]);
	if(tempAnswer === tempQuestionAnswer){
		correctCounter++;
		answerDisplay(triviaTestData[testQuestionsArray[currentQuestionCount]]["giffPath"], "CORRECT!!! <br>" + triviaTestData[testQuestionsArray[currentQuestionCount]]["answerExplan"]);
	} else {
		incorrectCounter++;
		answerDisplay(triviaTestData[testQuestionsArray[currentQuestionCount]]["wrongGiff"], "WRONG NOOB!!! <br>" + triviaTestData[testQuestionsArray[currentQuestionCount]]["answerExplan"]);
	}
});

//write question to screen
function questionGeneration(){
	questionData = triviaTestData[testQuestionsArray[currentQuestionCount]];
	questionChoicesTempArray = questionData["choices"];
	choiceOrderArray = uniqueRandomNumArrayGeneration(0,4, 4);
	questionString = '\
					<div class="timerAndQuestionClass">\
						<span id="timerSpan">Time Remaining: ' + questionTimer + '</span>\
						<span>' + questionData["question"] + '</span>\
					</div>\
					<div class="choiceContainer centerClass">\
						<div id = "testmanman" class="choiceClass" name="' + choiceOrderArray[0] + '">\
							<span class="hoverClass">' + questionChoicesTempArray[choiceOrderArray[0]] + '</span>\
						</div>\
						<div class="choiceClass" name="' + choiceOrderArray[1] + '">\
							<span class="hoverClass">' + questionChoicesTempArray[choiceOrderArray[1]] + '</span>\
						</div>\
						<div class="choiceClass" name="' + choiceOrderArray[2] + '">\
							<span class="hoverClass">' + questionChoicesTempArray[choiceOrderArray[2]] + '</span>\
						</div>\
						<div class="choiceClass" name="' + choiceOrderArray[3] + '">\
							<span class="hoverClass">' + questionChoicesTempArray[choiceOrderArray[3]] + '</span>\
						</div>\
					</div>';

	$("#gameContentWrapper").html(questionString);
	// gameClockTime.start;
	gameTimer(gameClockTime);
}

//timer
var clockTimerID;
function gameTimer(gameClockTime){
	if(!clockRunning){
		clockTimerID = setInterval(function(){
			gameClockTime--;
			if(gameClockTime === 0){
				noGuessCounter++;
				gameClockTime = questionTimer;
				answerDisplay(triviaTestData[testQuestionsArray[currentQuestionCount]]["giffPath"], "You did not guess WHY?! <br>" + triviaTestData[testQuestionsArray[currentQuestionCount]]["answerExplan"]);
			}
			$("#timerSpan").html("Time Remaining: " + gameClockTime);
		}, 1000);
		clockRunning = true;
	}
	gameClockTime = questionTimer;
}

function startGame(){
	//initialze game stats vars
	correctCounter = 0;
	incorrectCounter = 0;
	noGuessCounter = 0;
	currentQuestionCount = 0;
	testQuestionsArray = [];
	i =0;
	//select correct time for diffuculty
	var radioValue = $("input[name='timeVal']:checked").val();
	if(radioValue === "expert"){
		questionTimer = 10;
	} else if(radioValue === "standard"){
		questionTimer = 25;
	} else {
		questionTimer = 45;
	}
	gameClockTime = questionTimer;

	//generate my questions ID array with random generation call.
	testQuestionsArray = uniqueRandomNumArrayGeneration(0, 10, 5);

	//call generate question function
	questionGeneration();
	// gameClockTime.start;
	gameTimer(gameClockTime);
}

$("#startButton").on("click", function(){startGame()});

// $("div").on("click", "div#startButton", function{startGame()});
$("div").on("click", "div#startButton", function(){
	startGame();
});
