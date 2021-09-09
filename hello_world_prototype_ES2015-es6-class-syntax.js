class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {

    return this.name + ' ' + this.lastName;
  }

  static older (person1, person2) {
  	return (person1.age >= person2.age) ? person1 : person2;
  }
}