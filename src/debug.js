const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * max);
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 5 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};
//I think we have to switch the signs to < for this problem 
const getWeatherReport = (temperature) => {
  if (temperature > 90) {
    const weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    const weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    const weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }
  console.log("And that's your report!");
  return weatherReport;
};
// instead of console.log(And thats your report) include it in the return function
// We have to make sure it does not have const inside the if statements
// we would just console.log the string no need for const .. 
const returnPositiveNegativeZero = (num) => {
  return num < 0
    ? "Positive"
    : num === 0
      ? "Zero"
      : "Negative";
};
// current idea; it is trying to return 0 as positive and negative? 
// num < 0 && num > 0
module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
