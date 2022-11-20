"use strict"

//perso
const character = {
  firstName: "John",
  sante: 10,
};

//musiques
const musiques = [
  {titre: "Grace Kelly", auteur: "Mika"},
  {titre: "It's all coming back to me now", auteur: "Celine Dion"},
  {titre: "Running up that hill", auteur: "Kate Bush"},
  {titre: "La vériter", auteur: "ZZCCMXTP"},
  {titre: "Anissa", auteur: "Wejdene"},
];


for (let i = 0; i < 30; i++) {
  console.log(musiques[Math.floor(Math.random() * musiques.length)]);
  console.log("feux rouges restants avant l'arrivée " + (30 - i));

  if (musiques[Math.floor(Math.random() * musiques.length)].titre == "Anissa") {
    character.sante -= 1;
    console.log("la santé mental de " + character.firstName + " est a " + character.sante);
  }

  if (character.sante === 0) {
    console.log("BOOM (explosion)");
    break;
  }
}