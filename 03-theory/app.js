"use strict";

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

let mode = "time";

setInterval(update, 1000);
update();

function update() {
  output.textContent = format(mode);
}

// Buttons 

// Qisqa tutashuv funksiyasi - замыкание
function bindMode(name) {
  return () => { 
    mode = name;
    update();
  }
}

fullBtn.onclick = bindMode("full");
 
dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

// Pure function
function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
