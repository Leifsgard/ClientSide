

document.getElementById('btn').addEventListener('click', calculate, false);


function calculate() {
  
    var nb1 = document.getElementById('nb1').value;
    var nb2 = document.getElementById('nb2').value;

    if (nb1 > nb2) {
        document.getElementById('nb3').innerHTML = nb1;
    }
   else if (nb1 < nb2) {
        document.getElementById('nb3').innerHTML = nb2;
    } else {
       document.getElementById('nb3').innerHTML = "You entered the same number";
    }
}