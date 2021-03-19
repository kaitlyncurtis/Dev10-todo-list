function createAlert() {
    let task = document.getElementById("task").value;
    let timeLeft = document.getElementById("days").value;

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

    alerts.appendChild(newAlert);

    document.getElementById("task").value = "";
    document.getElementById("days").value = "";
    document.getElementById("task").focus()
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

//the above function not working :/ when I enter both fields correctly it doesn't create alert, 
//but it doesn't print error message to the console
//if I don't fill any field and hit submit, it kicks the last console error message, saying to enter a number >=1
//must be another way to tell whether a field is filled or not?

//fixed up validation!!!! to check if a field is filled, checking the boolean expression variable.length == 0
//this seemed to solve all my issues and it seems like the HTML5 validation is now working as well

//ok I've realized that I had written my getTask function so that any error case would throw
//an error message to the CONSOLE
//so in an error case, it's still doing something, which causes the if-else statements to conclude,
//so that the HTML5 validation can do it's thing? and an alert isn't created inadvertently?
//maybe there's an equivalent of a break statement I can use that can accomplish the same

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