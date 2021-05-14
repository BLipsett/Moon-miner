//let cheeseCount = 0;
// let oxygenLevel = 100;
let gametTime = 4000;

let user = {
  smasher: 0,
  helper: 0,
  tank: 0,
  drill: 0,
  cheeseCount: 0,
  oxygenLevel: 100,
};

let upgrades = {
  hammerCost: 10,
  alienCost: 20,
  cheeseDrill: 50,
  oxygenTank: 100,
};

function mineCheese() {
  if (user.smasher == 0) {
    user.cheeseCount++;
  } else if (user.smasher >= 1) {
    user.cheeseCount += 5;
  }
  console.log("user cheese amount", user.cheeseCount);
  drawBoard();
}

function drawBoard() {
  document.getElementById("cheese-money").innerText = user.cheeseCount;
  if (user.cheeseCount < upgrades.hammerCost) {
    document.getElementById("moon-hammer").classList.add("d-none");
  } else {
    document.getElementById("moon-hammer").classList.remove("d-none");
  }
  if (user.cheeseCount < upgrades.alienCost) {
    document.getElementById("helper").classList.add("d-none");
  } else {
    document.getElementById("helper").classList.remove("d-none");
  }

  document.getElementById("oxygen-level").innerText = user.oxygenLevel;
  //console.log(user);
  //   if (user.cheeseCount > 10) {
  //     let hammer = document.getElementById("moon-hammer");

  //     hammer.classList.remove("unable");
  //     hammer.classList.add("able");
  //   } else if (user.smasher > 1 && user.cheeseCount < 50) {
  //     hammer.classList.add("d-none");
  //   }

  drawUpgrades();
}

function drawUpgrades() {
  let hammerCostElem = document.getElementById("hammer-cost");
  let alienCostElem = document.getElementById("alien-cost");

  alienCostElem.innerText = upgrades.alienCost;
  hammerCostElem.innerText = upgrades.hammerCost;
}

function buyMoonHammer() {
  user.smasher++;
  user.cheeseCount -= upgrades.hammerCost;
  upgrades.hammerCost += 20;
  if (user.smasher == 1) {
    document.getElementById("moon-hammer").innerText = upgrades.hammerCost;
  }
  drawBoard();
}

function generateOxygen() {
  user.oxygenLevel += 4;
  user.cheeseCount -= Math.floor(user.cheeseCount / 2);
  drawBoard();
}

function buyHelper() {
  user.helper++;
  user.cheeseCount -= upgrades.alienCost;
  upgrades.alienCost += 100;

  drawBoard();
}

function alienHelp() {
  if (user.helper >= 1) {
    user.cheeseCount += user.helper * 2;
    drawBoard();
  }
}

function oxygenBar() {
  user.oxygenLevel -= 2;
  document.getElementById("oxygen-level").innerText = user.oxygenLevel;
}

function startInterval() {
  document.getElementById("start-button").classList.add("d-none");
  //   let countdown = setInterval(oxygenBar, 1000);
  //   console.log("minus 2 oxygen", countdown);

  let countdown = setInterval(() => {
    oxygenBar();
    alienHelp();

    if (user.oxygenLevel == 0) {
      alert("you lose but youre still great!");
      location.reload();
    }
  }, 1000);
}

// function startGame() {
//   setTimeout(gameOver, gametTime);
//   oxygen();
// }

function gameOver() {
  alert("Game Over");
}

drawBoard();
