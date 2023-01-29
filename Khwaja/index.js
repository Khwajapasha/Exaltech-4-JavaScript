let diceImage = document.getElementById("diceImage");
let rollDice = document.getElementById("rollDice");
let diceAudio = document.getElementById("audio");

var num = null;
var total = null;
rollDice.addEventListener("click", () => {
  num = Math.ceil(Math.random() * 6);
  diceImage.setAttribute("src", `../Assets/Images/dice${num}.png`);
  diceAudio.play();
  total = total += num;
  console.log(total);
});
