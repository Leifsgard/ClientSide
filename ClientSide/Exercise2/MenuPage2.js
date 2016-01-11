function TodaysOffer() {
    var weekday = new Date().getDay();
    var backgroundcolor = "red";
    var element;
    switch (weekday) {
        case 1:
            element = document.getElementById('Monday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
        case 2:
            element = document.getElementById('Tuesday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;

            break;
        case 3:
            element = document.getElementById('Wednesday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
        case 4:
            element = document.getElementById('Thursday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
        case 5:
            element = document.getElementById('Friday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
        case 6:
            element = document.getElementById('Saturday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
        case 0:
            element = document.getElementById('Sunday');
            element.style.backgroundColor = backgroundcolor;
            element.innerHTML = Number(element.innerHTML) * 0.80;
            break;
    }
}
/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.

*/
var burgerArray = [
    hamburger1 = {
        name: 'Don Leffa Burger',
        size: '200',
        dayOfTheWeek: 'Monday',
        price: '13.37'
    },
    hamburger2 = {
        name: 'FreddieBörger',
        size: '200',
        dayOfTheWeek: 'Tuesday',
        price: '13.37'
    },
    hamburger3 = {
        name: 'Test Börger',
        size: '200',
        dayOfTheWeek: 'Wednesday',
        price: '13.37'
    },
    hamburger4 = {
        name: 'gammal börgare',
        size: '200',
        dayOfTheWeek: 'Thursday',
        price: '13.37'
    },
    hamburger5 = {
        name: 'mums burgare',
        size: '200',
        dayOfTheWeek: 'Friday',
        price: '13333.37'
    },
    hamburger6 = {
        name: 'Triple Chessio',
        size: '200',
        dayOfTheWeek: 'Saturday',
        price: '1.37'
    },
    hamburger7 = {
        name: '´Äcklig börgare',
        size: '200',
        dayOfTheWeek: 'Sunday',
        price: '1.37'
    }];
PostProducts(burgerArray, 'burgersPlace');


function PostProducts(productsArray, targetElement) {
    var element = document.getElementById(targetElement);
    for (i = 0; i < productsArray.length; i++) {
        element.innerHTML += '<article><fieldset><legend>' + productsArray[i].dayOfTheWeek + '</legend>' +
            '<h3>' + productsArray[i].name + '</h3>' +
            '<div class = "price" id="' + productsArray[i].dayOfTheWeek + '">' + productsArray[i].price;
    }
}
/*
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
*/
function Product(name, size, price, dayOfTheWeek) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.dayOfTheWeek = dayOfTheWeek;
}
/*
3. add 7 drinks to the page using Product.
*/
var drinksArray = [
    new Product('Coca Cola', '33cl', '10', 'Monday'),
    new Product('Coca Cola Zero', '33cl', '10', 'Tuesday'),
    new Product('Fanta', '33cl', '10', 'Wednesday'),
    new Product('Sprite', '33cl', '10', 'Thursday'),
    new Product('Dr Pepper', '33cl', '10', 'Friday'),
    new Product('Ramlösa', '33cl', '10', 'Saturday'),
    new Product('Apple Juice', '33cl', '8', 'Sunday')];
PostProducts(drinksArray, 'drinksPlace');
/*
4. add 7 pizzas to the page using Product.
*/
var pizzaArray = [
    new Product('Black and white', 'medium', '50', 'Monday'),
    new Product('White and black', 'medium', '50', 'Tuesday'),
    new Product('Kebab', 'medium', '50', 'Wednesday'),
    new Product('Kebabio', 'medium', '50', 'Thursday'),
    new Product('MegaGodPizza', 'medium', '50', 'Friday'),
    new Product('SalamiPizza', 'medium', '50', 'Saturday'),
    new Product('Rasmus Special', 'medium', '50', 'Sunday')];
PostProducts(pizzaArray, 'pizzaPlace');
/*
5. add 7 subs to the page using Product.
*/
var subsArray = [
    new Product('Ham', 'footlong', '40', 'Monday'),
    new Product('Cheese', 'footlong', '40', 'Tuesday'),
    new Product('Chicken', 'footlong', '40', 'Wednesday'),
    new Product('Veggie', 'footlong', '40', 'Thursday'),
    new Product('Tuna', 'footlong', '40', 'Friday'),
    new Product('Salami', 'footlong', '40', 'Saturday'),
    new Product('Chicken', 'footlong', '40', 'Sunday')];
PostProducts(subsArray, 'subsPlace');
/*
6. GO to file FixIt.html
*/
//DRINKS
//Subs
TodaysOffer();