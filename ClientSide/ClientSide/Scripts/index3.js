
var salesButton = document.getElementById('buttonForSalesNumber');

salesButton.addEventListener('click', function () {
    var sales = document.getElementById('sales').value;
    var result = (15000 + (sales * 0.09));
    document.getElementById('result').innerHTML = result;
}, true);
