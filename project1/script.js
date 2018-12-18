const $gameboard= document.querySelector('.game-board');
const deck = []
let clickC = 1
const squares = [
  { x: 0, y: 0 },  		
  { x: 0, y: 1 },		
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 }, 
  { x: 1, y: 3 }, 
  { x: 2, y: 0 },
  { x: 2, y: 1 }, 
  { x: 2, y: 2 },
  { x: 2, y: 3 },
];

let squaresArray = [
{ 
	name:'cat1', img: 'images/cat.JPEG', type: 'princes'
},
{
	name:'cat2', img: 'images/cat2.JPEG', type: 'princes'
},
{
	name:'mmouse', img: 'images/mic.JPEG', type: 'princes'
},
{ name:'mmouse2', img: 'images/mic2.JPEG', type: 'princes'},
{ name:'princess1', img: 'images/jerry.JPEG', type:'princes'},
{ name:'princess', img: 'images/jerry2.JPEG', type: 'princes'},
{ name:'dog', img:'images/dog.JPEG', type: 'princes'},
{ name:'dog2', img: 'images/dog2.JPEG', type: 'princes'}
];

function renderSquares(){
	for (let square of squaresArray){
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('square');

		let cardImg = document.createElement('img');
		cardImg.setAttribute('src', `${square.img}`);

		// cardDiv.style.top = (square.y * 198).toString() + 'px';
		// cardDiv.style.left = (square.x * 198).toString() + 'px';

		//create div for each square in gameboard
		cardDiv.appendChild(cardImg);
		
		//attach the event listener here!
		// cardDiv.addEventListener("click" , (e) => {
		// 	if(e.target === cardImg) {
		// 	 //if there is not any element in the box then create one/// img been clicked
		// 	 console.log('clicked');
		// 	}
			
		// });
		
		$gameboard.append(cardDiv);	
	}	
}

renderSquares();


///need to get all thenmeory cards

function flip() {

	//if the card has not been clicked then click it
	//if it been clicked the
	
}
//use an array of objects for name/images/type=="match cards" 

//will need a shuffle fuinction
//keep track of clicks... handle click functuon
//used two variables , used a first click and for the second click
//use an emptry array to check for each clcik

//check if they match
//may need an A and b parameter
//you will need a check win function
//add a class to the cards that match ...use querySelectorALL(*hint hint*)