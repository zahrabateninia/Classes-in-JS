const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

// A class that uses these mix-ins can then be written like this:
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}