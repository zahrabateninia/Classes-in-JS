class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  
  class Lion extends Cat {
    speak() {
      super.speak(); // call corresponding method of super class
      console.log(`${this.name} roars.`);
    }
  }
  
  const l = new Lion("Fuzzy");
  l.speak();
  // Fuzzy makes a noise.
  // Fuzzy roars.
  