function Person(first, last, age ) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  
}

Person.prototype.getFullName = function(){
	return this.firstName + ' ' + this.lastName;
}

Person.older = function(person1,person2){
	return (person1.age >= person2.age) ? person1 : person2;
};