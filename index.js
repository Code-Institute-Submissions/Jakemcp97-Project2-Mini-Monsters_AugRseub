//global variables
var bottomRow = document.getElementById('bottom');
var stats = document.getElementsByClassName('stats');
var heroStats = document.getElementById('heroStats');
var geraltHp = document.getElementById('geraltHp');
var pookaHp = document.getElementById('pookaHp';)

//health variables
var heroHp = 100;
var enemyHp = 100;

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
    var hitChance = Math.round(Math.random()*10);
    if(hitChange < 7 ){
        var dmg = Math.round(Math.random()*10)*10;
        enemyHp -= dmg;
        var enemyHpBarWidth = 
        pookaHp.style.width = 
        bottomRow.innerHTML = "You slashed the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + "hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }
}