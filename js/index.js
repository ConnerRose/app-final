//does all the stuff we need to start using the app ( arrays, objects, etc. )//////////
//Fetches saved reminders via JSON//////////

//set reminder array for later use
//<name>, <desc>, <time>, <completion>

//dependencies

//variables
var test_obj =  {
    0: {
        "name": "stupid task",
        "time": "5/24/2019"
    },

    1: {
        "name": "stupider task",
        "time": "5/24/2019"
    },

    2: {
        "name": "poop",
        "time": "5/24/2019"
    },

    3: {
        "name": "poop 1",
        "time": "5/24/2019"
    },

    4: {
        "name": "poop 2",
        "time": "5/24/2019"
    } ,

    5: {
        "name": "poop 2000",
        "time": "5/24/2019"
    },

    6: {
        "name": "poop pee",
        "time": "5/24/2019"
    }
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

    //loop through reminder object structure
for (i = 0; i < Object.size(test_obj); i++) {
    var current_remind_obj = test_obj[i];
    remind_container.insertAdjacentHTML('beforeend','<article class="reminder_tab"> <h1 class="reminder_name">' + current_remind_obj.name + '</h1></article>');
}


