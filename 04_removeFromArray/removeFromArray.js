const removeFromArray = function(array, valRemoved, ...multiVal) {
  
    for (i=0;i<array.length;i++) {
      indexOfVal = array.indexOf(valRemoved)
      
      if (indexOfVal < 0) {
        continue;
      } else {
        array.splice(indexOfVal, 1)
      }
  }
    
    for (i=0;i<multiVal.length;i++) {
      indexOfVal = array.indexOf(multiVal[i]);
      if (indexOfVal < 0) {
        continue;
      } else {
      array.splice(indexOfVal, 1)
      }
    }
    
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
