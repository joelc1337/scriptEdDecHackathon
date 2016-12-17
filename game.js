$(function(){

	// click events
	$("#buttonA").click(game)

	// Stage scripts

	function game(){
		newStage(stage1)
		pointCalc()
	}

	function newStage(stage){
		// Changes text in question div to match the "stage" question
		$("#question").text(stage1.question);


		// changes text in answer choice divs to match the answer choices for the question
		$("#answerA").text("A." + stage1.answerA);
		$("#answerB").text("B." + stage1.answerB);
		$("#answerC").text("C." +stage1.answerC);
	}

	function pointCalc(answer){
	}
)}