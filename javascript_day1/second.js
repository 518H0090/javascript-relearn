// Display
const showPopup = document.querySelector("#show-popup");
const demo = document.querySelector("#display");

// InnerHtml - Write inside HTML
demo.innerHTML = "Hello World";

// document.write() - Don't use this ever - will override existing html
document.writeln(5 + 6);

// window.alert() - show popup on browser
showPopup.addEventListener("click", () => {
  window.alert("just show popup");
  window.print();
});

// console.log() - Show at console tab in browser
console.log("This just a console log");
