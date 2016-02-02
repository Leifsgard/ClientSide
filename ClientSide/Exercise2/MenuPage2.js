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

// All Product Arrays
var burgerProducts = [];
var drinkProducts = [];
var subProducts = [];
var pizzaProducts = [];


// Calling Methods
createBurgers();
createDrinks();
createSubs();
createPizzas();
addProducts(burgerProducts, "burgersPlace");
addProducts(pizzaProducts, "pizzaPlace");
addProducts(subProducts, "drinksPlace");
addProducts(drinkProducts, "subsPlace");
//consoleLogArrays();


// Functions
function addProducts(products, element) {
    var targetElement = document.getElementById(element);
    for (var i = 0; i < products.length; i++) {
        targetElement.innerHTML += '<article>' +
                               '<fieldset>' +
                               '<legend>' + products[i].day + '</legend>' +
                               '<h3>' + products[i].name + '</h3>' +
                               '<span class="imageLocation">' + '<img src="' + products[i].image + '"/>' + '</span>' +
                               '<div class="price" id="tuesday">' + products[i].price.toFixed(2) + '</div>';
    }
}

function Product(name, size, day, price, image) {
    this.name = name;
    this.size = size;
    this.day = day;
    this.price = price;
    this.image = image;
}

function createBurgers() {
    var hamburger1 = {
        name: "Steaky Burger",
        size: "small",
        day: "monday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };

    var hamburger2 = {
        name: "Cheeseburger",
        size: "medium",
        day: "tuesday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };

    var hamburger3 = {
        name: "XXL Cheeseburger",
        size: "large",
        day: "wednesday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };

    var hamburger4 = {
        name: "Big Big Mac",
        size: "large",
        day: "thursday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };
    var hamburger5 = {
        name: "Friday Special",
        size: "medium",
        day: "friday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };
    var hamburger6 = {
        name: "Frisco Saturday",
        size: "large",
        day: "saturday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };
    var hamburger7 = {
        name: "Afternoon Burger",
        size: "small",
        day: "sunday",
        price: 19.90,
        image: "Images/Hamburger.png"
    };

    burgerProducts.push(hamburger1, hamburger2, hamburger3, hamburger4, hamburger5, hamburger6, hamburger7);
}

function createDrinks() {
    var drink1 = new Product("Fanta", "medium", "monday", 7.90, "Images/Drink.png");
    var drink2 = new Product("Sprite", "medium", "tuesday", 7.90, "Images/Drink.png");
    var drink3 = new Product("Cola", "medium", "wednesday", 7.90, "Images/Drink.png");
    var drink4 = new Product("Pepsi", "medium", "thursday", 7.90, "Images/Drink.png");
    var drink5 = new Product("Cola Light", "medium", "friday", 7.90, "Images/Drink.png");
    var drink6 = new Product("Light Beer", "medium", "saturday", 7.90, "Images/Drink.png");
    var drink7 = new Product("Wine", "medium", "sunday", 7.90, "Images/Drink.png");

    drinkProducts.push(drink1, drink2, drink3, drink4, drink5, drink6, drink7);
}

function createSubs() {
    var sub1 = new Product("Mon Sub", "small", "monday", 12.90, "Images/Subs.png");
    var sub2 = new Product("Tues Sub", "small", "tuesday", 12.90, "Images/Subs.png");
    var sub3 = new Product("Wen Sub", "small", "wednesday", 12.90, "Images/Subs.png");
    var sub4 = new Product("Thurs Sub", "small", "thursday", 12.90, "Images/Subs.png");
    var sub5 = new Product("Fri Sub", "small", "friday", 12.90, "Images/Subs.png");
    var sub6 = new Product("Satur Sub", "small", "saturday", 12.90, "Images/Subs.png");
    var sub7 = new Product("Sun Sub", "small", "sunday", 12.90, "Images/Subs.png");

    subProducts.push(sub1, sub2, sub3, sub4, sub5, sub6, sub7);
}

function createPizzas() {
    var pizza1 = new Product("Hawaii", "medium", "monday", 22.90, "Images/Pizza.png");
    var pizza2 = new Product("Vesuvio", "medium", "tuesday", 22.90, "Images/Pizza.png");
    var pizza3 = new Product("Supreme", "medium", "wednesday", 22.90, "Images/Pizza.png");
    var pizza4 = new Product("Super Supreme", "medium", "thursday", 22.90, "Images/Pizza.png");
    var pizza5 = new Product("Pepperoni Lovers", "medium", "friday", 22.90, "Images/Pizza.png");
    var pizza6 = new Product("Forest", "medium", "saturday", 22.90, "Images/Pizza.png");
    var pizza7 = new Product("Lousiana", "medium", "sunday", 22.90, "Images/Pizza.png");

    pizzaProducts.push(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7);
}


// Console logging all products "name" just to be sure they're created...
function consoleLogArrays() {
    console.log("--------- Burgers ---------");
    for (var i = 0; i < burgerProducts.length; i++) {
        console.log(burgerProducts[i].name);
    }
    console.log("--------- Drinks ---------");
    for (var i = 0; i < drinkProducts.length; i++) {
        console.log(drinkProducts[i].name);
    }
    console.log("--------- Subs ---------");
    for (var i = 0; i < subProducts.length; i++) {
        console.log(subProducts[i].name);
    }
    console.log("--------- Pizzas ---------");
    for (var i = 0; i < pizzaProducts.length; i++) {
        console.log(pizzaProducts[i].name);
    }
}