/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs



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
        name: 'böööörgör from hell',
        size: '200',
        dayOfTheWeek: 'Monday',
        price: '18.90'
    },
    hamburger2 = {
        name: 'böööörgör mums fillibabba',
        size: '200',
        dayOfTheWeek: 'Tuesday',
        price: '18.90'
    },
    hamburger3 = {
        name: 'böööörgör mums mums',
        size: '200',
        dayOfTheWeek: 'Wednesday',
        price: '16.90'
    },
    hamburger4 = {
        name: 'cheeeseböööörgör yao',
        size: '200',
        dayOfTheWeek: 'Thursday',
        price: '18.90'
    },
    hamburger5 = {
        name: 'double cheeseböööörgör',
        size: '200',
        dayOfTheWeek: 'Friday',
        price: '18.90'
    },
    hamburger6 = {
        name: 'triple cheeseböööörgör',
        size: '200',
        dayOfTheWeek: 'Saturday',
        price: '18.90'
    },
    hamburger7 = {
        name: 'whoopidoopi böööörgör',
        size: '200',
        dayOfTheWeek: 'Sunday',
        price: '17.90'
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
//var drink1 = new Product('Coca Cola', '33cl', '10', 'Monday');
//var drink2 = new Product('Coca Cola Zero', '33cl', '10', 'Tuesday');
//var drink3 = new Product('Fanta', '33cl', '10', 'Wednesday');
//var drink4 = new Product('Sprite', '33cl', '10', 'Thursday');
//var drink5 = new Product('Dr Pepper', '33cl', '10', 'Friday');
//var drink6 = new Product('Ramlösa', '33cl', '10', 'Saturday');
//var drink7 = new Product('Apple Juice', '33cl', '8', 'Sunday');
//drinksArray.push(drink1, drink2, drink3, drink4, drink5, drink6, drink7);
PostProducts(drinksArray, 'drinksPlace');
/*
4. add 7 pizzas to the page using Product.
*/
var pizzaArray = [
    new Product('Vesuvio', 'medium', '50', 'Monday'),
    new Product('Hawaii', 'medium', '50', 'Tuesday'),
    new Product('Kebab', 'medium', '50', 'Wednesday'),
    new Product('Calzone', 'medium', '50', 'Thursday'),
    new Product('Margarita', 'medium', '50', 'Friday'),
    new Product('Salami', 'medium', '50', 'Saturday'),
    new Product('Speziale', 'medium', '50', 'Sunday')];
//var pizza1 = new Product('Vesuvio', 'medium', '50', 'Monday');
//var pizza2 = new Product('Hawaii', 'medium', '50', 'Tuesday');
//var pizza3 = new Product('Kebab', 'medium', '50', 'Wednesday');
//var pizza4 = new Product('Calzone', 'medium', '50', 'Thursday');
//var pizza5 = new Product('Margarita', 'medium', '50', 'Friday');
//var pizza6 = new Product('Salami', 'medium', '50', 'Saturday');
//var pizza7 = new Product('Speziale', 'medium', '50', 'Sunday');
//pizzaArray.push(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7);
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
//var sub1 = new Product('Ham', 'footlong', '40', 'Monday');
//var sub2 = new Product('Cheese', 'footlong', '40', 'Tuesday');
//var sub3 = new Product('Chicken', 'footlong', '40', 'Wednesday');
//var sub4 = new Product('Veggie', 'footlong', '40', 'Thursday');
//var sub5 = new Product('Tuna', 'footlong', '40', 'Friday');
//var sub6 = new Product('Salami', 'footlong', '40', 'Saturday');
//var sub7 = new Product('Chicken', 'footlong', '40', 'Sunday');
//subsArray.push(sub1, sub2, sub3, sub4, sub5, sub6, sub7);
PostProducts(subsArray, 'subsPlace');
/*
6. GO to file FixIt.html
*/
//DRINKS
//Subs
TodaysOffer();