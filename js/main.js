//array of question and answers//
	var questions = [
	{
		question: "what's 200 + 2?",
		answer: 202
	},
		{
			question: "what is the color of a basketball?",
			answer: "orange"
	},
		{
			question: "what is 100 divided by 10?",
			answer: 10
	},
		{
			question: "what is the color of a baseball?",
			answer: "white"
		},
			{
			question: "what was barry bonds jersery number?",
			answer: 25
		},

		{
			question:"what is batman real name?",
			answer: "bruce wayne"
		},
		{
			question: "how many hands do you have?",
			answer: 2
		},
		{
		  question: "what color is a football?",
			answer: "brown"
		},
		{
			question: "what the presidents last name?",
			answer: "trump"
		}

	];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById("question" + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById("answer" + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById("question" + [i]);
		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = "correct";
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = "incorrect";
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
