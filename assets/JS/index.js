//global variables
var bottomRow = document.getElementById('bottom');
var stats = document.getElementsByClassName('stats');
var geraltHp = document.getElementById('geraltHp');
var pookaHp = document.getElementById('pookaHp');
var dead = document.getElementById('pooka');
var hdead = document.getElementById('geralt');
var newcontrols = document.getElementById('controls');
var hitChance;
var heroHpBarWidth;
var enemyHpBarWidth;
var dmg;

//health variables
var heroHp = 100;
var enemyHp = 100;

//function initiating the game
function startFight(){
bottomRow.innerHTML="Choose your action to defeat the Pooka!";
// for loop to reveal the stats
for(var x = 0; x < stats.length; x++){
    stats[x].style.visibility = "visible";
    newcontrols.style.visibility = "visible";
}
}

//enemy attack function
function enemyAttack(){
    var attackChoice = Math.ceil(Math.random()*3);
    if(attackChoice == 1){
         hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7 ){
         dmg = Math.round(Math.random()*10)+10;
        heroHp -= dmg;
        if (heroHp < 0) {
            heroHp = 0;
        }
         heroHpBarWidth = (heroHp/100)*300;
        geraltHp.style.height = heroHpBarWidth + "px";
        bottomRow.innerHTML += "<br>The Pooka haunted you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
    }
    }else if (attackChoice == 2) {
         hitChance = Math.round(Math.random()*10);
        if(hitChance <= 5 ){
             dmg = Math.round(Math.random()*10)+15;
            heroHp -= dmg;
            if (heroHp < 0) {
                heroHp = 0;
            }
            heroHpBarWidth = (heroHp/100)*300;
            geraltHp.style.height = heroHpBarWidth + "px";
            bottomRow.innerHTML += "<br>The Pooka possessed you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
        }else{
            bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
        }
    }else{
         hitChance = Math.round(Math.random()*10);
        if(hitChance <= 1){
             dmg = Math.round(Math.random()*20)+20;
            heroHp -= dmg;
            if (heroHp < 0) {
                heroHp = 0;
            }
             heroHpBarWidth = (heroHp/100)*300;
            geraltHp.style.height = heroHpBarWidth + "px";
            bottomRow.innerHTML += "<br>The Pooka spat ectoplasm at you causing "+ dmg +" damage! You now have "+ heroHp + " hit points remaining!";
        }else{
            bottomRow.innerHTML += "<br>You evaded the Pookas attack!";
        }
        
    }
    if(heroHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
            newcontrols.style.visibility = "hidden";
        }
        hdead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've fallen at the hands of the Pooka!!<br><button onClick='restart()' class='buttonStyle'>Restart?</button>";
    }
}
//basic attack function
function slash(){
     hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7 ){
         dmg = Math.round(Math.random()*10)+10;
        enemyHp -= dmg;
        if (enemyHp < 0) {
            enemyHp = 0;
        }
         enemyHpBarWidth = (enemyHp/100)*300;
        pookaHp.style.height = enemyHpBarWidth + "px";
        bottomRow.innerHTML = "You slashed the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }

    if(enemyHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
            newcontrols.style.visibility = "hidden";
        }
        dead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've defeated the Pooka and saved the village!<br><button onClick='restart()' class='buttonStyle'>Restart?</button>";
    }else{
        enemyAttack();
    }
}
function fireblast(){
     hitChance = Math.round(Math.random()*10);
    if(hitChance <= 5 ){
        dmg = Math.round(Math.random()*20)+20;
        enemyHp -= dmg;
        if (enemyHp < 0) {
            enemyHp = 0;
        }
        enemyHpBarWidth = (enemyHp/100)*300;
        pookaHp.style.height = enemyHpBarWidth + "px";
        bottomRow.innerHTML = "You cast a fireblast at the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }

    if(enemyHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
            newcontrols.style.visibility = "hidden";
        }
        dead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've defeated the Pooka and saved the village!<br><button onClick='restart()' class='buttonStyle'>Restart?</button>";
    }else{
        enemyAttack();
    }
}
function dropkick(){
     hitChance = Math.round(Math.random()*10);
    if(hitChance <= 2){
        dmg = Math.round(Math.random()*50)+50;
        enemyHp -= dmg;
        if (enemyHp < 0) {
            enemyHp = 0;
        }
        enemyHpBarWidth = (enemyHp/100)*300;
        pookaHp.style.height = enemyHpBarWidth + "px";
        bottomRow.innerHTML = "You run and 2 footed dropkick the Pooka causing "+ dmg +" damage! The pooka has "+ enemyHp + " hit points remaining!";
    }else{
        bottomRow.innerHTML = "The Pooka dodged your attack!";
    }

    if(enemyHp === 0){
        for(var x = 0; x < stats.length; x++){
            stats[x].style.visibility = "hidden";
            newcontrols.style.visibility = "hidden";
        }
        dead.style.transform = "rotate(90deg)";
        bottomRow.innerHTML += "<br>You've defeated the Pooka and saved the village!<br><button onClick='restart()' class='buttonStyle'>Restart?</button>";
    }else{
        enemyAttack();
    }
}
function restart(){
    heroHp=100;
    enemyHp=100;
    heroHpBarWidth = (heroHp/100)*300;
    geraltHp.style.height = heroHpBarWidth + "px";
    enemyHpBarWidth = (enemyHp/100)*300;
    pookaHp.style.height = enemyHpBarWidth + "px";
    dead.style.transform = "rotate(0deg)";
    hdead.style.transform = "rotate(0deg)";
    startFight();
}