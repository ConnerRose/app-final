//does all the stuff we need to start using the app ( arrays, objects, etc. )//////////
//Fetches saved reminders via JSON//////////

//set reminder array for later use
//<name>, <desc>, <time>, <completion>

//dependencies

//variables
var test_obj =  {
}

//functions
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

//write reminders to article
var remind_container = document.getElementById("remind_container");
var new_button_container = document.getElementById("new_button_container");

//loop through reminder object structure
for (i = 0; i < Object.size(test_obj); i++) {
    var current_remind_obj = test_obj[i];
    remind_container.insertAdjacentHTML('beforeend','<article class="reminder_tab"> <h1 class="reminder_name">' + current_remind_obj.name + '</h1><h2 class="reminder_date">' + current_remind_obj.time + '</h2></article>');
}

//if no reminders are present, display text
if (Object.size(test_obj) == 0){
    new_button_container.insertAdjacentHTML('beforeend','<p id="no_reminder_header">Click Here to Add New Reminder</p>');
}

