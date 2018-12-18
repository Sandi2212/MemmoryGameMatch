# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | complete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 17th| Core Application Structure (HTML, CSS, etc.) |incomplete
|Dec 17th| Pseudocode / actual code | Incomplete
|Dec 18th| Initial Clickable Model  | Incomplete
|Dec 18th| MVP | Incomplete
|Dec 20th| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
I am building a memory game!
I will use a set timeout function to visulally display the cards for 2-4 (haven't decided yet) seconds then the user will have 1 min to match the cards based on memory.
## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
https://res.cloudinary.com/sandi29/image/upload/v1545103044/IMG-4575.jpg
Description of my game desgin page as well as the layout page!

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix. 
*edit 
https://res.cloudinary.com/sandi29/image/upload/v1545103041/IMG-4574.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion. 

https://res.cloudinary.com/sandi29/image/upload/v1545103048/IMG-4579.jpg
- ****Getting the scoreboard to work is post MVP via link

#### MVP 

- Getting the cards to match
- Render data on page
- Allow user to click cards and they flip and function properly
- Getting the timer to work

#### PostMVP 

- create a scoreboard
- create a sound to go along with the timer(jepoardy sound)


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Landing Page
 I would like to buttin to be animated, and once clicked will open up the game page
 Instructions!!
 	*When the game starts, all tiles are turned faced down.l
 	*The player them flips over two cards, selecting them by clicking on them.
 	*If the two tiles have the same image, they remain face up.If not, they should be flipped face down again after a short delay.


### Game Initialization

- when user enters game they will see all the cards for 2 seconds.

### Playing The Game 

After viewing all the cards the user will then have to match them all in under a minute.

### Winning The Game

If they all succesfully match the cards in under a minute, they win!

### Resetting The Game

location.reload to reset the game.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding timer | B | 3hrs| 3.5hrs | 0 hrs |
| getting cards to flip and match | A | 3hrs| 0 hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

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
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object