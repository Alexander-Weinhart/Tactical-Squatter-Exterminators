var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

function startCountdown(){
    var currentDate = new Date().getTime();
    var countDown = new Date('31 December 2024 00:00')

    var difference = (countDown - currentDate) / 1000;
    var days = Math.floor(difference / (60 * 60 * 24));
    var hours = Math.floor(difference / (60 * 60)) % 24;
    var minutes = Math.floor(difference / 60) % 60;
    var seconds = Math.floor(difference % 60);

    daysEl.innerHTML = formatTime(days, 'Days', false);
    hoursEl.innerHTML = formatTime(hours, 'Hours', false);
    minutesEl.innerHTML = formatTime(minutes, 'Minutes', false);
    secondsEl.innerHTML = formatTime(seconds, 'Seconds', true);
};

function formatTime (timeUnit, timeDescription, hasAnd) {
    if (timeUnit == 1){
        timeDescription = timeDescription.substring(0, timeDescription.length - 1);
    };
    if (hasAnd){
        return 'and ' + timeUnit + ' ' + timeDescription;
    } else {
        return timeUnit + ' ' + timeDescription + ","
    };
};

window.addEventListener('load', function(){
    setInterval (startCountdown, 1000);
});