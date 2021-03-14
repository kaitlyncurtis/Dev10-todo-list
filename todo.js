function createAlert() {
    let task = document.getElementById("task").value;
    let timeLeft = document.getElementById("days").value;

    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("p");
    newAlert.innerHTML = `${task}<br>${timeLeft} day(s)`

    alerts.appendChild(newAlert);
}

//.appendChild() is a method that can be used on DOM ... nodes ? 
//think this is how I can add new little objects for each task
//reminder to self to set the inputs to clear after the submit button is pressed
//reminder to self to set focus on the task input box at some point