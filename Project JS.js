// Global Variables below
  var flagCreateUser = false
  var flagSearch = false
  var flagSelectUserOpened = false
  var retrievedArray = localStorage.getItem("userArray");
  var retrievedArrayProper = JSON.parse(retrievedArray);
  console.log("testArray is: " + retrievedArrayProper);
  console.log("retrievedArray: ", retrievedArray);
  // Below are the scoring functions, which are called whenever one of the target buttons are clicked
  var totalScore = 0;
  var scoreOutput = 0;
  var shotCount = 0
  var time = 0;
  var timer = null;
// End of Global Variables


// Timer function that records the total time taken for the shoot
function incrementTimer () {
  time += 1;
  document.getElementById("timerOutput").innerHTML = "Time is " + time + " seconds!";
}

// This function creates a new user, and pushes it to the local storage
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

/* This function creates the options in the option box, and checks if the box has already been opened 
   to prevent duplicates being created*/
function selectUser() {
  selectbox = document.getElementById("optionBoxes")
  var retrievedArraySelect = localStorage.getItem("userArray")
  var retrievedArraySelectProper = JSON.parse(retrievedArraySelect)
  
  if(flagSelectUserOpened === false){
   for(i=0;i<retrievedArraySelectProper.length;i++){
  
      //select.option.remove[i]
      var option = document.createElement("option");
      option.value = i
      option.text = retrievedArraySelectProper[i].personName
      selectbox.add(option)
      flagCreateUser = false
   } } else {

  flagCreateUser = false
  
   }
  flagSelectUserOpened = true
}

// This function is used to get the value of the selected user and go to the target page
function selectUserName() {
  var usernameIndex = document.getElementById("optionBoxes").value;
  //console.log(usernameIndex);
  document.getElementById("shooterName").innerHTML = retrievedArrayProper[usernameIndex].personName;
  document.getElementById("shooterName").style.display = "block"

}

// This function is called for providing an existing user, and checks if the input user is valid
function searchUser() {
  insertionSort();
  userIndex = binarySearch();
  flagSearch = true
  //console.log(userIndex)

  if(userIndex === false){
    window.alert("That is not a valid user. Please try again.")
  } else {
    hideFunc()
  }
  document.getElementById("targetUsernameOutput").innerHTML = retrievedArrayProper[userIndex].personName;
}


/* Insertion Sort and Binary Search used and modified under permission by Krishen T.
Retrieved from: https://github.com/128234/New-SDD-Prelim-Site/blob/master/script.js */

/* Insertion sort and binary sort are used for dearching and logging into an existing user */
function insertionSort() {
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


/* This function is the primary function of storage, editing/pushing users to the local storage to save
   their scores and users. Function checks and stores according to which login option was chosen */
function finishShoot(){
  console.log(totalScore)
  // Retrieves the stored array
  userArray = JSON.parse(localStorage.getItem("userArray"));

  if(flagCreateUser == true){
    userEntered.personScores.push(totalScore)
  //  console.log(userEntered);
  
    
  if (userArray == null){
    userArray = []
  }
  
  userArray.push(userEntered);
  localStorage.setItem("userArray", JSON.stringify(userArray));
  //console.log(userArray)

  } else if(flagSearch == true){
    var retrievedUser = retrievedArrayProper[userIndex];
      //  console.log(retrievedUser)
        retrievedUser.personScores.push(totalScore);
      //  console.log(retrievedUser.personScores)

        retrievedArrayProper.splice(userIndex,1)
      //  console.log("SEARCH post delete: " + JSON.stringify(retrievedArrayProper))
        retrievedArrayProper.splice(userIndex,0,retrievedUser)
      //  console.log("SEARCH post add: " + JSON.stringify(retrievedArrayProper))
    
        
      //  console.log(retrievedArrayProper)
        localStorage.setItem("userArray", JSON.stringify(retrievedArrayProper));
        

    } else{
          
    //console.log("it works!!!!111!!!")

    var addScore = document.getElementById("optionBoxes").value
    console.log(addScore);
    var retrievedUser = retrievedArrayProper[addScore]
     // console.log(retrievedUser);
    retrievedUser.personScores.push(totalScore)
     // console.log(retrievedUser.personScores)
    //console.log("retrieved array user: ", retrievedArray[2])

    retrievedArrayProper.splice(addScore,1)
     //console.log("SELECT post delete: " + JSON.stringify(retrievedArrayProper))
    retrievedArrayProper.splice(addScore,0,retrievedUser)
     //console.log("SELECT post add: " + JSON.stringify(retrievedArrayProper))
    //console.log(retrievedArrayProper)
    localStorage.setItem("userArray", JSON.stringify(retrievedArrayProper));
    }

  if (totalScore == 100){
    window.alert("Congratulations, you scored a perfect shoot!")
  }
 // location.reload()
 // PUT BACK IN LATER
  
}

/* This function hides the login page, and shows the target page
   Temporary variables are used to achieve this */
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

// This function shows the 'Create new user' option at the login page
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

// This function shows the 'Login to an existing user' at the login page
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

// This function shows the search ('Provide the name of an existing user') option at the login page
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

// Shot limit function, limits amount of possible shots input
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

function shotAverage(totalScore,shotCount){
  for(i=0; i<=shotCount; i++){
    averageScore = Math.floor(totalScore/shotCount)
    console.log(averageScore);
  }
}

/* The below functions are the scoring functions. They change the shooter's score and the shown output */
function scoreFive(scoreOutput){
  shotLimit(5);
  shotAverage(totalScore,shotCount);
  document.getElementById("score").innerHTML = "Total score is " + totalScore;
  document.getElementById("score").style.display = "block"
  document.getElementById("average").innerHTML = "Shot average is " + averageScore;
  document.getElementById("average").style.display = "block"
  document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
  document.getElementById("shotCountOutput").style.display = "block"
}

function scoreSix(scoreOutput){
  shotLimit(6);
  shotAverage(totalScore,shotCount);
  document.getElementById("score").innerHTML = "Total score is " + totalScore;
  document.getElementById("score").style.display = "block"
  document.getElementById("average").innerHTML = "Shot average is " + averageScore;
  document.getElementById("average").style.display = "block"
  document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
  document.getElementById("shotCountOutput").style.display = "block"
}

function scoreSeven(scoreOutput){
  shotLimit(7);
  shotAverage(totalScore,shotCount);
  document.getElementById("score").innerHTML = "Total score is " + totalScore;
  document.getElementById("score").style.display = "block"
  document.getElementById("average").innerHTML = "Shot average is " + averageScore;
  document.getElementById("average").style.display = "block"
  document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
  document.getElementById("shotCountOutput").style.display = "block"
}

function scoreEight(scoreOutput){
  shotLimit(8);
  shotAverage(totalScore,shotCount);
  document.getElementById("score").innerHTML = "Total score is " + totalScore;
  document.getElementById("score").style.display = "block"
  document.getElementById("average").innerHTML = "Shot average is " + averageScore;
  document.getElementById("average").style.display = "block"
  document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
  document.getElementById("shotCountOutput").style.display = "block"
}

function scoreNine(scoreOutput){
  shotLimit(9);
  shotAverage(totalScore,shotCount);
 document.getElementById("score").innerHTML = "Total score is " + totalScore;
 document.getElementById("score").style.display = "block"
 document.getElementById("average").innerHTML = "Shot average is " + averageScore;
 document.getElementById("average").style.display = "block"
 document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
 document.getElementById("shotCountOutput").style.display = "block"
}

function scoreTen(scoreOutput){
  shotLimit(10);
  shotAverage(totalScore,shotCount);
  document.getElementById("score").innerHTML = "Total score is " + totalScore;
  document.getElementById("score").style.display = "block"
  document.getElementById("average").innerHTML = "Shot average is " + averageScore;
  document.getElementById("average").style.display = "block"
  document.getElementById("shotCountOutput").innerHTML = "Shot count is " + shotCount;
  document.getElementById("shotCountOutput").style.display = "block"
}

// This function sorts the user scores so it can be used to sort the scoreboard.
function scoreboardSort() {
  //The following lines display the insertion sort algorithm which sorts the array
  var addText = ""
  var boardCounter = 1

  for(x=0;x < retrievedArrayProper.length; x++){
    for(i=0;i < retrievedArrayProper[x].personScores.length; i++){
     tempArray = retrievedArrayProper[x].personScores;
     first = 0;
      last = tempArray.length - 1;
      positionOfNext = last - 1;

      while (positionOfNext >= first) {
        next = tempArray[positionOfNext];
        current = positionOfNext;
        while (
          current < last &&
         next > tempArray[current + 1]
      ) {
        current++;
         tempArray[current - 1] = tempArray[current];
      }
      tempArray[current] = next;
      positionOfNext -= 1;
    }
    
     
    }sortedScores = tempArray.reverse();
    //console.log(sortedScores)
    retrievedArrayProper[x].personScores = sortedScores
    //console.log("PERSONSCORES: " + retrievedArrayProper[x].personScores)

  } 
  sortArrayScores();

  /* This switch displays all of the top shooters in the user array by score,
     and checks if there is a user to display. */
  for(y=0;y < retrievedArrayProper.length;y++){
  switch (y) {
    case 0:
      document.getElementById("place1").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place1").style.display = "block";
      break;
    case 1:
      document.getElementById("place2").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place2").style.display = "block";
      break;
    case 2:
      document.getElementById("place3").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place3").style.display = "block";
      break;
    case 3:
      document.getElementById("place4").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place4").style.display = "block";
      break;
    case 4:
      document.getElementById("place5").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place5").style.display = "block";
      break;
    case 5:
      document.getElementById("place6").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place6").style.display = "block";
      break;
    case 6:
      document.getElementById("place7").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place7").style.display = "block";
      break;
    case 7:
      document.getElementById("place8").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place8").style.display = "block";
      break;
    case 8:
      document.getElementById("place9").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place9").style.display = "block";
      break;
    case 9:
      document.getElementById("place1").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
      document.getElementById("place1").style.display = "block";
      break;
    case 10:
       document.getElementById("place10").innerHTML = boardCounter + ". " + retrievedArrayProper[y].personName +" "  + retrievedArrayProper[y].personScores[0];
       document.getElementById("place10").style.display = "block";
       break;
  }
  boardCounter++
 }
 return;
}

// This function sorts the user array by the shooter's score so the scoreboard can be displayed later in order
function sortArrayScores() {
  tempArray = retrievedArrayProper;
    first = 0;
    last = tempArray.length - 1;
    positionOfNext = last - 1;
  
    while (positionOfNext >= first) {
      next = tempArray[positionOfNext];
      current = positionOfNext;
      while (
        current < last &&
        next.personScores[0] < tempArray[current + 1].personScores[0]
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

