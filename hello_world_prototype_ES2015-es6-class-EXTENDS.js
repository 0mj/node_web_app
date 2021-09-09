class PersonWithMiddlename extends Person {
  constructor(name, middlename, lastName,age) {
    super(name, lastName, age);
    this.middlename = middlename;
  }
  getFullName() {

    return this.name + ' ' + this.middlename + ' ' + this.lastName;
  }

  static older (person1, person2) {
  	return (person1.age >= person2.age) ? person1 : person2;
  }
}

let pwmn = new PersonWithMiddlename('Tom','darkly','skadoo', 50);
let pwmn2 = new PersonWithMiddlename('Bob','Sparkly','Doo', 51);