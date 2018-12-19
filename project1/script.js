const $gameboard= document.querySelector('.game-board');


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
		name:'cat1',
		img: './images/cat2.jpeg',
		type: 'princes2'
	},
	{
		name:'mmouse', 
		img: './images/mic.jpeg', 
		type: 'princes'
	},
	{
		name:'mmouse', 
		img: './images/mic2.jpeg', 
		type: 'princes'
	},
	{ 	
		name:'jerry', 
		img: './images/jerry.jpeg', 
		type:'princes'
	},
	{ 	name:'jerry', 
		img: './images/jerry2.jpeg', 
		type: 'princes'
	},
	{
		name:'dog', 
		img:'./images/dog.jpeg', 
		type: 'princes'
	},
	{ 	name:'dog', 
		img: './images/dog2.jpeg', 
		type: 'princes'
	}
];

let usedCards = []
// cardDiv.setAttribute("src", `{square[cardIdCheck].img}`);
// 	 cardIdCheck = this.getAttribute('data-name');
function renderSquares(){
	for (var i = squaresArray.length -1 ; i >= 0; i--) {
		//had to use a decrementing for loop because originally when I used the splice method to 
		// remove items from beeing repeated more than once
		// This is because iterating incrementally through the array, when you splice it, 
		// the array is modified in place, so the items are 
		// "shifted" and you end up skipping the iteration of some. 
		// Looping backwards (with a while or even a for loop) fixes 
		// this because you're not looping in the direction you're splicing. 
		console.log(i)
		console.log(squaresArray.length)
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('square');
		// cardDiv.classList.add('front');

		let cardImg = document.createElement('img');
		cardImg.classList.add('card-image');
		let number = Math.floor(Math.random() * squaresArray.length);
		cardImg.setAttribute('src', `${squaresArray[number].img}`);
		cardImg.setAttribute('data-name', `${squaresArray[number].name}`);
	 	let randomArray = squaresArray.splice(number, 1)
	 	 console.log(randomArray);
	 	 

//data attribute is a useful tool for comparison in this game
		cardDiv.appendChild(cardImg);
		cardDiv.addEventListener('click', (evt) => {
			handleClick(evt);

		});
		

		
		$gameboard.append(cardDiv);	
	}}


renderSquares();

let clickArr = [];

function handleClick(evt) {
	let stop = false;
	// After 2nd click
	while (clickArr.length < 3 && stop === false) {
		if (clickArr.length < 2) {
		 	clickArr.push(evt.target.dataset.name);
		 	console.log(clickArr)
		 	// console.log(evt.target.dataset.name);
		 	checkForMatch(evt.target.dataset.name);

		 	// check if they match
		 }
		 // After 1st click
		 else if (clickArr.length < 1) {
		 	clickArr.push(evt);
		 	console.log(evt.target.dataset.name);
		 	
		 }
		 stop = true;
	}
}
	

function checkForMatch (evt){


	// console.log(evt);
	
	if(clickArr.length === 2 ){

	let firstCard = clickArr[0].length;
	let secondCard = clickArr[1].length;

	console.log(firstCard, "firstcard");
	console.log(secondCard, "2card");

	if (firstCard  === secondCard) {
		alert("it's a match")
	} else {
		alert("not a match")
	}

	
		
}
}

	
 


///need to get all thenmeory cards



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