let txt = "In 2019, I ran 30 Days of Python. Now";
let regEx = /\d+/;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

console.log(txt.repeat(5));
    const sentence =
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
      console.log(sentence.replace('%', ' '))


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
const now = new Date()
console.log(now);
 const time = new Date();
console.log('Todays date is ' + time.getDate())
let  a=  5
let  b=  4
let  c= 3
let total = a+b+c
console.log("The perimeter of the triangle is " + total);

// to calculate wages 
let hours = 40
let rate = 23
const earning = rate * hours

console.log("Your weekly earning is " + earning);
const today = new Date()
 console.log('todays date is ' + today.getFullYear()+ '-' + today.getMonth() + '-' + today.getDate())