let diceImage = document.getElementById("diceImage");
let rollDice = document.getElementById("rollDice");
var num = null;
rollDice.addEventListener("click", () => {
  num = Math.ceil(Math.random() * 6);
  console.log(num);
  diceImage.setAttribute(
    "src",
    `https://thumbs.dreamstime.com/b/dice-18514485.jpg`
  );
});
