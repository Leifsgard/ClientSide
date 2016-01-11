/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
2. Add som tags that doesn't change the visual part of the paragraph.
3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
4.Add a stylesheet that displays the changed words in fat font and in red.
5. PLay with the Methods
*/

function CheckWindow() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    window.alert("Window Height: " + windowHeight + " | Window Width: " + windowWidth);
}

function Print() {
    window.print();
}

/*
### DOM page 126:###
6. Play with the DOM-properties
*/
document.title = "Leifsgard";
document.getElementById('ptag1').addEventListener('click', function () {
    document.getElementById('ptag1').innerHTML = "URL: " + document.URL;
    document.getElementById('ptag1').className = "changedwords";
});
document.getElementById('ptag2').addEventListener('click', function () {
    document.getElementById('ptag2').innerHTML = "Last modified: " + document.lastModified;
    document.getElementById('ptag2').className = "changedwords";
});

/*
### String objects page 128, 129: ###
7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array
*/
document.getElementById('makeMeAnArray').addEventListener('click', function () {
    var wannabeArray = document.getElementById('makeMeAnArray').innerHTML;
    var trimmedWannabeArray = wannabeArray.trim();
    var trimmedWannabeArrayToUpperCase = trimmedWannabeArray.toUpperCase();
    var array = trimmedWannabeArrayToUpperCase.split(' ');

    //### String objects page 132: ###
    //9. check if the 4th element in the array is a number
    if (!array[4].isNaN) {
        window.alert("4:e elementet i arrayen är ett nummer! (" + array[4] + ")");

        //### Math page 134: ###
        //10. Round one of the numbers in the paragraph up/down
        array[4] = Math.round(array[4]).toString();
    } else {
        window.alert("4:e elementet i arrayen är inte ett nummer!");
    }

    //11. replace the 3rd word with PI then round it to the nearest integer
    var pi = Math.PI;
    array[2] = Math.round(pi).toString();

    var arrayInPTag = "";
    for (var i = 0; i < array.length; i++) {
        var changedword = array[i].replace("A", "RRRRR");
        arrayInPTag += changedword + "<br>";
    }
    document.getElementById('makeMeAnArray').innerHTML = arrayInPTag;
});

document.getElementById('checkaindexof').addEventListener('click', function () {
    window.alert("'a' återfinns " + document.getElementById('checkaindexof').innerHTML.indexOf('a') + " gånger i paragrafen.");
});




/*
### Date object###
12. Calculate how many days it's until your birthday and present it.
*/

var daysUntilBirthday = document.getElementById("birthdayPresentation");
function getDaysUntilBirthday() {
    var today = new Date();
    var birthday = new Date(new Date().getFullYear(), 10, 2);

    if (today > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    var result = birthday - today;
    return Math.round(result / 1000 / 60 / 60 / 24);
}

var birthdayHeader = document.createElement("h2");
birthdayHeader.textContent = "Dagar tills jag fyller år: " + getDaysUntilBirthday() + " dagar";
daysUntilBirthday.appendChild(birthdayHeader);


//13. Calculate how many minutes old you are and present it.
var myBirthDate = new Date(1995, 9, 15);
function minutesOld(birthDate) {
    return Math.round((new Date() - birthDate) / 1000 / 60);
}

function printMinutesOld() {
    var minutePresentation = document.getElementById("minutePresentation");
    var minutesOldDiv = document.createElement("h2");
    minutesOldDiv.textContent = "Jag är " + minutesOld(myBirthDate) + " minuter gammal";
    minutePresentation.appendChild(minutesOldDiv);
}

printMinutesOld();