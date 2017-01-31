function sum(firstNumber, secondNumber, callback){
var sumOfNumbers = firstNumber + secondNumber;
return callback(sumOfNumbers);
}
module.exports = sum;