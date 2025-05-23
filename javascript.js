let HP = 30;
let OppHP = 60;
let PlayerHP = document.getElementById("PlayerHP");
let EnemyHP = document.getElementById("EnemyHP");
let PotionAmount = 5;
let StrongPotionAmount = 3;
const Attackbutton = document.getElementById("Attack");
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
const CharizardDiv = document.querySelector(".CharizardAttackDiv");
const TextboxDiv = document.querySelector(".Textbox");
let Damage;

//Calculates Enemy Accuracy every turn, and bases its move off htat.
function CalculateDamage() {
    const EnemyAccuracy = Math.floor(Math.random()*(100-50+1))+50;
    if (EnemyAccuracy >= 50) {
        Damage = Math.floor(Math.random()*6)+3; //Damage tussen 2 en 8
    } else if (EnemyAccuracy>= 65) {
        Damage = Math.floor(Math.random()*5)+5; //Damage tussen 5 en 9
    } else if (EnemyAccuracy >= 60) {
        Damage = Math.floor(Math.random()*6)+2; //Damage tussen 2 en 6
    } else {
        Damage = 0;
    }
    console.log(Damage);
    console.log(EnemyAccuracy);
};

function EnemyAttack() {
    CalculateDamage();
    if (Damage > 0) {
        PlayerHP.value -= Damage;
        TextboxDiv.textContent= "Charizard heeft " + Damage + " Damage genomen en heeft nu " + PlayerHP.value + " HP";
    } else {
        TextboxDiv.textContent= "Charizard heeft gemist";
    }
};

function PlayerAttack1() {
    let Damage = Math.floor(Math.random()*3)+4; //Damage tussen 4 en 7
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    console.log("attack1");    
};

function PlayerAttack2() {
    let Damage = Math.floor(Math.random()*3)+3; //Damage tussen 3 en 6
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    console.log("attack2");
};

function PlayerAttack3() {
    let Damage = Math.floor(Math.random()*4)+3; //Damage tussen 3 en 7
    EnemyHP.value -= Damage;
    OppHP -= Damage;
    console.log("attack3");
};
//Checkt of de player nog potions heeft en healt de player.
function Healing() {
    if (PotionAmount > 0) {
        PlayerHP.value += 5;
        PotionAmount -= 1;
        ItemsDiv.classList.add("hidden");
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent = "Je hebt nog " + PotionAmount + " Aantal Potions!";
        setTimeout(TextBackToMoves, 1000);
    } else if (PotionAmount = 0) {
        ItemsDiv.classList.add("hidden");
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent = "Je hebt geen potions meer!";
        setTimeout(TextBackToMoves, 1000);
    }
};

function StrongHealing() {
    if (StrongPotionAmount > 0) {
        PlayerHP.value += 10;
        StrongPotionAmount -= 1;
        ItemsDiv.classList.add("hidden");
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent = "Je hebt nog " + StrongPotionAmount + " Aantal Strong Potions!";
        setTimeout(TextBackToMoves, 1000);
    } else if (StrongPotionAmount = 0) {
        ItemsDiv.classList.add("hidden");
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent = "Je hebt geen potions meer!";
        setTimeout(TextBackToMoves, 1000);
    }
};

//Change Moves Div to Attack Div
function ChangetoAttack(){
    AttackDiv.classList.remove("hidden");
    MovesDiv.classList.add("hidden");
    
};

//Change Moves Div to Items Div
function ChangetoItems(){
    ItemsDiv.classList.remove("hidden");
    MovesDiv.classList.add("hidden");
    
};

//Attack div back to Move div
function BacktoMoves() {
    AttackDiv.classList.add("hidden");
    MovesDiv.classList.remove("hidden");
    CharizardDiv.classList.add("hidden");
};

function TextBackToMoves() {
    TextboxDiv.classList.add("hidden");
};

//Items div back to move div and changes to Charizard Prep div
function ItemsBacktoMoves() {
    ItemsDiv.classList.add("hidden");
    MovesDiv.classList.remove("hidden");
    CharizardDiv.classList.add("hidden");
};

//Set prep div to "charizard is attacking"
function CharizardAttackDiv() {
    CharizardDiv.classList.remove("hidden");
    AttackDiv.classList.add("hidden");
    ItemsDiv.classList.add("hidden");
};

//Set div to "Charizard missed" or "Charizard did x amounts of damage"
function CharizardDmgCheck() {
    TextboxDiv.classList.remove("hidden");
    CharizardDiv.classList.add("hidden");
};

//Checks who won, first it checks if the player did enough damage to finish the enemy.
//if they didnt, it continues and after the enemy attacks, it checks if they did enough damage to finish the player.
function PostMoveCheck() {
    if (EnemyHP.value <= 0) {
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent= "Je hebt Gewonnen!";
        AttackDiv.classList.add("hidden");
    } else {
        CharizardAttackDiv();
        setTimeout(CharizardDmgCheck, 1000);
        setTimeout(EnemyAttack, 1000);
        setTimeout(PlayerHPCheck, 1001);
    };
};

//Checks if the enemy did enough damage to finish the player.
function PlayerHPCheck () {
    if (PlayerHP.value <= 0) {
            TextboxDiv.textContent= "Je hebt verloren...";
            ItemsDiv.classList.add("hidden");
            AttackDiv.classList.add("hidden");
    } else {
        setTimeout(BacktoMoves, 2000);
        setTimeout(TextBackToMoves, 2000);
        }
};


Attack.addEventListener("click", ChangetoAttack);

Item.addEventListener("click", ChangetoItems);

Item1.addEventListener("click", () => {
    Healing();
    setTimeout(PostMoveCheck, 1000);
});

Item2.addEventListener("click", () => {
    StrongHealing();
    setTimeout(PostMoveCheck, 1000);
});

Item3.addEventListener("click", ItemsBacktoMoves);

Attack1.addEventListener("click", () => {
    PlayerAttack1();
    PostMoveCheck();
});

Attack2.addEventListener("click", () => {
    PlayerAttack2();
    PostMoveCheck();
});

Attack3.addEventListener("click", () => {
    PlayerAttack3();
    PostMoveCheck();

});

Terug.addEventListener("click", BacktoMoves);

