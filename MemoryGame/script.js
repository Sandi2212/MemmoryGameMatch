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
		img: 'images/cat.JPEG', 
		type: 'prince'
	},
	{
		name:'cat1',
		img: 'images/cat2.JPEG',
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: 'images/mic.JPEG', 
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: 'images/mic2.JPEG', 
		type: 'prince'
	},
	{ 	
		name:'jerry', 
		img: 'images/jerry.JPEG', 
		type:'prince'
	},
	{ 	name:'jerry', 
		img: 'images/jerry2.JPEG', 
		type: 'prince'
	},
	{
		name:'dog', 
		img:'images/dog.JPEG', 
		type: 'prince'
	},
	{ 	name:'dog', 
		img: 'images/dog2.JPEG', 
		type: 'prince'
	},
	//add extra imgs
	{ 
		name:'peach',
		img: 'images/peach.JPEG', 
		type: 'prince'
	},
	{
		name:'peach',
		img: 'images/peach.JPEG',
		type: 'prince'
	},
	{
		name:'red', 
		img: 'images/red.JPEG', 
		type: 'prince'
	},
	{
		name:'red', 
		img: 'images/red.JPEG', 
		type: 'prince'
	},
	{ 	
		name:'mulan', 
		img: 'images/mulan.JPEG', 
		type:'prince'
	},
	{ 	name:'mulan', 
		img: 'images/mulan.JPEG', 
		type: 'prince'
	},
	{
		name:'mickeyboy', 
		img: 'images/mickeyg.JPEG', 
		type: 'prince'
	},
	{ 	name:'mickeyboy', 
		img: 'images/mickeyg.JPEG', 
		type: 'prince'
	}

];
let sAClone = squaresArray.map(x => x );


let usedCards = []

function renderSquares(){
	for (let i = squaresArray.length -1 ; i >= 0; i--) {
		//had to use a decrementing for loop because originally when I used the splice method to 
		// remove items from being repeated more than once
		//it began to remove my images and push it into another array or create another array
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
			handleClick(evt);
			
		});
			
		$gameboard.append(cardDiv);	
	}}


renderSquares();

let clickArr = [];

function handleClick(evt) {
	flip(evt);
	let thisClick = evt.target;
	let lastClick; 
	if(clickArr.length === 1){
		lastClick = clickArr[0];
	}
	let stop = false;
	// After 2nd click
	while (clickArr.length < 3 && stop === false) {
		if (clickArr.length === 1) {
		 	clickArr.push(thisClick);
		 	console.log(clickArr);
			checkForMatch(thisClick, lastClick);

		 	// console.log(evt.target.dataset.name);
		 	
		 	stop = true;
		 	// check if they match
		 }
		 // After 1st click
		 else {
		 	clickArr.push(thisClick);
		 	console.log(clickArr);
		 	console.log(thisClick);
		 	
		 	stop = true;
		 	// console.log(evt.target.dataset.name);
		 	
		 }
		 stop = true;
	}
}
	

function checkForMatch(a, b){
	if (a.dataset.name === b.dataset.name) {
		setTimeout(function(){alert("it's a match");}, 1000)
		a.classList.add('match');
		b.classList.add('match');
		clickArr = [];
	} else {
		console.log('not match');
		a.classList.add('hide');
		a.classList.remove('show');

		setTimeout(function(){reset(a,b)}, 2000);
		clickArr = [];
	}


		
}

console.log(sAClone);	
let flipDeck = [];
 function flip(evt){
		 let currentDiv = evt.target;
			// find the dataname of the current div being targeted
		 	for(let j = 0; j < sAClone.length; j++){
		 			if(currentDiv.dataset.name ===  sAClone[j].name){
				 		currentDiv.src = sAClone[j].img
				 		currentDiv.classList.add("square2")
		 			}
			 			}if(flipDeck.length < 2 ) {
		 				flipDeck.push(evt.target.dataset.name)	
					}
 	
 		}

 function reset(c,d){
	c.style.transition = 'all 2s ease-in-out';//Gives the image change a smooth transition
	c.style.transform = 'rotateY( 180deg )';//Gives the image change a  nice rotation
	setTimeout(function(){c.src = './images/dis2.GIF';},1000); // after one second flip the images back if they don't match
	d.style.transition = 'all 2s ease-in-out';
	d.style.transform = 'rotateY( 180deg )';
	setTimeout(function(){d.src = './images/dis2.GIF';},1000);
}

let button = document.querySelector(".reset")
button.addEventListener("click", function () {
	// body...
	location.reload();	
})
 						
//  timer(10);
//  let countdown;
// function timer(seconds){
// 	const now = Date.now();
// 	console.log(now)
// 	const then = now + seconds * 1000;
// 	displayTimeLeft(seconds);
// 	console.log(then);
// 	setInterval(() => {
// 		const secondsLeft = Math.round((then - Date.now()) / 1000);
// 		//check if we should stop it!
// 		if(secondsLeft < 0){
		
// 			clearInterval(countdown)
// 			return;
// 			console.log(countdown);
// 		}
// 		// display it
// 		displayTimeLeft(secondsLeft){
// 	},1000);
// }
// function displayTimeLeft(seconds){
// 	console.log(seconds);
// }


//you will need a check win function
//add a class to the cards that match ...use querySelectorALL(*hint hint*)