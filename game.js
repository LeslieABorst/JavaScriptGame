"use strict"

const userAnswer = prompt("Do you want to play a game?");
let userPoints = 40;
let grantPoints = 10;
let userWins = 0;

if (userAnswer === "yes") {
  const userName = prompt("What is your name?");
  while (userWins < 3 && userPoints > 0) {
    userPoints -= Math.floor(Math.random() * 2) + 1;
    grantPoints -= Math.floor(Math.random() * 2) + 1;
    console.log(`${userName} has ${userPoints}.`);
    console.log(`Grant has ${grantPoints}.`);

    if (grantPoints <= 0) {
      grantPoints = 10;
      userWins++;
    }
    if (userWins === 3) {
      console.log(`${userName} Wins!!`);
    }
    if (userPoints <= 0) {
      console.log("Grant Wins!")
    }
  }
}
else {
  alert("goodbye");
}