let cheeseCount = 0;
let oxygenLevel = 100;

function mineCheese() {
  cheeseCount++;
  console.log("moon click", cheeseCount);
  drawBoard();
}

function drawBoard() {
  document.getElementById("cheese-money").innerText = cheeseCount;

  document.getElementById("oxygen-level").innerText = oxygenLevel;
  if (cheeseCount > 10) {
    let hammer = document.getElementById("moon-hammer");

    hammer.classList.remove("unable");
    hammer.classList.add("able");
  }
}

function moonHammer() {
  cheeseCount += 5;
}

drawBoard();
