//document.getElementById("btnLogin").addEventListener("click", storeNames)

// This function created the user object and stores this object in local storage

/*function storeNames() {
 
  // The user profile as an object
  var userEntered = {
    personFirstName: document.getElementById("firstName").value,
    personLastName: document.getElementById("lastName").value,
    personScores: []

  };

  var userArray = [];
  userArray.push(userEntered);
  userArray = localStorage.getItem("userArray")

  //console.log("array is " + userArray)

  //var userArrayTest = userArray[0];
  //console.log(userArrayTest)

  console.log("first is " + userEntered.personFirstName);
  console.log("Last is " + userEntered.personLastName);
  document.getElementById("targetUsernameOutput").innerHTML = userEntered.personFirstName + " " + userEntered.personLastName;

  var previousObject = localStorage.getItem("userEntered");
  console.log(JSON.parse(previousObject))

  // Stores the user object in local storage
  localStorage.setItem("userEntered", JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem("userEntered");
  console.log("retrievedObject: ", JSON.parse(retrievedObject));

}
*/
function createUser() {

    userEntered = {
    personFirstName: document.getElementById("firstName").value,
    personLastName: document.getElementById("lastName").value,
    personScores: []
    
  };

  console.log("first is " + userEntered.personFirstName);
  console.log("Last is " + userEntered.personLastName);
  document.getElementById("targetUsernameOutput").innerHTML = userEntered.personFirstName + " " + userEntered.personLastName;

  var previousObject = localStorage.getItem("userEntered");
  console.log(JSON.parse(previousObject))

  // Stores the user object in local storage
  localStorage.setItem("userEntered", JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem("userEntered");
  console.log("retrievedObject: ", JSON.parse(retrievedObject));
  
}


function finishShoot(){
  console.log(totalScore)
  userEntered.personScores.push(totalScore)
  console.log(userEntered);
  userArray = JSON.parse(localStorage.getItem("userArray"));
  if (userArray == null){
    userArray = []
  }
  
  userArray.push(JSON.stringify(userEntered));

  console.log("BREAK TIME AAAAAAAAAAAAAAAAAAAAAAAAA")

  localStorage.setItem("userArray", JSON.stringify(userArray));
  var retrievedArray = localStorage.getItem("userArray");
  console.log("retrievedArray: ", JSON.parse(retrievedArray));
  location.reload()
  
}

// This function hides the login page, and shows the target page
function hideFunc() {
  var x = document.getElementById("loginPage");
  var y = document.getElementById("targetPage");
  

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    
  }
}

function showCreate() {
  var x = document.getElementById("userCreateHTML");
  var y = document.getElementById("loginPage");
  var z = document.getElementById("userExistHTML");

  z.style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  
  }
}

function showLogin() {
  var x = document.getElementById("userExistHTML");
  var y = document.getElementById("loginPage");
  var z = document.getElementById("userCreateHTML");

z.style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    
  }
}

// Below are the scoring functions, which are called whenever one of the target buttons are clicked
var totalScore = 0;
var scoreOutput = 0;
var stopwatch;
var shotCount = 0

var time = 0;
var timer = null;
function incrementTimer () {
  time += 1;
document.getElementById("targetShootDataOutput").innerHTML = "Time is " + time + " seconds!";
}

// Shot limit function
function shotLimit (amount){
  if(shotCount != 10){
    shotCount += 1;
    totalScore += amount;
    if(shotCount === 10){
       clearInterval(timer);
       console.log("Time taken was " + time);
    }
  } 

  if (shotCount == 1) {
    timer = setInterval(incrementTimer, 1000);
  }
}

function scoreFive(scoreOutput){
  shotLimit(5);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
  document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

function scoreSix(scoreOutput){
  shotLimit(6);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
  document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

function scoreSeven(scoreOutput){
  shotLimit(7);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
  document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

function scoreEight(scoreOutput){
  shotLimit(8);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
  document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

function scoreNine(scoreOutput){
  shotLimit(9);
 document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
 document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

function scoreTen(scoreOutput){
  shotLimit(10);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
  document.getElementById("targetCountOutput").innerHTML = "Shot count is " + shotCount;
}

var scores = [];

function sortScores(){
  var unsortedScores = scores;
  var sortedScores = [];
  var highest = 0; 
  var highestIndex = 0;

while (unsortedScores != 0){
  highest = unsortedScores[0];
  highestIndex = 0;
  for (var i = 0; i < unsortedScores.length; i++){
    if (unsortedScores[i] > highest){
      highest = unsortedScores[i];
      highestIndex = i;
    }
  }
  sortedScores.push(highest);
  unsortedScores.splice(highestIndex, 1);
}
scoreboard.value = scores + "\n";
scores = sortedScores;
}

