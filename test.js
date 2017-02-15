function sum(firstNumber, secondNumber, callback) {
  setTimeout(function () {
    var sumOfNumbers = firstNumber + secondNumber;
    callback(sumOfNumbers);
  }, 1000);
}
module.exports = sum;
