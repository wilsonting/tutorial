class Bird {}

/** Violate Liskov Substitution Principle - if Penguin extends Flying Bird */
class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Eagle extends FlyingBird {
  dive() {
    console.log("Diving...");
  }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird {
  // Problem: Can't fly!
}
