var exerciseThreeButton = document.getElementById("threeButton");
var exerciseThreeClearButton = document.getElementById("threeButtonClear");

exerciseThreeButton.addEventListener("click", function () {
    runLoonTwoToHundredEvenNumbers();
}, true);

exerciseThreeClearButton.addEventListener("click", function () {
    document.getElementById("exerciseThreeResult").innerHTML = "Väntar på körning...";
}, true);

function runLoonTwoToHundredEvenNumbers() {
    var numbers = "Alla jämna tal " + "<br>";
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            numbers += " " + i;
           
        }
    }
    document.getElementById("exerciseThreeResult").innerHTML = numbers;
};