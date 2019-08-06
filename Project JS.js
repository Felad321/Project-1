//document.getElementById("btnLogin").addEventListener("click", storeNames)
// Global Variables below
var flagCreateUser = false
var flagSearch = false
var retrievedArray = localStorage.getItem("userArray");
var retrievedArrayProper = JSON.parse(retrievedArray);
  console.log("testArray is: " + retrievedArrayProper);
  console.log("retrievedArray: ", retrievedArray);

function createUser() {

    userEntered = {
    personName: document.getElementById("personName").value,
    personScores: []
    
  };

  //  console.log("first is " + userEntered.personFirstName);
    document.getElementById("targetUsernameOutput").innerHTML = userEntered.personName;
    var previousObject = localStorage.getItem("userEntered");
  //  console.log(JSON.parse(previousObject))

    // Stores the user object in local storage
    localStorage.setItem("userEntered", JSON.stringify(userEntered));
    var retrievedObject = localStorage.getItem("userEntered");
   console.log("retrievedObject: ", JSON.parse(retrievedObject));

    flagCreateUser = true
  
  
}

function selectUser() {
  selectbox = document.getElementById("ddown")
  var retrievedArraySelect = localStorage.getItem("userArray")
  var retrievedArraySelectProper = JSON.parse(retrievedArraySelect)
  for(i=0;i<retrievedArraySelectProper.length;i++){
  
  var option = document.createElement("option");
    option.value = i
    option.text = retrievedArraySelectProper[i].personName
    selectbox.add(option)

  }

  flagCreateUser = false

}

function searchUser() {
  bubbleSort();
  userIndex = binarySearch();
  flagSearch = true
  console.log(userIndex)

  if(userIndex === false){
    window.alert("That is not a valid user. Please try again.")
  } else {
  
  }
}


/* Bubble Sort and Binary Search used under permission by Krishen T.
Retrieved from: https://github.com/128234/New-SDD-Prelim-Site/blob/master/script.js
*/
function bubbleSort() {
  //The following lines display the insertion sort algorithm which sorts the array
  tempArray = retrievedArrayProper;
  first = 0;
  last = tempArray.length - 1;
  positionOfNext = last - 1;

  while (positionOfNext >= first) {
    next = tempArray[positionOfNext];
    current = positionOfNext;
    while (
      current < last &&
      next.personName.toLowerCase() > tempArray[current + 1].personName.toLowerCase()
    ) {
      current++;
      tempArray[current - 1] = tempArray[current];
    }
    tempArray[current] = next;
    positionOfNext -= 1;
  }
  retrievedArrayProper = tempArray;
  return;
}



function binarySearch() {
  //Will jump out if the array is already empty
if(retrievedArrayProper.length == 0) {
  return false;
}
  searchFlag = true
  lower = 0;
  upper = retrievedArrayProper.length - 1;
  foundIt = false;
  requiredName = inputNameSearch.value; // CHANGE

  //This will iterate through the array until it has found the value it is looking for
  do {
    middle = Math.floor((upper + lower) / 2);

    //If the value is not located in the middle, it will split the remaining array into 2 halves and will repeat the same process
    if (
      requiredName.toLowerCase() == retrievedArrayProper[middle].personName.toLowerCase()
    ) {
      foundIt = true;
      positionFound = middle + 1;
    } else if (
      requiredName.toLowerCase() < retrievedArrayProper[middle].personName.toLowerCase()
    ) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  } while (!foundIt && lower <= upper);

  //This will display its position back to the user
  if (foundIt) {
    return positionFound - 1;
  } else {
    return false;
  }
}



function finishShoot(){
  console.log(totalScore)
  // Retrieves the stored array
  userArray = JSON.parse(localStorage.getItem("userArray"));

  if(flagCreateUser == true){
    userEntered.personScores.push(totalScore)
    console.log(userEntered);
  
    
  if (userArray == null){
    userArray = []
  }
  
  userArray.push(userEntered);
  localStorage.setItem("userArray", JSON.stringify(userArray));
  console.log(userArray)

  } else if(flagSearch == true){
    var retrievedUser = retrievedArrayProper[userIndex];
        console.log(retrievedUser)
        retrievedUser.personScores.push(totalScore);
        console.log(retrievedUser.personScores)

    } else{
          
    console.log("it works!!!!111!!!")

    var addScore = document.getElementById("ddown").value
    console.log(addScore);

/*    var retrievedArray = localStorage.getItem("userArray");
    var retrievedArrayProper = JSON.parse(retrievedArray);
      console.log("testArray is: " + retrievedArrayProper);
      console.log("retrievedArray: ", retrievedArray); */
    var retrievedUser = retrievedArrayProper[addScore]
      console.log(retrievedUser);
      retrievedUser.personScores.push(totalScore)
      console.log(retrievedUser.personScores)
    //console.log("retrieved array user: ", retrievedArray[2])
    }
    retrievedArrayProper.splice(addScore,1)
    console.log("post delete: " + JSON.stringify(retrievedArrayProper))
    retrievedArrayProper.splice(addScore,0,retrievedUser)
    console.log("post add: " + JSON.stringify(retrievedArrayProper))

    
    console.log(retrievedArrayProper)
    localStorage.setItem("userArray", JSON.stringify(retrievedArrayProper));
    

  
  
  console.log("BREAK TIME AAAAAAAAAAAAAAAAAAAAAAAAA")



  if (totalScore == 100){
    window.alert("Congratulations, you scored a perfect shoot!")
  }

  //var addScore = document.getElementById("ddown").value
  //console.log(addScore);


 // location.reload()
 // PUT BACK IN LATER
  
}

/* This function hides the login page, and shows the target page
   Temporary variables are used to achieve this
*/
function hideFunc() {
  var login = document.getElementById("loginPage");
  var target = document.getElementById("targetPage");
  

  if (login.style.display === "none") {
    login.style.display = "block";
  } else {
    login.style.display = "none";
    target.style.display = "block";
    
  }
}

function showCreate() {
  var create = document.getElementById("userCreateHTML");
  var login = document.getElementById("loginPage");
  var exist = document.getElementById("userExistHTML");
  var search = document.getElementById("userSearchHTML");


  exist.style.display = "none";

  if (create.style.display === "none") {
    create.style.display = "block";
    search.style.display = "none";
    exist.style.display = "none";
  } else {
    create.style.display = "none";
    login.style.display = "block";
    search.style.display = "none";
  
  }
}

function showLogin() {
  var exist = document.getElementById("userExistHTML");
  var login = document.getElementById("loginPage");
  var create = document.getElementById("userCreateHTML");
  var search = document.getElementById("userSearchHTML");


  create.style.display = "none";

  if (exist.style.display === "none") {
    exist.style.display = "block";
    search.style.display = "none";
    create.style.display = "none";
  } else {
    exist.style.display = "none";
    login.style.display = "block";
    search.style.display = "none";
    
  }
}

function showSearch() {
  var search = document.getElementById("userSearchHTML");
  var login = document.getElementById("loginPage");
  var create = document.getElementById("userCreateHTML");
  var exist = document.getElementById("userExistHTML");

  create.style.display = "none";
  exist.style.display = "none";

  if (search.style.display === "none") {
    search.style.display = "block";
    exist.style.diplay = "none";
    create.style.display = "none";
  } else {
    search.style.display = "none";
    login.style.display = "block";
    exist.style.diplay = "none";
    
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

