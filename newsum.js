var sumfn = require('./promise.js');
// sumfn(5,6,(sumOfNumbers)=>{
// console.log(sumOfNumbers)  
// });
// console.log(100);
var x=sumfn(5,4)
x.then((data)=>console.log(data),((err) => {
  console.log(err)
}))