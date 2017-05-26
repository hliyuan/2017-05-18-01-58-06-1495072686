module.exports = function main(x) {
  // Write your cade here
  var sum = 0;
  var numberArray = x.split();
  for (var i = 0; i < numberArray.length; i++) {
  	sum += numberArray[i];
  }
  return sum;
};
