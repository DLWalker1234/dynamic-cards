// //Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

console.log("Dynamic Cards");

let inputField = document.getElementById("inputField");
let createButton = document.getElementById("create");


createButton.addEventListener("click", function() {
	createCard(inputField)
})

function createCard(userInut) {
	var card = document.createElement("p");
	var deleteButton = document.createElement("button")
	var text = document.createTextNode(inputField.value);
	card.appendChild(text);
	let output = document.getElementById("output");
	output.appendChild(card);
	deleteButton.value = "delete row";
	deleteButton.onclick = deleteFunction;

}



console.log("hello")

but.onclick = callJavascriptFunction;