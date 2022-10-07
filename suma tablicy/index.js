function sumArray(array) {
    if (!array) {
      return 0;
    } else if (array.length <= 2){
      return 0;
    }
    else if (Array.isArray(array)) {
      array.sort((a, b)=> {
        return a - b;
      })
      array.pop()
      array.shift()
      const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
      return sum;
    } 
  }

  function sumArray(array) {
    if (Array.isArray(array) && array.length > 2) {
     array.sort((a, b)=> {return a - b;})
     array.pop()
     array.shift()
     const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
     return sum;
   } else {
     return 0;
   }
 }