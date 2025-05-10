let HP = 30;

let HpImage = document.querySelector("img")

let PlayerHP = document.getElementById("HP")
let EnemyHP = document.getElementById("EnemyHP")



function EnemyAttack1 () {
    let EnemyAccuracy = Math.floor(Math.random()*(100-37+1))+37; 
    if (EnemyAccuracy>=50) {
        console.log(EnemyAccuracy)
        let Damage = Math.floor(Math.random()*5)+4; //Damage tussen 4 en 8
        PlayerHP.value-=Damage;
        HP-=Damage;
        console.log("Charizard heeft", HP, "HP")
    } else {
        console.log("Pokemon heeft gemist")
    }
} 

function EnemyAttack2 () {
    let EnemyAccuracy = Math.floor(Math.random()*(100-37+1))+37;
    if (EnemyAccuracy>= 65) {
        console.log(EnemyAccuracy)
        let Damage = Math.floor(Math.random()*10)+2; //Damage tussen 4 en 8
        PlayerHP.value-=Damage;
        HP-=Damage;
        console.log("Charizard heeft", HP, "HP")
    } else {
        console.log ("Pokemon heeft gemist")
    }
} 

function EnemyAttack3 () {
    let EnemyAccuracy = Math.floor(Math.random()*(100-37+1))+37;
    if (EnemyAccuracy >= 35) {
        console.log(EnemyAccuracy)
        let Damage = Math.floor(Math.random()*3)+2; //Damage tussen 4 en 8
        PlayerHP.value-=Damage;
        HP-=Damage;
        console.log("Charizard heeft", HP, "HP")
    } else {
        console.log("Pokemon heeft gemist.")
    }
} 

function RandomAttack () {
    let Dice = Math.floor(Math.random()*3)+1;
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
}

RandomAttack()