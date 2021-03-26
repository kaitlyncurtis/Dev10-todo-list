let task = ""
let dueDate = ""
let timeLeft = ""

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let todayDays = Math.floor(today.getTime()/86400000);
console.log(today);
console.log(todayDays);
if(dd<10) {
    dd = `0${dd}`;
}
if(mm<10) {
    mm = `0${mm}`;
}
let minDate = [yyyy,mm,dd+1].join("-");
console.log(minDate);
//do variables need to be initialized outside of a function to be globally accessible by the whole JS document?
function getTask() {  //this function checks each error condition. if the input passes, it executes createAlert()
    task = document.getElementById("task").value;  
    dueDate = document.getElementById("date").value;
    console.log(dueDate);   //does return yyyy-mm-dd string
    dueDateDate = new Date(dueDate);
    console.log(dueDateDate);
    console.log(dueDateDate.toLocaleDateString());
    let dueDays = Math.floor(dueDateDate.getTime()/86400000);
    console.log(dueDays);
    console.log(dueDays - todayDays);
    timeLeft = 0

    if(task.length == 0) {  //relies on HTML5 built in error message displaying to UI.
        return;             //goal for future versions: replace built in HTML5 validation with my own custom error message pushes
        }                   //reason: the HTML5 seems to only work/work best when the form is actually SUBMITTED
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

function createAlert() {
    let alerts = document.getElementById("alerts");
    let newAlert = document.createElement("div");

    if(Number(timeLeft) <= 3) {
        newAlert.className = "d-inline-block alert alert-danger alert-dismissable";
    }
    else if(Number(timeLeft) <=6) {
        newAlert.className = "d-inline-block alert alert-warning alert-dismissable";
    }
    else {
        newAlert.className = "d-inline-block alert alert-secondary alert-dismissable";
    }
    newAlert.setAttribute("role", "alert");
    newAlert.innerHTML = `${task}<br>${timeLeft} day(s)
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    //can I change positioning of button within the alert?
    alerts.appendChild(newAlert);

    document.getElementById("task").value = "";
    document.getElementById("days").value = "";
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

