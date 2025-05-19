let HP = 30;
let OppHP = 30;
let PlayerHP = document.getElementById("PlayerHP");
let EnemyHP = document.getElementById("EnemyHP");
let Attackbutton = document.getElementById("Attack");
const AttackDiv = document.querySelector(".AttacksDiv");
const MovesDiv = document.querySelector(".MovesDiv");
const ItemsDiv = document.querySelector(".ItemsDiv")
const Attack = document.getElementById("Attack");
const Attack1 = document.getElementById("Attack1");
const Attack2 = document.getElementById("Attack2");
const Attack3 = document.getElementById("Attack3");
const Items = document.querySelector(".ItemsDiv");
const Item = document.getElementById("Item");
const Item1 = document.getElementById("Item1");
const Item2 = document.getElementById("Item2");
const Item3 = document.getElementById("Terug");
const Terug = document.getElementById("back");

//Zet een accuracy % voor de span van de game.
const EnemyAccuracy = Math.floor(Math.random()*(100-37+1))+37;

//3 enemy attacks met de accuracy en damage gerandomized
function EnemyAttack1 () {
    
    if (EnemyAccuracy>=50) {
        let Damage = Math.floor(Math.random()*5)+4; //Damage tussen 4 en 8
        PlayerHP.value-=Damage;
        console.log("Charizard heeft", PlayerHP.value, "HP")
    } else {
        console.log("Pokemon heeft gemist")
    }
};

function EnemyAttack2 () {
    
    if (EnemyAccuracy>= 65) {
        let Damage = Math.floor(Math.random()*10)+2; //Damage tussen 2 en 12
        PlayerHP.value-=Damage;
        console.log("Charizard heeft", PlayerHP.value, "HP")
    } else {
        console.log ("Pokemon heeft gemist")
    }
};

function EnemyAttack3 () {
    if (EnemyAccuracy >= 35) {
        let Damage = Math.floor(Math.random()*3)+2; //Damage tussen 2 en 5
        PlayerHP.value-=Damage;
        console.log("Charizard heeft", PlayerHP.value, "HP")
    } else {
        console.log("Pokemon heeft gemist.")
    }
};

//Enemy Attack Randomizer
function RandomEnemyAttack () { 
    let Dice = Math.floor(Math.random()*3)+1; // Dice van 3 kanten die de attack kiest.
    console.log(Dice);
    if (Dice==1) {
        EnemyAttack1();
        console.log("attack 1");
    } else if (Dice==2) {
        EnemyAttack2();
        console.log("attack 2");
    } else {
        EnemyAttack3();
        console.log("attack 3");
    }
};

function PlayerAttack1 () {
    let Damage = Math.floor(Math.random()*3)+2; //Damage tussen 2 en 5
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    console.log("attack1");    
};

function PlayerAttack2 () {
    let Damage = Math.floor(Math.random()*3)+2; //Damage tussen 2 en 5
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    console.log("attack2");
};

function PlayerAttack3 () {
    let Damage = Math.floor(Math.random()*3)+2; //Damage tussen 2 en 5
    EnemyHP.value -= Damage;
    OppHP -= Damage;
    console.log("attack3");
};

function Healing () {
    PlayerHP.value += 5;
};

function StrongHealing () {
    PlayerHP.value += 10;
};

//Change Moves Div to Attack Div
function ChangetoAttack (){
    AttackDiv.classList.remove("hidden");
    MovesDiv.classList.add("hidden");
    
};

//Change Moves Div to Items Div
function ChangetoItems (){
    ItemsDiv.classList.remove("hidden");
    MovesDiv.classList.add("hidden");
    
};

//Attack back to Move 
function BacktoMoves () {
    AttackDiv.classList.add("hidden");
    MovesDiv.classList.remove("hidden");
};

//Ites back to move
function ItemsBacktoMoves () {
    ItemsDiv.classList.add("hidden");
    MovesDiv.classList.remove("hidden");
};

Attack.addEventListener("click", ChangetoAttack);

Item.addEventListener("click", ChangetoItems);

Item1.addEventListener("click", () => {
    Healing();
    setTimeout(RandomEnemyAttack, 2000);
    setTimeout(ItemsBacktoMoves, 2000);
    setTimeout(checkWinOrLoss, 2000);
});

Item2.addEventListener("click", () => {
    StrongHealing();
    setTimeout(RandomEnemyAttack, 2000);
    setTimeout(ItemsBacktoMoves, 2000);
    setTimeout(checkWinOrLoss, 2000);
});

Item3.addEventListener("click", () => {
    ItemsBacktoMoves();
});

Attack1.addEventListener("click", () => {
    PlayerAttack1();
    setTimeout(RandomEnemyAttack, 2000);
    setTimeout(BacktoMoves, 2000);
    setTimeout(checkWinOrLoss, 2000);
});

Attack2.addEventListener("click", () => {
    PlayerAttack2();
    setTimeout(RandomEnemyAttack, 2000);
    setTimeout(BacktoMoves, 2000);
    setTimeout(checkWinOrLoss, 2000);
});

Attack3.addEventListener("click", () => {
    PlayerAttack3();
    setTimeout(RandomEnemyAttack, 2000);
    setTimeout(BacktoMoves, 2000);
    setTimeout(checkWinOrLoss, 2000);

});

Terug.addEventListener("click", () => {
    BacktoMoves();
});


function checkWinOrLoss() {
    if (PlayerHP.value<=0) {
        console.log("You Lost...");
    } else if (EnemyHP.value<=0) {
        console.log("You Win!");
    }
}

function Onehit(){
    EnemyHP.value-=30;
}

