function sum(firstNumber, secondNumber, callback) {

  var sumOfNumbers = firstNumber + secondNumber;
  setTimeout(function () {
    return callback(sumOfNumbers);
  }, 3000);
}

module.exports = sum;