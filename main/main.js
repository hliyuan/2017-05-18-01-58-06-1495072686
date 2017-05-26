module.exports = function main(x) {
  // Write your cade here
  var sum = 0; 
  for (var i = 0; i < x.length; i++) {
  	sum += parseInt(x.charAt(i)); 
  }
  return sum;
};
