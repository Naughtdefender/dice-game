var elDiceOne = document.getElementById("dice1");
var elDiceTwo = document.getElementById("dice2");
var elComeOut = document.getElementById("refresh");
var elPlayer1 = document.querySelector(".players ul li:first-child");
var elPlayer2 = document.querySelector(".players ul li:last-child");
var maxRoll = 1;
var countRoll =0;
var currentPlayer = 1;

elComeOut.onclick = function () {
  countRoll =0;
  rollDice();
};

function rollDice() {
  if(countRoll>=maxRoll){
    return;
  }
  var diceOne = Math.floor(Math.random() * 6) + 1;
  var diceTwo = Math.floor(Math.random() * 6) + 1;

  if (currentPlayer === 1) {
    elPlayer1.classList.add("active-player");
    elPlayer2.classList.remove("active-player");
  } else {
    elPlayer2.classList.add("active-player");
    elPlayer1.classList.remove("active-player");
  }

  if(diceOne>diceTwo){
    console.log("diceOne")
  }else{console.log("diceTwo")}

  console.log(diceOne,diceTwo);
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    elDiceTwo.classList.remove("show-" + i);
  }

  elDiceOne.classList.add("show-" + diceOne);
  elDiceTwo.classList.add("show-" + diceTwo);
  countRoll++;

  currentPlayer = currentPlayer===1?2:1;
  setTimeout(rollDice, 1000);
}
