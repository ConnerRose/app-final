///send fourm data to local storage///
var reminder_data = JSON.parse(localStorage.getItem('reminders'));
//grab fourm data
function sendData (){
var name = document.getElementById('fourm_name').value;
var date = document.getElementById('fourm_date').value;
var time = document.getElementById('fourm_time').value;

    reminder_data.push({
        'name': name,
        'date': date,
        'time': time
    });

    localStorage.setItem('reminders', JSON.stringify(reminder_data));
};

