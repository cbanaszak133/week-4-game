
$(document).ready(function(){
	var randoNumber = Math.floor(Math.random() * (120-19)) + 19;
	console.log(randoNumber);

	$("#number_to_guess").text(randoNumber);

	var sum = 0;
	var numValues = [2, 6, 10, 4];

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

		if(sum == randoNumber){
			alert("You win! Here's a new number.");
			reset();
		}
		else if(sum > randoNumber){
			alert("You lost, sorry! Here's a new number.");
			reset();
		}
		else{
			alert("Your current sum is: " + sum);
		}
	});

	function reset(){
		sum = 0;
		randoNumber = Math.floor(Math.random() * (120-19)) + 19;
		$("#number_to_guess").text(randoNumber);
		
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



