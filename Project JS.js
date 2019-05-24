
//document.getElementById("btnLogin").addEventListener("click", storeNames);

var el = document.getElementById("btnLogin");
if (el) {
  el.addEventListener("click", storeNames(), false);
}


function storeNames() {
  var userEntered = {
    personFirstName: document.getElementById("targetFirstName").value,
    personLastName: document.getElementById("targetLastName").value
  };
  localStorage.setItem("userEntered", JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem("userEntered");
  console.log("retrievedObject: ", JSON.parse(retrievedObject));
  console.log(userEntered.personFirstName);
  console.log(userEntered.personLastName);
}
