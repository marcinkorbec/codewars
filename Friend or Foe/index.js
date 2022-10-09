function friend(friends){
    let array = []
    friends.map(item => {
      if (item.length === 4) {
         array.push(item)
      }
    })
    return array;
  }


//rozwiazania innych
function friend(friends){
    return friends.filter(n => n.length === 4)
}

const friend = friends => friends.filter(friend => friend.length == 4);

function friend(friends){
  
    //Create new array called "myFriends" for add your friends
    var i,
        len = friends.length,
        myFriends = [];
    
    
    for (i = 0; i < len; i++) {
          
         //Check for names with length equal to four and it is not a number
         if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
         }
        
    }
      
    return myFriends;
  }


  const friend = f => f.filter(n => (isNaN(n) && n.length==4))

