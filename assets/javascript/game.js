$(document).ready(function(){


//GLOBAL VARIABLES

var numberToMatch;
var buttonGenerator;
var crystalSum = 0;
var winCounter = 0;
var loseCounter = 0;

//
//FUNCTIONS
//function that generates random number between 19 and 120
function startGame(){
		numberToMatch = Math.floor(Math.random() * (120 - 19) + 19);
		$("#numberToMatch").html(numberToMatch);

		//function that generates random number between 1 and 12
		redGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		yellowGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		blueGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		greenGenerator = Math.floor(Math.random() * (1 - 12) + 12);

		//apply 1/12 generator to crystal buttons
		//everytime crystal button is clicked, add number to crystalSum
		$("#redButton").on("click", function(){
			console.log("red generator " + redGenerator)
			$("#crystalSum").append(redGenerator);
		});
		$("#yellowButton").on("click", function(){
			console.log("yellow generator " + yellowGenerator)
			$("#crystalSum").append(yellowGenerator);

		});
		$("#blueButton").on("click", function(){
			console.log("blue generator " + blueGenerator)
			$("#crystalSum").append(blueGenerator);
		});
		$("#greenButton").on("click", function(){
			console.log("Green Generator " + greenGenerator)
			$("#crystalSum").append(greenGenerator);
		});	


		//need to find a way to add the value of appendixes together





		//testing
		console.log("number to Match: " + numberToMatch);
		console.log("button generator " + redGenerator);
		console.log("button generator " + yellowGenerator);
		console.log("button generator " + blueGenerator);
		console.log("button generator " + greenGenerator);


	

//conditional if 19/120 number equals crystalSum, add to winCounter;
	if(numberToMatch === crystalSum){
		winCounter++;

		$("#winCounter").html(winCounter);

		startGame();
	}
	//if 19/120 number equals crystalSum, add to loseCounter; 
	else if(numberToMatch < crystalSum){
		loseCounter++;

		$("#loseCounter").html(loseCounter);

		startGame();
	}


//reset generators
//reset crystalSum

	};


//


//MAIN PROCESS

startGame();



//

});