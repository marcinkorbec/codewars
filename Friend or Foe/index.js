function friend(friends){
    let array = []
    friends.map(item => {
      if (item.length === 4) {
         array.push(item)
      }
    })
    return array;
  }