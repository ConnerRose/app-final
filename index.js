//does all the stuff we need to start using the app ( arrays, objects, etc. )//////////
//Fetches saved reminders via JSON//////////

//set reminder array for later use
//<name>, <desc>, <time>

//variables
//allocate local storage for reminder structure
if('reminders' in localStorage){
    reminder_data = JSON.parse(localStorage.getItem('reminders'));
} else {   
    var reminder_data = [];
    localStorage.setItem('reminders', JSON.stringify(reminder_data));
}

//write reminders to article
var remind_container = document.getElementById("remind_container");
var new_button_container = document.getElementById("new_button_container");

//if no reminders are present, display text
if (reminder_data.length == 0){
    new_button_container.insertAdjacentHTML('beforeend','<p id="no_reminder_header">Click Here to Add New Reminder</p>');
} else {
    //loop through reminder object structure
    for (i = 0; i < reminder_data.length; i++) {
        var current_remind_obj = reminder_data[i];
        if(current_remind_obj.time !== ""){
            remind_container.insertAdjacentHTML('beforeend','<article class="reminder_tab" data-internalid="' + i + '" onclick="showDesc(' + i + ')"> <h1 class="reminder_name">' + current_remind_obj.name + '</h1><h2 class="reminder_date">' + current_remind_obj.date +  "; " + current_remind_obj.time + '</h2><h3 class="reminder_desc">' + current_remind_obj.desc + '</h3></article>');
        } else {
            remind_container.insertAdjacentHTML('beforeend','<article class="reminder_tab" data-internalid="' + i + '" onclick="showDesc(' + i + ')"> <h1 class="reminder_name">' + current_remind_obj.name + '</h1><h2 class="reminder_date">' + current_remind_obj.date + '</h2><h3 class="reminder_desc">' + current_remind_obj.desc + '</h3></article>');
        }
    }
}
//fuction to see if var is even
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}
//function to display description
function showDesc(a) {
    if(typeof b === 'undefined') {
        b = 0
    }
    if(b == 0){
        if(isEven(b) == true) {
            var x = document.getElementsByClassName("reminder_tab");
            x[a].style.paddingBottom = "60%";
        }
        b = 1
    } else {
        var x = document.getElementsByClassName("reminder_tab");
        x[a].style.paddingBottom = "30%";
        b = 0
    }
  }