# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | complete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 20th| Core Application Structure (HTML, CSS, etc.) |Complete
|Dec 17th| Pseudocode / actual code | Complete
|Dec 18th| Initial Clickable Model  | Incomplete
|Dec 19th| MVP | Complete
|Dec 20th| Present | Incomplete


## Project Description

My final project is a Memory match game. It gives the user a minute to match all the cards.If they can manage to match all the cards they win if not they lose.
## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
https://res.cloudinary.com/sandi29/image/upload/v1545103044/IMG-4575.jpg
Description of my game desgin page as well as the layout page!

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix. 

https://res.cloudinary.com/sandi29/image/upload/v1545103094/IMG-4576.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion. 

https://res.cloudinary.com/sandi29/image/upload/v1545103048/IMG-4579.jpg
- ****Getting the scoreboard to work is post MVP via link

#### MVP 

- Getting the cards to match
- Render data on page
- Allow user to click cards and they flip and function properly


#### PostMVP 

- create a scoreboard
- create a sound to go along with the timer(jepoardy sound)
- Getting the timer to work


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Landing Page
 I would like to button to be animated, and once clicked will open up the game page
 Instructions!!
 	*When the user clicks on the title the game starts, 
 	*The player has under a min to flip over each card and get them to match.
 	*If the two tiles have the same image, they remain face up.If not, they should be flipped face down again after a short delay.


### Game Initialization

- When the user click on title , they see the mission that awaits them

### Playing The Game 

After viewing all the cards the user will then have to match them all in under a minute.

### Winning The Game

If they all succesfully match the cards in under a minute, they win!

### Resetting The Game

location.reload to reset the game.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding timer | B | 3hrs| 3.5hrs | 10 hrs |
| getting cards to flip and match | A | 3hrs| 15 hrs | 2.5hrs |
| Total | H | 6hrs| 25hrs | 5hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 -Might use Jquery as well as bootsrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
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

```I used the higher order function map to clone my object of arrays so that I could craete another for loop to iterate through my array of objects and access the img property to place on all my divs that get clicked on. 

## Change Log
 I originally planned on having my game title adjacent to my game div but the my reset button was not lining up to be adjacent to the board as well. I also wanted to add some media query styling and bootstrap styling but ran out of time.


## Issues and Resolutions
 My project/game for the most part went great. There are some minor bugs and my check for winner function is not working properly but overall I COMPLETED my MVP , so I am proud ! WOOHOO! HTML was obviously not a problem, and the CSS I actually had no problem at all. I have a really good grasp of CSS and I really enjoy using CSS. The javascript portion of my project was very interesting and challenging.I ran into many problems such as figuring how to make my images match and how to make them flip and flip back thorough js as well as shuffle!It was a tough roller coasted ride but I made it through.  

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
