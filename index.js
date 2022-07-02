const sumItems = function(array) {
  for (let i in array) {
    if (Array.isArray(array[i])) {
      let num = sumItems(array[i]);
      //console.log(num);
      array[i] = num;
      //console.log(array);
    }
  }
  return array.reduce((prev, cur) =>prev + cur, 0);
    
   
};
const array = [[1, 2, [[3], 4]], 5, []];

console.log(sumItems(array));
module.exports = sumItems;