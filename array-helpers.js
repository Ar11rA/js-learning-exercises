function operate(arr) {
  var x = arr.every(function (element) {
    if (element % 2) return true;
  });
  var y = arr.some(function (element) {
    if (element % 2) return true;
  });
  var arrDouble = arr.map(function (element) {
    return element * 2;
  });
  var filterArr = arr.filter(function (element) {
    return element % 2 == 0;
  });
  var sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  filterArr.forEach(function(element) {
    console.log("OOOOOOOOOOOOOOOO")
  });
  console.log('every ', x);
  console.log('some ', y);
  console.log('map ', arrDouble);
  console.log('filter ', filterArr);
  console.log('reduce ', sum);
}
operate([2, 3, 4, 5, 6, 8]);