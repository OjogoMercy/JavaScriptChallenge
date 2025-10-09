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
const count = ages.length();
console.log(count.toString());
