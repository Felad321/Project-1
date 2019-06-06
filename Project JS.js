document.getElementById("btnLogin").addEventListener("click", storeNames)

var totalScore = 0;
var scoreOutput = 0;

// This function created the user object and stores this object in local storage
function storeNames() {
 
  // The user profile as an object
  var userEntered = {
    personFirstName: document.getElementById("firstName").value,
    personLastName: document.getElementById("lastName").value
  };

  console.log("first is " + userEntered.personFirstName);
  console.log("Last is " + userEntered.personLastName);

  // Stores the user object in local storage
  localStorage.setItem("userEntered", JSON.stringify(userEntered));
  var retrievedObject = localStorage.getItem("userEntered");
  console.log("retrievedObject: ", JSON.parse(retrievedObject));

}

// This function hides the login page, and shows the target page
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

function scoreFive(scoreOutput){
  totalScore += 5;
  console.log(totalScore);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}

function scoreSix(scoreOutput){
  totalScore += 6;
  console.log(totalScore);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}

function scoreSeven(scoreOutput){
  totalScore += 7;
  console.log(totalScore);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}

function scoreEight(scoreOutput){
  totalScore += 8;
  console.log(totalScore);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}

function scoreNine(scoreOutput){
  totalScore += 9;
  console.log(totalScore);
 document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}

function scoreTen(scoreOutput){
  totalScore += 10;
  console.log(totalScore);
  document.getElementById("targetScoreOutput").innerHTML = "Total score is " + totalScore;
}


// Stopwat 
