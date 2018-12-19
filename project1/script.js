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
		name:'cat1',
		img: './images/cat.jpeg', 
		type: 'princes1'
	},
	{
		name:'cat2',
		img: './images/cat2.jpeg',
		type: 'princes2'
	},
	{
		name:'mmouse', 
		img: './images/mic.jpeg', 
		type: 'princes'
	},
	{
		name:'mmouse2', 
		img: './images/mic2.jpeg', 
		type: 'princes'
	},
	{ 	
		name:'princess1', 
		img: './images/jerry.jpeg', 
		type:'princes'
	},
	{ 	name:'princess', 
		img: './images/jerry2.jpeg', 
		type: 'princes'
	},
	{
		name:'dog', 
		img:'./images/dog.jpeg', 
		type: 'princes'
	},
	{ 	name:'dog2', 
		img: './images/dog2.jpeg', 
		type: 'princes'
	}
];

function renderSquares(){
	for (let square of squaresArray){
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('square');
		// cardDiv.classList.add('front');

		let cardImg = document.createElement('img');
		cardImg.classList.add('card-image');
		cardImg.setAttribute('src', `${square.img}`);
		cardImg.setAttribute('data-type', `${square.type}`);
//data variable is a useful tool for comparison in this game
		cardDiv.appendChild(cardImg);
		cardDiv.addEventListener('click', (evt) => {
			handleClick(evt);
		});
		

		// let cardDiv2 = document.createElement('div');
		// cardDiv2.classList.add('square');
		// cardDiv2.classList.add('back');

		// let cardImg2 = document.createElement('img');
		// cardImg2.classList.add('card-image');

		// cardImg.setAttribute('src', './images/dis4.jpeg');

		// console.log(cardDiv);
		// console.log(cardImg);

		// cardDiv.style.top = (square.y * 198).toString() + 'px';
		// cardDiv.style.left = (square.x * 198).toString() + 'px';

		//create div for each square in gameboard

		// cardDiv.appendChild(cardDiv2);
		// cardDiv.appendChild(cardImg2);
		// cardDiv.appendChild(cardImg);
		
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
	// function showCard() {
	// 		// body...
	// 		 cardDiv.addEventListener ('click', () => {
	// 	 	cardDiv.style.src = squaresArray.length;
	// 	 })
	// 		console.log(showCard); 

	// 	}

renderSquares();

let clickArr = [];

function handleClick(evt) {
	let stop = false;
	// After 2nd click
	while (clickArr.length < 3 && stop === false) {
		if (clickArr.length < 2) {
		 	clickArr.push(evt);
		 	console.log(evt.target.dataset.type);

		 	// check if they match
		 }
		 // After 1st click
		 else if (clickArr.length < 1) {
		 	clickArr.push(evt);
		 	console.log(evt.target.dataset.type);
		 }
		 stop = true;
	}
}
	


///need to get all thenmeory cards

// function flip() {

// 	//if the card has not been clicked then click it
// 	//if it been clicked the
	
// }
//use an array of objects for name/images/type=="match cards" 

//will need a shuffle fuinction
//keep track of clicks... handle click functuon
//used two variables , used a first click and for the second click
//use an emptry array to check for each clcik

//check if they match
//may need an A and b parameter
//you will need a check win function
//add a class to the cards that match ...use querySelectorALL(*hint hint*)