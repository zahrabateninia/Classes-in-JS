class Example {
    #privateField = 42; // Declaring a private field
  
    getPrivateField() {
      return this.#privateField; // Accessing the private field within the class
    }
  
    setPrivateField(value) {
      // Trying to assign a value to the private field from outside the class
      // This will cause an error because private fields can't be created or assigned later
      this.#privateField = value; // This line would result in an error
    }
  }
  
  let obj = new Example();
  console.log(obj.getPrivateField()); // Accessing private field from an instance
  // console.log(obj.#privateField); // Attempting to access private field directly results in an error
  