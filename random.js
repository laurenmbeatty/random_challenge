$(document).ready(function(){
//Get the template script from html
/*var theTemplateScript = $("#person-template").html();
//Compile the Template
	var theTemplate = Handlebars.compile(theTemplateScript);

//try to use a for loop in classArray to create object
*/
var classArray = [
                    "Aarti",
                    "Danielle",
                    "David B.",
                    "Brian",
                    "David H.",
                    "Amelia",
                    "Geoffrey",
                    "Jacob",
                    "Manu",
                    "John",
                    "Jonathan",
                    "Laura",
                    "Lauren",
                    "Erick",
                    "Nicholas",
                    "Doug",
                    "Ryan",
                    "Sarah",
                    "Zachary",
                    "Liz"

                    ];

//button click creates number of groups                ];

var numOfGroups;
$(".button-1").on("click",function(){
	numOfGroups = 1;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-2").on("click",function(){
	numOfGroups = 2;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-3").on("click",function(){
	numOfGroups = 3;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-4").on("click",function(){
	numOfGroups = 4;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-5").on("click",function(){
	numOfGroups = 5;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-6").on("click",function(){
	numOfGroups = 6;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-7").on("click",function(){
	numOfGroups = 7;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-8").on("click",function(){
	numOfGroups = 8;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-9").on("click",function(){
	numOfGroups = 9;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});
$(".button-10").on("click",function(){
	numOfGroups = 10;
	randomizeList(classArray);
	assignPeople(numOfGroups);
	console.log(numOfGroups);
});


// this shuffles up the array indices and puts them in newArray
var newArray = [];
function randomizeList(classArray) { 
	var n = classArray.length; 
	var personToRemove;

	while(n) {
		personToRemove= Math.floor(Math.random() * n--);
		newArray.push(classArray.splice(personToRemove,1)[0]);
	}

	return newArray;
}



console.log(randomizeList(classArray));

function assignPeople() {
	var groupSize = Math.floor(newArray.length/numOfGroups);
	//var groupRemainder = Math.floor(newArray.length%numOfGroups);
	console.log(groupSize);
	for(var i=1; i<=numOfGroups; i++){
		var $group = $("<ul class='group'>" + "Group" + i  + "</ul>");
		$(".to-append").append($group);
	
		for(var j=1; j<=groupSize; j++){
			var $groupMember = $("<li>" + newArray[0] + "</li>");
			$(".group").parent().append($groupMember);
			newArray.shift();
		};
	};

	console.log('Array after: ' + newArray);

	// while(newArray.length > 0){
	// 	$(".group").first()
	// }

	if(newArray.length>0 ) {
		for(var k=1; k<=groupSize; k++){
			var $groupMember = $("<li>" + newArray[0] + "</li>");
			$(".group").parent().append($groupMember);
			newArray.shift();
		};
console.log(newArray);
	}

		if(newArray.length>0 ) {
		for(var k=1; k<=groupSize; k++){
			var $groupMember = $("<li>" + newArray[0] + "</li>");
			$(".group").parent().append($groupMember);
			newArray.shift();
		};
console.log(newArray);
	}

	// if(newArray.length>0) {
	// 	$(".group").parent().parent().append($groupMember);
	// }

// 	if(newArray.length>0 ) {
// 		for(var k=1; k<=groupSize; k++){
// 			var $groupMember = $("<li>" + newArray[0] + "</li>");

// 			$(".to-append:nth-child(1)").parent().append($groupMember);
// 			newArray.shift();
// 		};
// console.log(newArray);
// 	}


}

// if(newArray.length>0){
// 	for(var k=1; k<=newArray.length; k++){
// 		var remainingPerson = newArray[k-1];
// 		console.log(remainingPerson);
// 		$(".group li:nth-child(k)").append(remainingPerson);
// 	}
// }


	







});