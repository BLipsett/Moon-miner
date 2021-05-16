//let cheeseCount = 0;
// let oxygenLevel = 100;
let gametTime = 4000;

let user = {
  smasher: 0,
  helper: 0,
  tank: 100,
  drill: 0,
  cheeseCount: 0,
  oxygenCanister: 1,
  oxygenLevel: 100,
  effectiveness: 1,
  helperEffectiveness: 0,
};

let upgrades = {
  hammerCost: 10,
  alienCost: 20,
  cheeseDrillCost: 50,
  oxygenTankCost: 100,
};

function mineCheese(event) {
  user.cheeseCount += user.effectiveness;

  console.log("user cheese amount", user.cheeseCount);
  drawBoard();
}

function drawBoard() {
  let hammerDisplay = document.getElementById("hammer-display");
  let helperDisplay = document.getElementById("helper-display");
  let tankDisplay = document.getElementById("tank-display");
  let drillDisplay = document.getElementById("drill-display");

  hammerDisplay.innerText = user.smasher;
  helperDisplay.innerText = user.helper;
  tankDisplay.innerText = user.tank;
  drillDisplay.innerText = user.drill;

  document.getElementById("cheese-money").innerText = user.cheeseCount;
  if (user.cheeseCount < upgrades.hammerCost) {
    document.getElementById("moon-hammer").classList.add("tooPoor");
  } else {
    document.getElementById("moon-hammer").classList.remove("tooPoor");
  }
  if (user.cheeseCount < upgrades.alienCost) {
    document.getElementById("helper").classList.add("tooPoor");
  } else {
    document.getElementById("helper").classList.remove("tooPoor");
  }
  if (user.cheeseCount < upgrades.oxygenTankCost) {
    document.getElementById("buy-oxygen-tank").classList.add("tooPoor");
  } else {
    document.getElementById("buy-oxygen-tank").classList.remove("tooPoor");
  }

  if (user.cheeseCount < upgrades.cheeseDrillCost) {
    document.getElementById("cheese-drill").classList.add("tooPoor");
  } else {
    document.getElementById("cheese-drill").classList.remove("tooPoor");
  }

  if (user.cheeseCount < 100) {
    document.getElementById("cheese-machine").classList.add("tooPoor");
  } else {
    document.getElementById("cheese-machine").classList.remove("tooPoor");
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

function getTotal() {
  let resourceTotal =
    user.smasher + user.helper + user.drill + user.oxygenCanister;
  return resourceTotal;
}

function drawUpgrades() {
  let hammerCostElem = document.getElementById("hammer-cost");
  let alienCostElem = document.getElementById("alien-cost");
  let oxygenTankElem = document.getElementById("tank-cost");
  let cheeseDrillElem = document.getElementById("drill-cost");

  alienCostElem.innerText = upgrades.alienCost;
  hammerCostElem.innerText = upgrades.hammerCost;
  oxygenTankElem.innerText = upgrades.oxygenTankCost;
  cheeseDrillElem.innerText = upgrades.cheeseDrillCost;
}

function buyMoonHammer() {
  user.smasher++;
  user.effectiveness += 3;
  user.cheeseCount -= upgrades.hammerCost;
  upgrades.hammerCost += 20;
  if (user.smasher == 1) {
    document.getElementById("moon-hammer").innerText = upgrades.hammerCost;
  }
  drawBoard();
}

function buyOxygenTank() {
  user.oxygenCanister++;
  user.tank += Math.floor(user.tank * 0.25);
  user.oxygenLevel = user.tank;
  upgrades.oxygenTankCost *= 4;
  drawBoard();
}

function buyCheeseDrill() {
  user.drill++;
  user.helperEffectiveness += 10;
  user.cheeseCount -= upgrades.cheeseDrillCost;
  upgrades.cheeseDrillCost += Math.floor(upgrades.cheeseDrillCost * 0.25);
  drawBoard();
}

function generateOxygen() {
  user.oxygenLevel += 4;
  user.cheeseCount -= 100;
  drawBoard();
}

function buyHelper() {
  user.helper++;
  user.helperEffectiveness += 2;
  user.cheeseCount -= upgrades.alienCost;
  upgrades.alienCost += 100;

  drawBoard();
}

function alienHelp() {
  user.cheeseCount += user.helperEffectiveness;
  drawBoard();
}

function oxygenBar() {
  let total = getTotal();
  if (total < 4) {
    user.oxygenLevel -= 2;
  } else if (total >= 5) {
    user.oxygenLevel -= 3;
  } else if (total >= 10) {
    user.oxygenLevel -= 8;
  }
  document.getElementById("oxygen-level").innerText = user.oxygenLevel;
}

function startInterval() {
  document.getElementById("start-button").classList.add("d-none");
  //   let countdown = setInterval(oxygenBar, 1000);
  //   console.log("minus 2 oxygen", countdown);

  let countdown = setInterval(() => {
    oxygenBar();
    alienHelp();

    if (user.oxygenLevel <= 0) {
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

function clickEffect(event) {
  let d = document.getElementById("point-click");
  let xPx = event.clientX - 50;
  let yPx = event.clientY - 30;
  let template = "";

  d.innerHTML = /*html*/ `
  <div class="clickEffect" style="top:${yPx}px; left:${xPx}px"><p>+${user.effectiveness}</div>`;

  console.log("animation at", xPx + "and" + yPx);
  //d.innerHTML = "";
}

function buyUpgradeEffect(event, upgrade) {
  console.log(upgrades.upgrade);

  let d = document.getElementById("point-click");
  let xPx = event.clientX - 50;
  let yPx = event.clientY - 30;
  let template = "";

  //   d.innerHTML = /*html*/ `
  //   <div class="clickEffect" style="top:${yPx}px; left:${xPx}px"><p>+${user.effectiveness}</div>;`;

  //   console.log("animation at", xPx + "and" + yPx);
  //d.innerHTML = "";
}

// note turn back on after debugging

// function enableGame() {
//   document.getElementById("game-block").classList.remove("game-click");
// }

drawBoard();
