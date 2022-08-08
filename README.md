# Mini Monsters battle game 

The mini monsters battle game was my idea for this project that i originally planned to center around a pokemon style battle game. I very quickly learned that the scope i was reaching for with the time i had was not going to work well together, leading me to create this much lighter adaptation of turn based combat. I have, in this game, pitted 2 pixel art characters against each other allowing the user to play the slightly more powerful of the 2. The site is currently live here: [Mini monsters Github pages](https://jakemcp97.github.io/Project2-Mini-Monsters/index.html)
![Siteimage](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/site%20images.png)

## UX design

I initially started designing my UX on pen and paper and roughly transcribed my ideas onto balsamiq as you can see below. 
I intended on focusing more on the backend of this website and succeeded in doing so because as you can on the live site, its not as pretty as it could be. Mainly, i wanted a functional little game that would get some endorphins flowing when you click to win! 
![ux imgs](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/wireframe.png)

## Features
### Navbar

![Navbar](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/navbar.png)

A simple navbar was added to allow the user to move through the various pages on the site.

### The mini game

![game 0 state](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/game0.png) ![game 1 state](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/game1.png)

The major feature of this site is the mini game. It uses an abundance of javascript and really stretched my knowledge of the language. It appears initially in a hidden state and upon user interaction reveals the controls and game console. It features 3 attack options for the user to interact with, each programmed with a chance to miss. Upon attacking the enemy, the enemy has been programmed to respond in kind and attempt an attack on the player character. This also has a chance to miss, which can leave some rounds as a stalemate. 

### About page

![About](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/about.png)

The about page is majorly filler with a simple description of each of the games characters. 

### User feedback form
![userform](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/userform.png)

A simple user form was added to allow for further user interaction. 

## Testing

![lighthouse-image](https://github.com/Jakemcp97/Project2-Mini-Monsters/blob/main/assets/images/lighthosue.png)

As this is my first javascript project, there was a lot of internal testing to make sure functions and variables were being handled correctly. Below are some of the more official tests i put the site through to ensure it was professionally functional. As can be seen in the lighthouse capture above, the site functions at a decent level more than likely thanks to its simplicity. 

### Validator testing

### HTML 

Using the W3 validator i tested my 3 HTML pages and cleared any errors that were showing up.

### CSS

Using the W3 jigsaw CSS validator i ran my code and cleaned up any errors that occured. 

### Javascript

I tested my javascript using both Jshint and Beautify. Through both of these sites i fixed several issues with the exception of my functions. They throw an error in Jshint and Beautify as not being used however they are used in the HTML DOM. 

### User testing

-Users experienced difficulty with first image layout, finding the harsh contrasts to be hard on the eyes and as such a redesign was implemented. 
- Users were finding the game text to be quite hard to distinguish and so a brighter more obvious color was employed. 
-based on my own testing of about 50 run throughs of the game, it would be very hard to get 2 results the same meaning there is a lot of replayability and the code will function indefinitely. 

### Bugs and errors

Several bugs occured over the duration of this project: 
-Solved bugs:
HP bar not adjusting on health loss. 
Images not moving to indicate a "dead" state. 
HitChance variable not calculating a number correctly. 
Several div arrangement issues. 
"Bottom" div not producing correct text. 
Media queries not encompassing the whole page.
several link issues. 
font styling issues. 

-Unsolved bugs:
On much smaller mobile screens, the health bars will overflow off the screen. 
Enemy HP bar clips over the enemy character image.(has been worked on extensively but given time constraints this will have to be fixed post submission)

### Future improvements

As a game, i feel there is no real limit to the improvements you could make but personally i would like to focus on the following:
-Adding more enemy characters. 
-Adding some intricate animations based on the attacks chosen. 
-Varying stages and attack patterns.  
-Addition of a soundtrack.

## Deployment

- I created a github repository and built the website in this repository using visual studio code, commiting and syncing the changes directly from my IDE. 
- I navigated to the settings section on my repository once i was prepared to deploy the site. 
- I selected the "code and automation" section in the sidebar and selected pages. 
- I then entered the "build and deployment" section and chose the deploy from branch option as my source. I chose the main branch to deploy as this is where i created the site. 
- I then saved these options using the save button below these options. 
- Once i had these settings adjusted, I deployed the site using the deploy button at the top of the Pages settings section. 


## Credits

w3schools for constant reference - https://www.w3schools.com

Codeinstitute lessons for further reference. 

Stack Overflow for solving bizzarely specific problems - https://codeinstitute.net/ie/

github pages for hosting - https://github.com

Pintrest for source of game images - https://www.pinterest.com

https://www.youtube.com/user/primustimus for useful guides on the type of code for building a game and the mathmatics behind it. 