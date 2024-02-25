class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.energy = 100; // Initial energy level
    this.hunger = 0; // Initial hunger level
    this.thirst = 0; // Initial thirst level
  }

  // Method to display information about the animal
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  // Method to feed the animal
  feed() {
    this.hunger -= 10;
    this.energy += 5;
    console.log(`${this.name} has been fed.`);
  }

  // Method to hydrate the animal
  hydrate() {
    this.thirst -= 10;
    this.energy += 3;
    console.log(`${this.name} has been hydrated.`);
  }

  // Method to play with the animal
  play() {
    this.energy -= 20;
    this.hunger += 5;
    this.thirst += 5;
    console.log(`${this.name} is playing.`);
  }

  // Method to rest the animal
  rest() {
    this.energy += 30;
    console.log(`${this.name} is resting.`);
  }

  // Method to check if the animal needs attention
  needsAttention() {
    return this.energy < 50 || this.hunger > 70 || this.thirst > 70;
  }

  // Method to check if the animal is hungry
  isHungry() {
    return this.hunger > 50;
  }

  // Method to check if the animal is thirsty
  isThirsty() {
    return this.thirst > 50;
  }

  // Method to check if the animal is tired
  isTired() {
    return this.energy < 50;
  }

  // Method to perform a routine checkup on the animal
  routineCheckup() {
    console.log(`${this.name} is getting a routine checkup.`);
    if (this.needsAttention()) {
      console.log(`${this.name} needs some attention.`);
    } else {
      console.log(`${this.name} is doing fine.`);
    }
  }

  // Method to age the animal
  ageAnimal() {
    this.age += 1;
    console.log(`${this.name} has aged.`);
  }
}
