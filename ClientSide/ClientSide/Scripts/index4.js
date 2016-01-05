var hourButton = document.getElementById('Calculation');

hourButton.addEventListener('click', function () {
    var hours = document.getElementById('Hours').value;
    var minutes = (hours * 60);
    var seconds = (minutes * 60);
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, true);