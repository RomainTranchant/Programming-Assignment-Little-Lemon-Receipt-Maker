// In this exercise, you will work with some data provided as an array of objects, listing 
// information about dishes available in the Little Lemon restaurant.

// You will need to write a function declaration which will be able to do two things:

//     If the function is called with the argument true, it will output the names 
//     of the dishes and calculate their final price (including 20% tax)

//     If the function is called with the argument false, it will output the names 
//     of the dishes and give their prices without the additional tax

// The expected outcome is that all the dishes' names and prices will be shown in the console output.

// The text below shows the output that your code should produce:

// Prices with 20% tax:
// Dish: Italian pasta Price: $ 11.46
// Dish: Rice with veggies Price: $ 10.38
// Dish: Chicken with potatoes Price: $ 18.66
// Dish: Vegetarian Pizza Price: $ 7.74

// Prices without tax:
// Dish: Italian pasta Price (excl.tax): $ 9.55
// Dish: Rice with veggies Price (excl.tax): $ 8.65
// Dish: Chicken with potatoes Price (excl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (excl.tax): $ 6.45


// In this lab, you will create two functions: getPrices() and getDiscount() to simulate 
// the behavior of a receipt maker for the Little Lemon restaurant. You will work with a 
// dataset representing dishes, their prices, and tax calculations. This lab reinforces the 
// concepts of arrays, objects, loops, conditionals, and defensive coding in JavaScript.







// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value (20%)
const tax = 0.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    for (var i = 0; i < dishData.length ; i++) {
        var finalPrice;
        if (taxBoolean) {
            finalPrice = dishData[i].price * (1 + tax);
        } else if (taxBoolean == false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    }
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && guests >= 0 && guests <= 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
            console.log(`Discount is: $${discount}`);
        } else if (guests >= 5) {
            discount = 10;
            console.log(`Discount is: $${discount}`);
        }
        } else {
            console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);
