//global variables
var bottomRow = document.getElementById('bottom');
var stats = document.getElementsByClassName('stats');
var heroStats = document.getElementById('heroStats');
var geraltHp = document.getElementById('geraltHp');
var pookaHp = document.getElementById('pookaHp');
var buttons = document.getElementById('actions');
var dead = document.getElementById('pooka');
var hdead = document.getElementById('geralt');

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

//enemy attack function
function enemyAttack(){
    var attackChoice = Math.ceil(Math.random()*3);
    if(attackChoice == 1){
        var hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7 ){
        var dmg = Math.round(Math.random()*10)+10;
        heroHp -= dmg;
        if (heroHp < 0) {
            heroHp = 0;
        }
        var heroHpBarWidth = (heroHp/100)*300;
        geraltHp.style.width = heroHpBarWidth + "px";
        bottomRow.innerHTML += "<br>The Pooka haunted you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
    }
    }else if (attackChoice == 2) {
        var hitChance = Math.round(Math.random()*10);
        if(hitChance <= 5 ){
            var dmg = Math.round(Math.random()*10)+15;
            heroHp -= dmg;
            if (heroHp < 0) {
                heroHp = 0;
            }
            var heroHpBarWidth = (heroHp/100)*300;
            geraltHp.style.width = heroHpBarWidth + "px";
            bottomRow.innerHTML += "<br>The Pooka possessed you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
        }else{
            bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
        }
    }else{
        var hitChance = Math.round(Math.random()*10);
        if(hitChance <= 1){
            var dmg = Math.round(Math.random()*20)+20;
            heroHp -= dmg;
            if (heroHp < 0) {
                heroHp = 0;
            }
            var heroHpBarWidth = (heroHp/100)*300;
            geraltHp.style.width = heroHpBarWidth + "px";
            bottomRow.innerHTML += "<br>The Pooka spat ectoplasm at you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
        }else{
            bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
        }
        
    }
    if(heroHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
        }
        dead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've fallen at the hands of the Pooka!!";
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
        bottomRow.innerHTML = "You slashed the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }

    if(enemyHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
        }
        dead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've defeated the Pooka and saved the village!";
    }else{
        enemyAttack();
    }
}