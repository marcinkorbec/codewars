function removeEveryOther(arr){
    return arr
      .map((el, index) => {
         if (!(index % 2)) {
           return el;
         }
      })
      .filter(element => {
        if (element !== undefined) {
          return element;
        }
      })
  }