console.log("Up and running!");


let cards = ['queen','king','king','queen'];
let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
	if(cardsInPlay[0] === cardsInPlay[1] ){
	if(cardsInPlay[0] === cardsInPlay[2]){
		alert('You found a match');
	}
	else{
		alert('Sorry try again');
	}
}
}
flipCard(0);
flipCard(2);