const convertToCelsius = function(temp) {
  let ans=(temp-32)*5/9
  let ansRounded = Math.round(ans*10)/10
  return ansRounded;

};

const convertToFahrenheit = function(temp) {
  let ans=(temp*(9/5) + 32)
  let ansRounded = Math.round(ans*10)/10
  return ansRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
