const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error("min must be less than max");
  return Math.floor(Math.random() * (max - min) + min);
};
//console.log(getRandomIntInRange(3, 10))
const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};
// funkoPopAddictionLevel(0)
// funkoPopAddictionLevel(1)
// funkoPopAddictionLevel(10)
// funkoPopAddictionLevel(11)
// funkoPopAddictionLevel(20)
// funkoPopAddictionLevel(21)
// funkoPopAddictionLevel(30)

//I think we have to switch the signs to < for this problem 
const getWeatherReport = (temperature) => {
  let weatherReport = ""
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport)
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport)
  } else if (temperature >= 32 && temperature <= 70) {
    weatherReport = "It's not too bad!"
    console.log(weatherReport)
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport)
  }
  console.log("And that's your report!")
  return weatherReport
};

//console.log(getWeatherReport(92))
//console.log(getWeatherReport(10))
//console.log(getWeatherReport(75))

// instead of console.log(And thats your report) include it in the return function
// We have to make sure it does not have const inside the if statements
// we would just console.log the string no need for const .. 

/** FEEDBACK: Great use of conditionals here, you could've also used a ternary here. Your code would then look like this: 
const returnPositiveNegativeZero = (num) => {
  if (num === 0) return 'Zero';
  return (num < 1) ? 'Negative' : 'Positive';
};
 */
const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return "Zero"
  } else if (num < 0) {
    return "Negative"
  } else if (num > 0) {
    return "Positive"
  }
};

// console.log(returnPositiveNegativeZero(0))
// console.log(returnPositiveNegativeZero(1))
// console.log(returnPositiveNegativeZero(2))
// console.log(returnPositiveNegativeZero(-1))
// console.log(returnPositiveNegativeZero(-2))
//return num < 0 ? "Negative" : "Positive" (THIS IS A TERNARY)
//return num < 0 ? "Negative" : "Positive"
// : num === 0
//   ? "Zero"
//   : "Negative";

// current idea; it is trying to return 0 as positive and negative? 
// num < 0 && num > 0
module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
