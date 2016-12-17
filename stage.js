var stages = [stage1,stage2,stage3,stage4];

var stage1 = {
	question: "You walk up to a trash can.",

	answerA: {
		string: "place in recycling bin",
		points: 10 ,
	},
	answerB: {
		string: "who cares drop it on the floor and walk off",
		points: 0 ,
	},
	answerC: {
		string: "place it in the garbage can",
		points: 8 ,
	},
}

var stage2 = {
	question: "You are about to leave and the lights are on",

	answerA: {
		string: "leave the light on ",
		points: 4,
	},
	answerB: {
		string: "turn it off ",
		points: 10  ,
	},
	answerC: {
		string: "close your eyes and pretend you don't see it",
		points: 0 ,
	},
}

var stage3 = {
	question: "You're washing the dishes and you hear a knock on the door",

	answerA: {
		string: "leave the water running and check the door",
		points: 0 ,
	},
	answerB: {
		string: "turn the water off and see who's knocking ",
		points: 10,
	},
	answerC:{
		string: "forget the knock dishes are important",
		points: 5,
	},
}

var stage4 = {
	question: "You are in the middle of eating a sandwich when you see a homeless man",

	answerA: {
		string: "keep walking pass the homeless man(",
		points: 2,
	},
	answerB:{
		string: "give the homeless man the other half of your sandwich",
		points:10,
	},
	answerC:{
		string: "throw the other half out",
		points:5 ,
	},
}