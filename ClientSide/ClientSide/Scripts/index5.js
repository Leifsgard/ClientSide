document.getElementById('Omvandla').addEventListener('click', calculate, false);

function calculate() {

    var kronor = document.getElementById('pengar').value;
    var dollar = (kronor * 6);
    var pund = (kronor * 12);
    document.getElementById('Dollar').innerHTML = dollar;
    document.getElementById('Pund').innerHTML = pund;
};