//global variables
var bottomRow = document.getElementById('bottom');
var stats = document.getElementsByClassName('stats');
var heroStats = document.getElementById('heroStats');
var geraltHp = document.getElementById('geraltHp');
var pookaHp = document.getElementById('pookaHp');
var buttons = document.getElementById('actions');

//health variables
var heroHp = 100;
var enemyHp = 100;

//function initiating the game
function startFight(){
bottomRow.innerHTML="Choose your action to defeat the Pooka!";
// for loop to reveal the stats
for(var x = 0; x < stats.length; x++){
    stats[x].style.visibility = "visible";
}
}

//basic attack function
function slash(){
    var hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7 ){
        var dmg = Math.round(Math.random()*10)+10;
        enemyHp -= dmg;
        if (enemyHp < 0) {
            enemyHp = 0;
        }
        var enemyHpBarWidth = (enemyHp/100)*300;
        pookaHp.style.width = enemyHpBarWidth + "px";
        bottomRow.innerHTML = "You slashed the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + "hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }

    if(enemyHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
        }
        bottomRow.innerHTML += "<br>You've defeated the Pooka and saved the village!";
    }
}