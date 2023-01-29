let diceImage = document.getElementById("diceImage");
let rollDice = document.getElementById("rollDice");
let diceAudio = document.getElementById("audio");
var num = null;
rollDice.addEventListener("click", () => {
  num = Math.ceil(Math.random() * 6);
  console.log(num);
  diceImage.setAttribute("src", `../Assets/Images/dice${num}.png`);
  diceAudio.play();
});
