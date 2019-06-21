//document.getElementById("btnLogin").addEventListener("click", storeNames)

// This function created the user object and stores this object in local storage
function storeNames() {
 
  // The user profile as an object
  var userEntered = {
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


function shotLimit (amount){
  if(shotCount != 10){
    shotCount += 1;
    totalScore += amount;
  } else {
    clearInterval(timer);
    console.log("Time taken was " + time);
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


<<<<<<< HEAD
=======

>>>>>>> 97cc5dfe52866f6696fb1be7510d19b0c8326158
