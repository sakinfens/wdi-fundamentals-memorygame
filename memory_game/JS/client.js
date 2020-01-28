console.log("Up and running!");


let cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png',
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},
{
rank: 'kind',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png',
}
];
let cardsInPlay = [];

function createBoard(){
	for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
     cardElement.setAttribute('src', 'images/back.png');
     cardElement.setAttribute('data-id', i);
     cardElement.addEventListener('click', function(){
     	flipCard();
     })
     cardElement.appendChild('game-board');
}
}


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){
	let cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay[0] === cardsInPlay[1] ){
	if(cardsInPlay[0] === cardsInPlay[2]){
		alert('You found a match');
	}
	else{
		alert('Sorry try again');
	}
}
}
createBoard();



