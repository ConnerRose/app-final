//does all the stuff we need to start using the app ( arrays, objects, etc. )//////////
//Fetches saved reminders via JSON//////////

//set reminder array for later use
//<name>, <desc>, <time>, <completion>

//dependencies

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
        remind_container.insertAdjacentHTML('beforeend','<article class="reminder_tab"> <h1 class="reminder_name">' + current_remind_obj.name + '</h1><h2 class="reminder_date">' + current_remind_obj.date +  "; " + current_remind_obj.time + '</h2></article>');
    }
}