// yet to be started ( s o o n )
var targetFirstName = document.getElementById("firstName").value;
var targetLastName = document.getElementById("lastName").value;

var userEntered = {
  firstName: targetFirstName,
  lastName: targetLastName,
}

document.getElementById("btnLogin").addEventListener("click", storeNames);

function storeNames(){
  localStorage.setItem('userEntered', JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem('userEntered');
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
}
