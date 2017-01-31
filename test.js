function sum(firstNumber, secondNumber, callback){
var sumOfNumbers = firstNumber + secondNumber;
return callback(sumOfNumbers);
}
var changed = sum(5,6,function(ans){
  console.log(ans);
});