// yet to be started ( s o o n )


//document.getElementById("btnLogin").addEventListener("click", storeNames);

var el = document.getElementById("btnLogin");
    if(el){
        el.addEventListener("click",storeNames(),false)
    }


    var userEntered = {
        personFirstName: document.getElementById("targetFirstName"),
        personLastName: document.getElementById("targetLastName"),
      }
      

function storeNames(){
    targetFirstName = document.getElementById("firstName").value;
    targetLastName = document.getElementById("lastName").value;
    localStorage.setItem('userEntered', JSON.stringify(userEntered));
    var retrievedObject = localStorage.getItem('userEntered');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    console.log(userEntered.personFirstName);
    console.log(userEntered.personLastName);
    }
    


