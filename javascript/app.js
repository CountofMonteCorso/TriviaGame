setTimeout(rickRoll, 202000);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var finalCountdown = (60 * 3) + 21,
        display = document.querySelector('#time');
    startTimer(finalCountdown, display);
};

function rickRoll(){
window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

};

var totalCorrect = 0

var myQuestions = [
	{
		question: "How many Pokemon are there?",
		correctAnswer: '802'
	},

	{
		question: "Who was Ash's first Pokemon?",
		correctAnswer: 'Pikachu'
	},

	{
			question: "Which of these is not an official Smogon tier?",
		correctAnswer: 'BL'
	},

	{
			question: "Who won the official 2016 Pokemon World Tournament in the Master's division?",
		correctAnswer: 'Wolfe Glick'
	},

	{
			question: "Which of these Pokemon is not available for use in Pokken Tournament?",
		correctAnswer: 'Medicham'
	},

	{
			question: "Who orginally came up with the idea for the GBA draft-style Pokemon league on YouTube?",
		correctAnswer: 'M4GNITUDE'
	},

	{
			question: "As of today's date, October 31, 2017, which of these coaches has never been in the GBA?",
		correctAnswer: 'Thunderblunder777'
	},

	{
			question: "In what city was the official 2017 Pokemon World Championships held?",
		correctAnswer: 'Anaheim'
	},

	{
			question: "Who was not an original host of the objectively greatest Pokemon podcast out there, KantoCast?",
		correctAnswer: 'Green'
	},

	{
			question: "As of today's date, October 31, 2017, only one Pokemon has been OU every single generation--what Pokemon is that?",
		correctAnswer: 'Gengar'
	}
]

//function(e) because 
$('form').on('submit', function(e) {
	var userData = $(this).serializeArray(); 
	e.preventDefault();
	console.log("data",userData);
	console.log(userData[1].value);

	for (var i = 0; i < myQuestions.length; i++){
		 if (userData[i].value === myQuestions[i].correctAnswer){
	 	totalCorrect++
		 }
	}	 
	console.log(totalCorrect);

	$('.results').html("You got " + totalCorrect + " questions correct!")
	$('.results').show();
	$('form').hide();
	clearTimeout(rickRoll);
});

