function createAlert() {
    let task = document.getElementById("task").value;
    let timeLeft = document.getElementById("days").value;

    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("p");
    newAlert.innerHTML = `${task}<br>${timeLeft} day(s)`

    alerts.appendChild(newAlert);

    document.getElementById("task").value = "";
    document.getElementById("days").value = "";
    document.getElementById("task").focus()
}

//.appendChild() is a method that can be used on DOM ... nodes ? 
//think this is how I can add new little objects for each task
//is it possible to clear both inputs with like a querySelector or more general get selector?