// Test

const button = document.querySelector("button[type='button']");

button.addEventListener("click", () => {
  myFunction();
});

function myFunction() {
  const demo = document.querySelector("#demo");

  // demo.innerHTML = "Hello Javascript!";
  demo.style.fontSize = "40px";
  demo.style.color = "orange";

  demo.style.display = "block";

  alert("Hello Javascript");
}

function newFunction() {
  const demo = document.querySelector("#demo");
  alert("New Function");
}
