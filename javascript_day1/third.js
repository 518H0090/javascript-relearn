// Statement

// const - when value never change
const jsStatement = document.getElementById("js-statement");

// let - value can change
let name = "bob smith";
jsStatement.innerHTML = name;

let age = 25;

age = 40;

jsStatement.innerHTML += " " + age;

let kobeScore = 27;
let lebronScore = 22;

jsStatement.innerHTML = kobeScore + lebronScore;
