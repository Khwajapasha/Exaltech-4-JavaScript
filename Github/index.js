let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#myBtn");
var x = document.getElementById("input");

// with event listner
btn.addEventListener("click", () => {
  console.log(containerDiv);
  containerDiv.classList.toggle("hidden");
});

// with function calling direclty
const changeColor = (value) => {
  if (value === "add") {
    console.log("=====>>>>>");
    console.log(x);
    containerDiv.innerHTML = x.value;
    containerDiv.classList.add("red");
  } else if (value === "remove") {
    containerDiv.classList.remove("red");
  } else if (value === "toggle") {
    containerDiv.classList.toggle("hidden");
  }
};

// var k = document.createElement("p");
// // var a = (containerDiv.innerHTML = document.createElement("p"));
// k.innerHTML = "I am para";
// containerDiv.append(k);
