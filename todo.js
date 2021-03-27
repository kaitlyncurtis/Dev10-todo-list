let task = ""
let dueDate = ""
let timeLeft = ""

//below code gets today's date, and sets tomorrow as the minimum date for the input[type="date"] in our form
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let todayDays = Math.floor(today.getTime()/86400000);
if(dd<10) {
    dd = `0${dd}`;
}
if(mm<10) {
    mm = `0${mm}`;
}
let minDate = [yyyy,mm,dd+1].join("-");
document.querySelector("input[type='date']").setAttribute("min", minDate);

//do variables need to be initialized outside of a function to be globally accessible by the whole JS document?
function getTask() {  //this function checks each error condition. if the input passes, it executes createAlert()
    task = document.getElementById("task").value;  
    dueDate = document.getElementById("date").value;
    //below code splits the date value from the form input into the yyyy, mm, and dd components that can be passed to create a new Date() object
    let dueDateyyyy = dueDate.slice(0,4);
    let dueDatemmIndex = Number(dueDate.slice(5,7)) - 1;
    let dueDatedd = dueDate.slice(8,10);

    dueDateDate = new Date(dueDateyyyy, dueDatemmIndex, dueDatedd); 
    let dueDays = Math.floor(dueDateDate.getTime()/86400000);
    timeLeft = dueDays - todayDays;

    if(task.length == 0) {  //relies on HTML5 built in error message displaying to UI.
        return;             //goal for future versions: replace built in HTML5 validation with my own custom error message pushes
        }                   //reason: the HTML5 seems to only work/work best when the form is actually SUBMITTED
    else if(timeLeft.length == 0) {   //also I can't figure out how to prevent the error message from popping up immediately after 
        return;                       //alert is created
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

function createAlert() {
    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("div");

    if(Number(timeLeft) == 1) {
        newAlert.className = "d-inline-block alert alert-danger alert-dismissable";
        newAlert.innerHTML = `${task}<br>${timeLeft} day
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    } else {
        if(Number(timeLeft) <= 3) {
            newAlert.className = "d-inline-block alert alert-danger alert-dismissable";
        }
        else if(Number(timeLeft) <=6) {
            newAlert.className = "d-inline-block alert alert-warning alert-dismissable";
        }
        else {
            newAlert.className = "d-inline-block alert alert-secondary alert-dismissable";
        }
        newAlert.innerHTML = `${task}<br>${timeLeft} days
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }
    newAlert.setAttribute("role", "alert");
    alerts.appendChild(newAlert);

    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("task").focus()
}

//working on date; i need to store TODAY in order to display # of days on the alert
//but also need to store TOMORROW so I can set it as min value for date input
//solved it: i used dd+1 in the format string.
//what's the best way to get the validation set by using a function?

//fixed up validation!!!! to check if a field is filled, checking the boolean expression variable.length == 0
//this seemed to solve all my issues and it seems like the HTML5 validation is now working as well

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

// now trying to get the alerts to show up inline and be sized responsively
//tried assigning the d-inline class(learned from Bootstrap docs) and it looks wonky
//the lines of text withing the alert are overlapping and like "wrapping" to a new line on the page
//rather than wrapping inside the lil box
//i changed it to d-inline-block and it looks better

