let HP = 30;
let OppHP = 30;
let PlayerHP = document.getElementById("PlayerHP");
let EnemyHP = document.getElementById("EnemyHP");
let PotionAmount = 5;
let StrongPotionAmount = 3;
let Damage;
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
const CharizardImg = document.querySelector(".CharizardGIF");
const SnorlaxImg = document.querySelector(".SnorlaxGIF");
const PlayerBar = document.querySelector(".PlayerBar");
const EnemyBar = document.querySelector(".EnemyBar");
const Music = [ "audio/trainer-battle-music-hq.mp3", "audio/wild-pokemon-battle-music-hq.mp3",];
const AttackAudio = [ "audio/Tackle.mp3", "audio/Headbutt.mp3", "audio/Bite part 1.mp3", "audio/Double Hit 1hit.mp3", "audio/Double Kick 1hit.mp3", "audio/Fury Attack 1hit.mp3"];
const HealingSound = new Audio("audio/Healing.mp3");
const WinAudio = new Audio("audio/Victory!.mp3");
let index = Math.floor(Math.random() * Music.length);
let audio = new Audio(Music[index]);

// AUDIO CREDITS: 
//https://www.reddit.com/r/PokemonROMhacks/comments/9xgl7j/pokemon_sound_effects_collection_over_3200_sfx/ 
//https://www.youtube.com/watch?v=yw33S0GEu_o&ab_channel=Mooshorterproductions 
//https://www.youtube.com/watch?v=pXJ9Sn5lEHc&ab_channel=Pokeli
//https://www.youtube.com/watch?v=3VHvOeuy_Ak&t=4s&ab_channel=Pokeli
//https://www.youtube.com/watch?v=RnzWt5bTaYw&ab_channel=Nullfuchs


//Audio Stuff
audio.play();
audio.addEventListener("ended", playNext);
WinAudio.volume=0.5;
audio.volume=0.5;
//GPT
function playNext() {
    index = (index + 1) % tracks.length; // Go to next, loop back to start
    audio = new Audio(tracks[index]);
    audio.play();
    audio.addEventListener("ended", playNext);
  }

function AttackSound() {
    let AttackIndex = Math.floor(Math.random() * AttackAudio.length);
    let AudioAttack = new Audio(AttackAudio[AttackIndex]);
    AudioAttack.play();
  }



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
};

function EnemyAttack() {
    CalculateDamage();
    
    if (Damage > 0) {
        PlayerHP.value -= Damage;
        TextboxDiv.textContent= "Snorlax heeft " + Damage + " Damage genomen en heeft nu " + PlayerHP.value + " HP";
        AttackSound();
        shakeAnimationSnorlax();
        
    } else {
        TextboxDiv.textContent= "Charizard heeft gemist";
    }
};

function PlayerAttack1() {
    let Damage = Math.floor(Math.random()*3)+4; //Damage tussen 4 en 7
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    CharizardImg.classList.add("shake");
    EnemyHP.classList.add("horizontalShake");
    AttackSound();
};

function PlayerAttack2() {
    let Damage = Math.floor(Math.random()*3)+3; //Damage tussen 3 en 6
    EnemyHP.value-= Damage;
    OppHP-= Damage;
    AttackSound();
};

function PlayerAttack3() {
    let Damage = Math.floor(Math.random()*4)+3; //Damage tussen 3 en 7
    EnemyHP.value -= Damage;
    OppHP -= Damage;
    console.log("attack3");
    AttackSound();
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
        HealingSound.play();
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
        HealingSound.play();
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

function WinningAudio() {
    
    audio.pause();
}
//Checks who won, first it checks if the player did enough damage to finish the enemy.
//if they didnt, it continues and after the enemy attacks, it checks if they did enough damage to finish the player.
function PostMoveCheck() {
    if (EnemyHP.value <= 0) {
        TextboxDiv.classList.remove("hidden");
        TextboxDiv.textContent= "Je hebt Gewonnen!";
        AttackDiv.classList.add("hidden");
        WinAudio.play();
        audio.pause();
    } else {
        CharizardAttackDiv();
        setTimeout(CharizardDmgCheck, 1000);
        setTimeout(EnemyAttack, 1000);
        setTimeout(resetAnimations, 3000)
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
    shakeAnimationCharizard();
    AttackSound();
});

Attack2.addEventListener("click", () => {
    PlayerAttack2();
    shakeAnimationCharizard();
    PostMoveCheck();
    AttackSound();
});

Attack3.addEventListener("click", () => {
    PlayerAttack3();
    shakeAnimationCharizard();
    PostMoveCheck();
    AttackSound();
});

Terug.addEventListener("click", BacktoMoves);


function shakeAnimationCharizard() {
    CharizardImg.classList.add("shake");
    EnemyBar.classList.add("horizontalShake");
};

function shakeAnimationSnorlax() {
    PlayerBar.classList.add("horizontalShake");
    SnorlaxImg.classList.add("shake"); 
}

function resetAnimations() {
    CharizardImg.classList.remove("shake");
    SnorlaxImg.classList.remove("shake");
    PlayerBar.classList.remove("horizontalShake");
    EnemyBar.classList.remove("horizontalShake");
}
