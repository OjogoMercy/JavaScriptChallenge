let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;


console.log(txt.match(regEx)); 
console.log(txt.match(/\d+/g)); 

