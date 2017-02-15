function sum(firstNumber, secondNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var sumOfNumbers = firstNumber + secondNumber;
      if (sumOfNumbers < 10) {
      resolve(sumOfNumbers)
    }
    else {
      reject("sum greater than 10")
    }
      }, 1000);
  })
}

module.exports = sum;
