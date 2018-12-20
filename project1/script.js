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
  { x: 3, y: 0 },
  { x: 3, y: 1 }, 
  { x: 3, y: 2 },
  { x: 3, y: 3 },
];

let squaresArray = [
	{ 
		name:'cat1',
		img: './images/cat.jpeg', 
		type: 'prince'
	},
	{
		name:'cat1',
		img: './images/cat2.jpeg',
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: './images/mic.jpeg', 
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: './images/mic2.jpeg', 
		type: 'prince'
	},
	{ 	
		name:'jerry', 
		img: './images/jerry.jpeg', 
		type:'prince'
	},
	{ 	name:'jerry', 
		img: './images/jerry2.jpeg', 
		type: 'prince'
	},
	{
		name:'dog', 
		img:'./images/dog.jpeg', 
		type: 'prince'
	},
	{ 	name:'dog', 
		img: './images/dog2.jpeg', 
		type: 'prince'
	},
	//add extra imgs
	{ 
		name:'peach',
		img: './images/cat.jpeg', 
		type: 'prince'
	},
	{
		name:'peach',
		img: './images/peach.jpeg',
		type: 'prince'
	},
	{
		name:'red', 
		img: './images/red.jpeg', 
		type: 'prince'
	},
	{
		name:'red', 
		img: './images/red.jpeg', 
		type: 'prince'
	},
	{ 	
		name:'mulan', 
		img: './images/mulan.jpeg', 
		type:'prince'
	},
	{ 	name:'mulan', 
		img: './images/mulan.jpeg', 
		type: 'prince'
	},
	{
		name:'mickeyboy', 
		img:'./images/mickeyg.jpeg', 
		type: 'prince'
	},
	{ 	name:'mickeyboy', 
		img: './images/mickeyg.jpeg', 
		type: 'prince'
	}

];
let sAClone = squaresArray.map(x => x );


let usedCards = []

function renderSquares(){
	for (let i = squaresArray.length -1 ; i >= 0; i--) {
		//had to use a decrementing for loop because originally when I used the splice method to 
		// remove items from beeing repeated more than once
		// This is because iterating incrementally through the array, when you splice it, 
		// the array is modified in place, so the items are 
		// "shifted" and you end up skipping the iteration of some. 
		// Looping backwards (with a while or even a for loop) fixes 
		// this because you're not looping in the direction you're splicing. 
		// console.log(i)
		// console.log(squaresArray.length)
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('square');
		let cardImg = document.createElement('img');
		cardImg.classList.add('card-image');
		cardImg.classList.add('hide');
		let number = Math.floor(Math.random() * squaresArray.length);
		// cardImg.setAttribute('src', `${squaresArray[number].img}`);
		cardImg.setAttribute('src', './images/dis2.GIF');
		cardImg.setAttribute('data-name', `${squaresArray[number].name}`);
	 	let randomArray = squaresArray.splice(number, 1)
	 	 
	 	 

//data attribute is a useful tool for comparison in this game
		cardDiv.appendChild(cardImg);
		cardDiv.addEventListener('click', (evt) => {
			evt.preventDefault();
			cardDiv.classList.add('show');
			console.log(cardDiv);
			cardDiv.classList.remove('hide');
			console.log(cardDiv);
			handleClick(evt.target);
			flip(evt);
			
		});
			
		$gameboard.append(cardDiv);	
	}}


renderSquares();

let clickArr = [];

function handleClick(evt) {
	let thisClick = evt;
	let lastClick = clickArr[0];
	let stop = false;
	// After 2nd click
	while (clickArr.length < 3 && stop === false) {
		if (clickArr.length === 1) {
		 	clickArr.push(thisClick);
		 	console.log(clickArr);
		

		 	// console.log(evt.target.dataset.name);
		 	checkForMatch(thisClick, lastClick);

		 	// check if they match
		 }
		 // After 1st click
		 else {
		 	clickArr.push(thisClick);
		 	console.log(clickArr);
		 	console.log(thisClick);

		 	// console.log(evt.target.dataset.name);
		 	
		 }
		 stop = true;
	}
}
	

function checkForMatch(a, b){
	if (a.dataset.name === b.dataset.name) {
		alert("it's a match");
		clickArr = [];
	} else {
		console.log('not match');
		a.classList.add('hide');
		a.classList.remove('show');

		reset(a,b);
		clickArr = [];
	}


	// console.log(evt);
	
	// if(clickArr.length === 2 ){

	// 		let firstCard = clickArr[0].length;
	// 		let secondCard = clickArr[1].length;

	// 		// console.log(firstCard, "firstcard");
	// 		// console.log(secondCard, "2card");

	// 		if (firstCard  === secondCard) {
	// 			alert("it's a match")
		
	// 		} else {
	// 			alert("not a match")
	// 			reset(evt.target.dataset.name)
				
	// }		
}

console.log(sAClone);	
let flipDeck = [];
 function flip(evt){
		 let currentDiv = evt.target;
			// console.log(evt.target.dataset.name)
			// find the dataname of the current div being targeted
		 	for(let j = 0; j < sAClone.length; j++){
		 		if(currentDiv.dataset.name ===  sAClone[j].name){
		 		currentDiv.src = sAClone[j].img
		 		currentDiv.classList.add("square2")
		 		// console.log(sAClone[j].img);
		 		// console.log(currentDiv)	
		 		}
		 	
		 		
 			}
 			if(flipDeck.length < 2 ) {
 				flipDeck.push(evt.target.dataset.name)
 				// console.log(flipDeck)
 				// reset(evt.target.dataset.name)	

 			}
 	
 }

 function reset(c,d){
	// if (flipDeck.length === 2 ){
	// 	currentDiv.src = './images/dis4.jpeg'

	// 	console.log(currentDiv)
		
	// }
	c.setAttribute('src', './images/dis4.jpeg');
	d.setAttribute('src', './images/dis4.jpeg');
}	
 							
 
 // function reset(evt){
 // 		if(currentDiv.dataset.name ===  sAClone[j].name){
	// 	 		currentDiv.src = sAClone[j].img
	// 	 		console.log(sAClone[j].img);
 // 			}
 // 	let tester = document.querySelectorAll('square');
 // 	console.log(tester);

	

//check if they match
//may need an A and b parameter
//you will need a check win function
//add a class to the cards that match ...use querySelectorALL(*hint hint*)