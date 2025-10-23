
// Day 15 Classes
// Classes are used as blueprints for creating objects 
class Person {
    constructor(firstName, lastName) {
        console.log(this);
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person = new Person('Mercy', 'Ojogo')
const person1 = new Person('Martha', 'Ojogo')
const person2 = new Person("Daniel", "Ojogo");

class Info {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) 
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person3 = new Info('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person3)
console.log(person)
console.log(person1)
console.log(person2);

// Inheritance from classes 
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
  doSomething() {
    console.log(
      "Energy is the ability to do work , does " +
        this.firstName +
        " have energy"
    );
  }
}
const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.doSomething())


// Promises 
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 2) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))