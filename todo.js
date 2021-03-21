let task = document.getElementById("task");
let timeLeft = document.getElementById("days");

task.addEventListener("input", function(event) {
    if(task.validity.valueMissing) {
        task.setCustomValidity("Please enter a value");
    } else {
        task.setCustomValidity("");
    }
});
    /*
    if(task.length == 0) {
        return;
        }
    else if(timeLeft.length == 0) {
        return;
    }
    else if(isNaN(Number(timeLeft))) {
        return;
    }
    else if(Number(timeLeft) < 1) {
        return;
*/

function createAlert() {
    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("div");

    if(Number(timeLeft) <= 3) {
        newAlert.className = "d-inline-block alert alert-danger";
    }
    else if(Number(timeLeft) <=6) {
        newAlert.className = "d-inline-block alert alert-warning";
    }
    else {
        newAlert.className = "d-inline-block alert alert-secondary";
    }
    newAlert.setAttribute("role", "alert");
    newAlert.innerHTML = `${task}<br>${timeLeft} day(s)
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    //can I change positioning of button within the alert?
    alerts.appendChild(newAlert);

    //document.getElementById("task").value = "";
    //document.getElementById("days").value = "";
    document.getElementById("taskform").reset();
    //document.getElementById("task").focus();
}

function getTask() {
    task = document.getElementById("task").value;
    timeLeft = document.getElementById("days").value;
    
    if(task.length == 0) {
        return;
        }
    else if(timeLeft.length == 0) {
        return;
    }
    else if(isNaN(Number(timeLeft))) {
        return;
    }
    else if(Number(timeLeft) < 1) {
        return;
    }
    else {
        createAlert();
    }
}


//ok initial thoughts/planning. i think i still need an onclick. 
//but maybe the onclick can just be to create the alert?
//and can use eventListeners to do all validation before they even have to press the button

//read MDN on form validation and the section with custom JS. 
//they use event listeners and you can set custom validity messages based on certain conditions
//i think that's the way to go. gonna start a new branch off main n try it.

//thoughts: i want the error message to only display when the button is clicked
//i want the form to clear only when alert is created
//i went throught Content Validation API example on MDN which I think can do what I want

//is it possible to clear both inputs with like a querySelector or more general get selector?
//ok the querySelectorAll didn't work, it didn't change the value of those two inputs 
//when I tried to target them using the input element. maybe another way?

//learned something interesting about button types - submit was I think force refreshing the page.
//so it would create the alert but then page would refresh and alert would go away
//for some reason when I set the values of the two inputs to empty strings, that process of 
//refreshing would be interrupted and the alerts would stay
//changed button type to "button" and that is not a problem anymore. because "button" allows for 
//whatever custom javascript functions you want to link to it
//will have to go to docs and figure out how a button with type="submit" works

//i think I also understand why it was putting the tooltips after the alert was created
//alert was created but then values were set to "" before the form was "submitted"
//the app got confused because it was in process of trying to submit the form, but the values were empty
//so it kept throwing errors. meanwhile our alert was already created.

//.appendChild() is a method that can be used on DOM ... nodes ? 
//think this is how I can add new little objects for each task

// now trying to get the alerts to show up inline and be sized responsively
//tried assigning the d-inline class(learned from Bootstrap docs) and it looks wonky
//the lines of text withing the alert are overlapping and like "wrapping" to a new line on the page
//rather than wrapping inside the lil box
//i changed it to d-inline-block and it looks better

