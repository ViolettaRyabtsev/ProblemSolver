// factory functions

const ElfFunctions = {
  attack() {
    return "attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(ElfFunctions);

  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const peter = createElf("peter", "stones");
const sam = createElf("sam", "fire");

// peter.attack=ElfFunction.attack
// sam.attack=ElfFunction.attack

//Object.create

//Constructor functions

// you can use protototype { call, apply, bind } with constructor functions

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return this.name + " attack with " + this.weapon;
  }
}

const anna = new Elf("anna", "stones");

console.log(anna.name);

const sarah = new Elf("sarah", "stones");

console.log(sarah.attack());
