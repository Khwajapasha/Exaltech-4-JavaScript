let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#myBtn");

// with event listner
btn.addEventListener("click", () => {
  console.log(containerDiv);
  containerDiv.classList.toggle("hidden");
});

// with function calling direclty
const changeColor = (value) => {
  if (value === "add") {
    console.log("=====>>>>>");
    containerDiv.classList.add("red");
  } else if (value === "remove") {
    containerDiv.classList.remove("red");
  } else if (value === "toggle") {
    containerDiv.classList.toggle("hidden");
  }
};
