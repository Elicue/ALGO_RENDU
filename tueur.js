
class killer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

const killer1 = new killer("Jason", 100);

class victims {
  constructor(nickName, name , chanceToDie, chanceToDamage, chanceToBoth) {
    this.nameclicher = nickName;
    this.name = name;
    this.chanceToDie = chanceToDie;
    this.chanceToDamage = chanceToDamage;
    this.chanceToBoth = chanceToBoth;
  }


}


const victim1 = new victims("Nerd", "" , "", "", "");
const victim2 = new victims("Jock","" , "", "", "");
const victim3 = new victims("Stupid","" ,"", "", "");
const victim4 = new victims("Simpleton","" , "", "", "");
const victim5 = new victims("Alive","" , "", "", "");


const name = [
  "Bastien",
  "Thibaut",
  "Félix",
  "Pierre-louis",
  "Ethan",
];

const chanceToDie = [
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
];

const chanceToDamage = [
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
];

const chanceToBoth = [
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
];

const victim = [
  victim1,
  victim2,
  victim3,
  victim4,
  victim5,
];

function randomvictim() {

  for (let i = 0; i < victim.length; i++) {
    victim[i].name = name[Math.floor(Math.random() * name.length)];
    victim[i].chanceToDie = chanceToDie[Math.floor(Math.random() * chanceToDie.length)];
    victim[i].chanceToDamage = chanceToDamage[Math.floor(Math.random() * chanceToDamage.length)];
    victim[i].chanceToBoth = chanceToBoth[Math.floor(Math.random() * chanceToBoth.length)];
  }
}

function selectionvictim() {
  let victimChoosen = [];
  for (let i = 0; i < 5; i++) {
    victimChoosen.push(victim[Math.floor(Math.random() * victim.length)]);
  }
  return victimChoosen;
}

const victimChoosen = selectionvictim();

randomvictim();

let deadVictims = [];

while (victimChoosen.length > 0 && killer1.health > 0) {

  let victimchoosed = victimChoosen[Math.floor(Math.random() * victimChoosen.length)];

  let chanceDeath = Math.random() < victimchoosed.chanceToDie;

  if (chanceDeath) {
    victimChoosen.splice(victimChoosen.indexOf(victimchoosed), 1);
    deadVictims.push(victimchoosed);
    console.log(victimchoosed.name + " is dead");
  }

  let chanceDamage = Math.random() < victimchoosed.chanceToDamage;

  if (chanceDamage) {
    killer1.health -= 10;
    console.log(victimchoosed.name + " inflicted 10 damage on the killer");
  }

  let chanceBoth = Math.random() < victimchoosed.chanceToBoth;

  if (chanceBoth) {
    killer1.health -= 20;
    victimChoosen.splice(victimChoosen.indexOf(victimchoosed), 1);
    deadVictims.push(victimchoosed);
    console.log("The killer lost 20 health points and killed " + victimchoosed.name);
  }

  if (killer1.health <= 0) {
    console.log("The killer is dead");
    break;
  }

  if (victimChoosen.length === 0) {
    console.log("There's no more victim");
    break;
  }

  if (killer1.health <= 0 && victimChoosen.length === 0) {
    console.log("The killer is dead, there's no more victim");
    break;
  }
}

if (killer1.health > 0) {
  console.log("All the victims are : " + deadVictims.map(victim => victim.name).join(", "));
  console.log("The killer lost " + (100 - killer1.health) + " health points");

}

if (killer1.health <= 0) {

  console.log("The victims dead are : " + deadVictims.map(victim => victim.name).join(", "));
  console.log("The victim alive are : " + victimChoosen.map(victim => victim.name).join(", "));


}
