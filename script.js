class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  teach(subject) {
    return `${this.name} is now teaching ${subject}`;
  }
}
let mr = new Teacher("Ahmed");
console.log(mr.teach("Maths"));

class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  static callCount = 0;
  constructor(wheels = 2, speed = "fast enough") {
    super(wheels, speed);
    Bike.callCount++;
  }
  static incrementCallCount() {
    return `${this.callCount}`;
  }
}

let bike1 = new Bike();
let bike2 = new Bike();
let bike3 = new Bike();

console.log(Bike.incrementCallCount());

