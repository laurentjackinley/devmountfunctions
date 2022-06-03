/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gmail.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@gmail.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ]
  // Do not edit the code above.
  
  // CODE HERE 
  
  const getUserById = (arrObj, id, userInfo) => {
    for (let i=0; i<arrObj.length; i++)
        if (arrObj[i].id === id)
    return userInfo(arrObj[i])
  } 
  // UNCOMMENT THE FUNCTION CALL BELOW
  // RUN THIS FILE WITH NODE
  // CHECK YOUR ANSWER
  
  getUserById(users, '16t', user => {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
  })