let obj = {
    _value: 0, // Prefixing with underscore conventionally indicates a private property
  
    // Getter method reads the value
    get value() {
      return this._value;
    },
  
    // Setter method
    set value(newValue) {
      if (newValue >= 0) {
        this._value = newValue;
      } else {
        console.log("Value must be non-negative.");
      }
    }
  };
  
  // Using the getter
  console.log(obj.value); // Output: 0
  
  // Using the setter
  obj.value = 10; // Setting the value using the setter
  console.log(obj.value); // Output: 10
  
  obj.value = -5; // Trying to set a negative value
  // Output: Value must be non-negative.
  console.log(obj.value); // Output: 10 (remains unchanged)
  