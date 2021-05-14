let cheeseCount = 0;
let oxygenLevel = 100;
let gametTime = 4000;

let upgrades = [{}];

function mineCheese() {
  cheeseCount++;
  console.log("moon click", cheeseCount);
  drawBoard();
}

function drawBoard() {
  document.getElementById("cheese-money").innerText = cheeseCount;

  if (cheeseCount > 10) {
    let hammer = document.getElementById("moon-hammer");

    hammer.classList.remove("unable");
    hammer.classList.add("able");
  }
}

function moonHammer() {
  cheeseCount += 5;
}

function oxygenBar() {
  oxygenLevel -= 2;
  document.getElementById("oxygen-level").innerText = oxygenLevel;
}

function startInterval() {
  document.getElementById("start-button").classList.add("d-none");
  let countdown = setInterval(oxygenBar, 1000);
  console.log("minus 2 oxygen", countdown);
}

// function startGame() {
//   setTimeout(gameOver, gametTime);
//   oxygen();
// }

function gameOver() {
  alert("Game Over");
}

drawBoard();
