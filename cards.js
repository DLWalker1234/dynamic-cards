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
	var text = document.createTextNode(inputField.value);
	card.appendChild(text);
	let output = document.getElementById("output");
	output.appendChild(card);
	// createDeleteButton();
	card.appendChild("button");
	

}


function deleteCard(card) {
    card.parentNode.removeChild(p);
}


function createDeleteButton(card, func){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = deleteCard
    card.appendChild(button);
}


// <input type="button" value="Remove child1" onClick="removeElement('parentDiv', 'child1');">
// 
// function removechildren()
// {   var node=document.getElementById("fooBar");
//     node.innerHTML = "";
// }
// 
// function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }