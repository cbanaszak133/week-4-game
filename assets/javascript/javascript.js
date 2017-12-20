
$(document).ready(function(){
	var randoNumber = Math.floor(Math.random() * (120-19)) + 19;
	console.log(randoNumber);

	$("#number_to_guess").text(randoNumber);

	var sum = 0;
	var numValues = [2, 6, 10, 4];
	var wins = 0;
	$("#wins").text(wins);

	var losses = 0;
	$("#losses").text(wins);

	$("#current-sum").text(sum);

	for(var i = 0; i < numValues.length; i++){
		var newImg = $("<img>");

		newImg.addClass("crystal-img");

		newImg.attr("src", "assets/images/crystal.jpg");

		newImg.attr("numberValue", numValues[i]);

		$("#images").append(newImg);

	}

	$("#images").on("click", "img.crystal-img", function(){
		var numberToAdd = parseInt($(this).attr("numberValue"));
		sum += numberToAdd;
		$("#announcement").text("");

		if(sum == randoNumber){
			$("#announcement").text("You win! Here's a new number.");
			wins++;
			

			reset();
		}
		else if(sum > randoNumber){
			$("#announcement").text("You lost! Here's a new number.");
			losses++;
			

			reset();
		}
		else{
			$("#current-sum").text(sum);
		}
	});

	function reset(){
		sum = 0;
		randoNumber = Math.floor(Math.random() * (120-19)) + 19;
		$("#number_to_guess").text(randoNumber);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#current-sum").text(sum);
		
		for(var i = 0; i < numValues.length; i++){
			numValues[i] = Math.floor(Math.random() * 11) + 1;
		}
	
		$("#images").empty(); //Get rid of old pics, replace them with new
		

		for(var i = 0; i < numValues.length; i++){
			var newImg = $("<img>");

			newImg.addClass("crystal-img");

			newImg.attr("src", "assets/images/crystal.jpg");

			newImg.attr("numberValue", numValues[i]);

			$("#images").append(newImg);

		}

	}

	

});



