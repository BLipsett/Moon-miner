class Astronaut {
  constructor(
    name = "",
    smasher = 0,
    helpers = 0,
    tankSize = 100,
    drill = 0,
    cheeseCount = 0,
    oxygenCanister = 0,
    effectiveness = 1,
    helperEffectiveness = 0
  ) {
    this.id = 0;
    this.name = name;
    this.smasher = smasher;
    this.helpers = helpers;
    this.tankSize = tankSize;
    this.drill = drill;
    this.cheeseCount = cheeseCount;
    this.oxygenCanister = oxygenCanister;
    this.effectiveness = effectiveness;
    this.helperEffectiveness = helperEffectiveness;
  }
}

export default Astronaut;
