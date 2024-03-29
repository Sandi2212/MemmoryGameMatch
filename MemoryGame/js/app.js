
//Built gameboard
const $gameboard= document.querySelector('.game-board');
timer();

//coordinates for grid on gameboard
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
		img: 'assets/images/cat.JPEG', 
		type: 'prince'
	},
	{
		name:'cat1',
		img: 'assets/images/cat2.JPEG',
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: 'assets/images/mic.JPEG', 
		type: 'prince'
	},
	{
		name:'mmouse', 
		img: 'assets/images/mic2.JPEG', 
		type: 'prince'
	},
	{ 	
		name:'jerry', 
		img: 'assets/images/jerry.JPEG', 
		type:'prince'
	},
	{ 	name:'jerry', 
		img: 'assets/images/jerry2.JPEG', 
		type: 'prince'
	},
	{
		name:'dog', 
		img:'assets/images/dog.JPEG', 
		type: 'prince'
	},
	{ 	name:'dog', 
		img: 'assets/images/dog2.JPEG', 
		type: 'prince'
	},
	//add extra imgs
	{ 
		name:'peach',
		img: 'assets/images/peach.JPEG', 
		type: 'prince'
	},
	{
		name:'peach',
		img: 'assets/images/peach.JPEG',
		type: 'prince'
	},
	{
		name:'red', 
		img: 'assets/images/red.JPEG', 
		type: 'prince'
	},
	{
		name:'red', 
		img: 'assets/images/red.JPEG', 
		type: 'prince'
	},
	{ 	
		name:'mulan', 
		img: 'assets/images/mulan.JPEG', 
		type:'prince'
	},
	{ 	name:'mulan', 
		img: 'assets/images/mulan.JPEG', 
		type: 'prince'
	},
	{
		name:'mickeyboy', 
		img: 'assets/images/mickeyg.JPEG', 
		type: 'prince'
	},
	{ 	name:'mickeyboy', 
		img: 'assets/images/mickeyg.JPEG', 
		type: 'prince'
	}

];
let sAClone = squaresArray.map(x => x );


let usedCards = []


		//I had to use a decrementing for loop because originally when I used the splice method to 
		// remove items from being repeated more than once
		//it began to remove my images and push it into another array or create another array
		// the array is modified in place, so the items are 
		// "shifted" and you end up skipping the iteration of some. 
		// Looping backwards (with a while or even a for loop) fixes 
		// this because you're not looping in the direction you're splicing.
function renderSquares(){
	for (let i = squaresArray.length -1 ; i >= 0; i--) { 
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('square');
		let cardImg = document.createElement('img');
		cardImg.classList.add('card-image');
		cardImg.classList.add('hide');
		let number = Math.floor(Math.random() * squaresArray.length);
		cardImg.setAttribute('src', './assets/images/dis2.GIF');
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
		 	
		 	stop = true;
		 	// check if they match
		 }
		 // After 1st click
		 else {
		 	clickArr.push(thisClick);
		 	console.log(clickArr);
		 	console.log(thisClick);
		 	
		 	stop = true;	 	
		 	
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

checkForWin();
		
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
	setTimeout(function(){c.src = './assets/images/dis2.GIF';},1000); // after one second flip the images back if they don't match
	d.style.transition = 'all 2s ease-in-out';
	d.style.transform = 'rotateY( 180deg )';
	setTimeout(function(){d.src = './assets/images/dis2.GIF';},1000);
}

let button = document.querySelector(".reset")
button.addEventListener("click", function () {
	location.reload();	
})
// Parts of the following code is from https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
function timer(){
   let timeRemain = 60;
    let  downloadTimer = setInterval(function(){
    timeRemain--;
    document.getElementById("countdowntimer").textContent = timeRemain;
    if(timeRemain <= 0){
        clearInterval(downloadTimer);
        confirm('You lose , would you like to play again?')
        location.reload();
    }
    
    },1000);
}
 //this function keeps returning an empty array						
function checkForWin() {
		let matchedCards = document.querySelectorAll("match");
		console.log(matchedCards)
		if( matchedCards.length === 16)
			alert('You win!');
	};


//you will need a check win function
//add a class to the cards that match ...use querySelectorALL(*hint hint*)