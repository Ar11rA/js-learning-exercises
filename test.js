function sum(firstNumber, secondNumber, callback){
var sumOfNumbers = firstNumber + secondNumber;
return callback(sumOfNumbers);
}
//var x1 = sum(5,6,(ans)=>console.log(ans));
module.exports = sum;