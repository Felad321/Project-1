  
//document.getElementById("btnLogin").addEventListener("click", storeNames);

//var el = document.getElementById("btnLogin");
//if (el) {
//  el.addEventListener("click", storeNames(), false);
//}


var test1 = ""
var test2 = ""

function storeNames() {
 // var userEntered = {
  //  personFirstName: document.getElementById("targetFirstName").value,
  //  personLastName: document.getElementById("targetLastName").value
  //};
  test1 = document.getElementById("FirstName").value
  test2 = document.getElementById("LastName").value

console.log("first is " + test1);
console.log("Last is " + test2);

  localStorage.setItem("userEntered", JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem("userEntered");
  //console.log("retrievedObject: ", JSON.parse(retrievedObject));
  //console.log(userEntered.personFirstName);
  //console.log(userEntered.personLastName);
}

var theVar='';


function setupVar(){
    theVar= document.getElementById("FirstName").value;
    console.log("value is " + theVar)
return theVar;
}



function hideFunc() {
  var x = document.getElementById("loginPage")
  var y = document.getElementById("targetPage");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}


  //x.style.display = "none";
  //y.style.display = "block";

