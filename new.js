//1
//Alex = 24

//2
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
person.call();

//3?

//4
const persons = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

//9
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  var persono = new Person("Alex", 22, "Developer");

  //8
  //Function
//Array
  //Date
 //Error
 //Object.
