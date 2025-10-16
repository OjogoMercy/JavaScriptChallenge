// this is a higher order function since the first one can be accessed in another function
const callback = (n) => {
  return n ** 2 / 4;
};
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 78 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 60 },
  { name: "Martha", score: 78 },
];
const scoresOver80 = scores.filter((score) => score.score > 75);
const scoresBelow80 = scores.filter((score) => score.score < 75);
console.log("Students who scored below 75:");
console.log(scoresBelow80);
console.log("Students who scored above 75:");
console.log(scoresOver80);
const filterNames = scores.filter((score) => score.name.length === 5);
console.log(filterNames);
const findScore = scores.find((score) => score.score > 60);
console.log("Scores above 60:");
console.log(scoresOver80.map((score) => score.name));

const spokenLanguages = [
  { country: "English", count: 91 },
  { country: "French", count: 45 },
  { country: "Arabic", count: 25 },
  { country: "Spanish", count: 24 },
  { country: "Russian", count: 9 },
  { country: "Portuguese", count: 9 },
  { country: "Dutch", count: 8 },
  { country: "German", count: 7 },
  { country: "Chinese", count: 5 },
  { country: "Swahili", count: 4 },
];
const mostSpoken = spokenLanguages.filter((count) => count.count > 40);
console.log("Most Soken Languages :");
console.log(mostSpoken);

// to calculate measure of central tendency
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
function calculateMean(ages) {
  const sum = ages.reduce((total, age) => total + age, 0);
  const mean = sum / ages.length;
  return mean;
}
console.log(`The mean is ` + calculateMean(ages));
function calculateMedian(ages) {
  const sortedAges = ages.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedAges.length / 2);
  const median =
    sortedAges.length % 2 !== 0
      ? sortedAges[mid]
      : (sortedAges[mid - 1] + sortedAges[mid]) / 2;
  return median;
}
console.log("The median is :" + calculateMedian(ages));

// day 10 
const countries = new Set()
console.log(countries)
const setofAges = new Set(ages);
for (const newSet of setofAges) {
  console.log(newSet)
}
const numbers = [1,2,3,4,5,3,2,1]

setofAges.add(70) 
setofAges.add(7) 
setofAges.add(40) 
console.log(setofAges);
console.log(setofAges.has(10));
const total = [ ...ages]
console.log(total)


// Destructuring and spreading 
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
  // example of regex using a pattern to match a word in a string
  pattern = /Test/
  console.log(task.match(pattern))
  console.log(task.search(pattern))
}
// replaving a word using regex
const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

// Dya 12Regular Expressions
// Creating Regesx using patterns

// let pattern = 'Test'
// let Regex = new RegexExp(pattern)




