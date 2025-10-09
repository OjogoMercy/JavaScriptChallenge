let txt = "In 2019, I ran 30 Days of Python. Now";
console.log(txt.split(' '))
let regEx = /\d+/;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

console.log(txt.repeat(5));
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace("%", " "));

let isRaining = true;
isRaining
  ? console.log("If its Raining, You need a rain coat.")
  : console.log("If its not , No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("If its Raining, You need a rain coat.")
  : console.log("If its not , No need for a rain coat.");
// let number = prompt("Enter number", "number goes here");
// console.log(number);
const now = new Date();
console.log(now);
const time = new Date();
console.log("Todays date is " + time.getDate());
let a = 5;
let b = 4;
let c = 3;
let total = a + b + c;
console.log("The perimeter of the triangle is " + total);

// to calculate wages
let hours = 40;
let rate = 23;
const earning = rate * hours;

console.log("Your weekly earning is " + earning);
const today = new Date();
console.log(
  "todays date is " +
    today.getFullYear() +
    "-" +
    today.getMonth() +
    "-" +
    today.getDate()
);

// for months conditionals
let Month = "January";
if (Month === "December") {
  console.log("You need a Winter coat.");
} else if (Month === "May") {
  console.log("It might be rainy, you need a jacket.");
} else if (Month === "june") {
  console.log("Go out freely.");
} else {
  console.log(
    "It's "+ `${Month}` +
      " No need for rain coat, but you might need a winter Coat because of the cold."
  );
}

// Day 5 Arrays 
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea";

console.log(countries.sort());

let index = webTechs.indexOf('JS')
console.log(index)
console.log(fruits.sort())
for (let i = 0; i <= 16; i++) {
  console.log(i.toString());
}

function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age: ", calculateAge(1819));

function calculateEqn(a, b, c, x = null, y = null) {
  // for : ax + by + c = 0.
  // case1 if x is given
  if (x !== null) {
    if (b === 0) {
      console.log('Error , eqn cannot be found hen value is zero')
    }
    return (-(a * x + c)) / b;
  }
  if (y !== null) {
    if (a === 0) {
      console.log('Error , eqn cannot be found hen value is zero')
    }
    return (-(b * y + c)) / a;
  }
}
console.log(`The value of Y is :` + calculateEqn(2, 3, 5, 1));
console.log(`The value of X is :` + calculateEqn(2, 3, 5, null, 1));

// function to generate adom keys for ne users 
function generateKeys(Characters, Ids) {
  if (
    isNaN(Characters)|| isNaN(Ids)|| Characters <= 0 || Ids <=0
  ) {
    alert("Please enter valid positive numbers!");
    return [];
  }
  if (Characters > 15) {
    alert("Number of characters should not exceed 15.");
    return [];
  }
  let Character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let Id = [];
  for (let i = 0; i < Ids; i++){
    let userKey = "";
    for (let j = 0; j < Characters; j++){
      const randomKey = Math.floor(Math.random() * Character.length);
      userKey += Character[randomKey];
    }
   Id.push(userKey)
  }return Id
    
}
console.log(generateKeys(10, 5).toString().split(' '));

