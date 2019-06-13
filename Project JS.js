//document.getElementById("btnLogin").addEventListener("click", storeNames)

// This function created the user object and stores this object in local storage
function storeNames() {
 
  // The user profile as an object
  var userEntered = {
    personFirstName: document.getElementById("firstName").value,
    personLastName: document.getElementById("lastName").value
  };

  console.log("first is " + userEntered.personFirstName);
  console.log("Last is " + userEntered.personLastName);
  document.getElementById("targetUsernameOutput").innerHTML = userEntered.personFirstName + " " + userEntered.personLastName;

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



// Stopwatch (maybe make seperate file)

    Stopwatch = function(elem, options) {
  let timer = createTimer(),
    startButton = createButton("start", start),
    stopButton = createButton("stop", stop),
    resetButton = createButton("reset", reset),
    offset,
    clock,
    interval,
    hrs = 0,
    min = 0;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements
  elem.appendChild(timer);
  elem.appendChild(startButton);
  elem.appendChild(stopButton);
  elem.appendChild(resetButton);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement("span");
  }

  function createButton(action, handler) {
    if (action !== "reset") {
      let a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    } else if (action === "reset") {
      let a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        clean();
        event.preventDefault();
      });
      return a;
    }
  }

  function start() {
    if (!interval) {
      offset = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render(0);
  }

  function clean() {
    min = 0;
    hrs = 0;
    clock = 0;
    render(0);
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    if (Math.floor(clock / 1000) === 60) {
      min++;
      reset();
      if (min === 60) {
        min = 0;
        hrs++;
      }
    }
    timer.innerHTML =
      hrs + "<p>hrs</p>" + min + "<p>min</p>" + Math.floor(clock / 1000)+ "<p>sec</p>";
  }

  function delta() {
    var now = Date.now(),
      d = now - offset;

    offset = now;
    return d;
  }
};

// Initiating the Stopwatch
var elems = document.getElementsByClassName("timer");

for (var i = 0, len = elems.length; i < len; i++) {
  new Stopwatch(elems[i]);
}

