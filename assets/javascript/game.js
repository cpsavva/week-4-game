$(document).ready(function(){


//GLOBAL VARIABLES

var numberToMatch;
var buttonGenerator;
var crystalSum;
var winCounter = 0;
var loseCounter = 0;

//
//FUNCTIONS
//function that generates random number between 19 and 120
function startGame(){
		numberToMatch = Math.floor(Math.random() * (120 - 19) + 19);

		//function that generates random number between 1 and 12
		redGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		yellowGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		blueGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		greenGenerator = Math.floor(Math.random() * (1 - 12) + 12);

		
		$("#redButton").on("click", function(){
			console.log("red generator " + redGenerator)
		});
		$("#yellowButton").on("click", function(){
			console.log("yellow generator " + redGenerator)
		});
		$("#blueButton").on("click", function(){
			console.log("blue generator " + redGenerator)
		});
		$("#greenButton").on("click", function(){
			console.log("Green Generator " + greenGenerator)
		});




		//testing
		console.log("number to Match: " + numberToMatch);
		console.log("button generator " + redGenerator);
		console.log("button generator " + yellowGenerator);
		console.log("button generator " + blueGenerator);
		console.log("button generator " + greenGenerator);


	};





//apply 1/12 generator to crystal buttons

//everytime crystal button is clicked, add number to crystalSum

//conditional if 19/120 number equals crystalSum, add to winCounter;
//if 19/120 number equals crystalSum, add to loseCounter; 
//reset generators
//reset crystalSum




//


//MAIN PROCESS

startGame();



//

});