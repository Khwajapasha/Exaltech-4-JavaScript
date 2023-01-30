let diceImage = document.getElementById("diceImage");


rollDice= () => {
  
  num= Math.ceil(Math.random() * 6) ;
  console.log(num);diceImage.setAttribute("src", `../Assets/Images/dice${num}.png`);
  
  };
