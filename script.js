// Part 1: JavaScript Basics

// Variable declaration & conditional
function askName() {
  let name = prompt("What is your name?");
  console.log("User input for name:", name); 
  if (name) {
    document.getElementById("user-message").textContent = "Hello, " + name + "!";
    console.log("Greeting displayed:", "Hello, " + name + "!");
  } else {
    document.getElementById("user-message").textContent = "You didn't enter a name.";
    console.log("No name entered.");
  }
}

// Part 2: Functions

// Function 1: Calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("function-result").textContent = "The total is: " + total;
  console.log("calculateTotal result:", total);
}

// Function 2: Format greeting
function formatGreeting(name) {
  let message = "Welcome, " + name + "! Glad to have you here.";
  document.getElementById("function-result").textContent = message;
  console.log("formatGreeting message:", message);
}

// Part 3: Loops

// Loop 1: Countdown using for loop
function showCountdown() {
  let output = "";
  for (let i = 5; i > 0; i--) {
    output += "<li>" + i + "</li>";
    console.log("Countdown number:", i);
  }
  document.getElementById("loop-output").innerHTML = output;
}

// Loop 2: Iterate array with forEach
function listFruits() {
  const fruits = ["Apple", "Banana", "Grapes", "Mango"];
  let output = "";
  fruits.forEach(function (fruit) {
    output += "<li>" + fruit + "</li>";
    console.log("Fruit in listFruits:", fruit);
  });
  document.getElementById("loop-output").innerHTML = output;
}

// Part 4: DOM Manipulation

// DOM Action 1: Change text
function changeText() {
  document.getElementById("dom-text").textContent = "The text has been changed!";
  console.log("changeText executed");
}

// DOM Action 2: Toggle class
function toggleHighlight() {
  document.getElementById("dom-text").classList.toggle("highlight");
  console.log("toggleHighlight executed");
}

// DOM Action 3: Add a new element
function addNewElement() {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "I was added dynamically.";
  document.getElementById("dom-container").appendChild(newParagraph);
  console.log("addNewElement executed");
}