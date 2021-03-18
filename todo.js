let task = ""
let timeLeft = ""

function createAlert() {
    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("div");

    newAlert.className = "alert alert-primary";
    newAlert.setAttribute("role", "primary");
    newAlert.innerHTML = `${task}<br>${timeLeft} day(s)`

    alerts.appendChild(newAlert);

    document.getElementById("task").value = "";
    document.getElementById("days").value = "";
    document.getElementById("task").focus()
}

function getTask() {
    //validation: task field not empty, number field not empty, number is valid and >= 1
    task = document.getElementById("task").value;
    timeLeft = document.getElementById("days").value;

    if(task.length == 0) {
        console.log("please add a task");
        }
    else if(timeLeft.length == 0) {
        console.log("please add days to complete");
    }
    else if(isNaN(Number(timeLeft))) {
        console.log("please enter a valid number of days");
    }
    else if(Number(timeLeft) < 1) {
        console.log("please enter number of days that is greater than or equal to 1");
    }
    else {
        createAlert();
    }
}

//the above function not working :/ when I enter both fields correctly it doesn't create alert, 
//but it doesn't print error message to the console
//if I don't fill any field and hit submit, it kicks the last console error message, saying to enter a number >=1
//must be another way to tell whether a field is filled or not?

//fixed up validation!!!! to check if a field is filled, checking the boolean expression variable.length == 0
//this seemed to solve all my issues and it seems like the HTML5 validation is now working as well

//is it possible to clear both inputs with like a querySelector or more general get selector?
//ok the querySelectorAll didn't work, it didn't change the value of those two inputs 
//when I tried to target them using the input element. maybe another way?

//learned about alerts in bootstrap; they are a special CSS class you assign; alerts is the first class
//you also assign a second class depending on how the alert is coded; right now I have it set to alerts-primary
//but there are all different colors
