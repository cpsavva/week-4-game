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
			$("#numberToMatch").html(numberToMatch);

			//function that generates random number between 1 and 12
			redGenerator = Math.floor(Math.random() * (1 - 12) + 12);
			yellowGenerator = Math.floor(Math.random() * (1 - 12) + 12);
			blueGenerator = Math.floor(Math.random() * (1 - 12) + 12);
			greenGenerator = Math.floor(Math.random() * (1 - 12) + 12);


			//need to find a way to add the value of generators together
			crystalSum = 0;
			$("#redButton").on("click", function(){
	   			crystalSum = Number(crystalSum) + Number(redGenerator);
	   			 $("#crystalSum").html(crystalSum);        
			});
			$("#greenButton").on("click", function(){
	   			crystalSum = Number(crystalSum) + Number(greenGenerator);
	   			 $("#crystalSum").html(crystalSum);        
			});
			$("#yellowButton").on("click", function(){
	   			crystalSum = Number(crystalSum) + Number(yellowGenerator);
	   			 $("#crystalSum").html(crystalSum);        
			});
			$("#blueButton").on("click", function(){
	   			crystalSum = Number(crystalSum) + Number(blueGenerator);
	   			 $("#crystalSum").html(crystalSum);        
			});

	  
			//testing
			console.log("number to Match: " + numberToMatch);
			console.log("button generator " + redGenerator);
			console.log("button generator " + yellowGenerator);
			console.log("button generator " + blueGenerator);
			console.log("button generator " + greenGenerator);

	}

		

	//conditional if 19/120 number equals crystalSum, add to winCounter;
	function completeGame () {
		if(numberToMatch == crystalSum){
			winCounter++;

			$("#winCounter").html(winCounter);

			crystalSum = 0;
			$("#crystalSum").html(crystalSum);

			startGame();
		}
		//if 19/120 number equals crystalSum, add to loseCounter; 
		else if(numberToMatch < crystalSum){
			loseCounter++;

			$("#loseCounter").html(loseCounter);

			crystalSum = 0;
			$("#crystalSum").html(crystalSum);

			startGame();
		}


		//testing
		console.log("Win Counter " + winCounter)
		console.log("Lose Counter " + loseCounter);


	}



	//MAIN PROCESS
startGame();

$(document).on("click", function(event) {
	completeGame ();
 });



});