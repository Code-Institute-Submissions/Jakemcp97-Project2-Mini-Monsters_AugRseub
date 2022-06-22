//global variables
var bottomRow = document.getElementById('bottom');
var stats = document.getElementsByClassName('stats');
var heroStats = document.getElementById('heroStats');
var geraltHp = document.getElementById('geraltHp');
var pookaHp = document.getElementById('pookaHp';)

//function initiating the game
function startFight(){
bottomRow.innerHTML="Choose your action to defeat the Pooka!";
// for loop to reveal the stats
for(var x = 0; x < stats.length; x++){
    stats[x].stats.visibility = "visible";
}
}

//basic attack function
function slash(){

}