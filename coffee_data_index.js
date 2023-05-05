// 2. Create a file named index.js and import the coffee_data.js file into it using the require syntax. Steps 3-8 will be done in index.js.
const coffeeMenu = require("./coffee_data.js");
// console.log (coffeeMenu);
// console.table (coffeeMenu);


// **reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 3. Print an array of all the drinks on the menu.
const coffeeMenuName = coffeeMenu.map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuName);

// 4. Print an array of drinks that cost 5 and under.
const coffeeMenuPrice = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5) .map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuPrice);

// 5. Print an array of drinks that are priced at an even number.
const coffeeMenuPriceEven = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 === 0) .map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuPriceEven);

// 6. Print the total if you were to order one of every drink.
const coffeeMenuTotal = coffeeMenu.reduce((priceTotal, priceEach) => priceTotal + priceEach.price, 0);
console.log('Total price of each drink is $' + coffeeMenuTotal);
// Alternative Method:
// let coffeeMenuTotal = 0;
// for (let i = 0; i < coffeeMenu.length; i++) {
// coffeeMenuTotal += coffeeMenu[i].price;
// }
// console.log('Total price of each drink is $' + coffeeMenuTotal);

// 7. Print an array with all the drinks that are seasonal.
const coffeeMenuSeasonal = coffeeMenu.filter(coffeeMenu => coffeeMenu.seasonal === true) .map(coffeeMenu => coffeeMenu.name);
console.log(coffeeMenuSeasonal);

// 8. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const coffeeMenuImportedName = coffeeMenu.filter (coffeeMenu => coffeeMenu.seasonal === true) .map(coffeeMenu => coffeeMenu.name + ' with imported beans');
console.log(coffeeMenuImportedName);


// Higher order functions/methods:

/// Use to recall the pre-defined function (Not the result of the pre-defined function so don't include the () on the pre-defined function when placed in as parameter). 


// .forEach(): This behaves like For Loop on an array

/// Example: const myFunction = (letter) => { console.log (letter); }
///          const alphabet = ['a','b','c'];
///          alphabet.forEach(myfunction);
/// This will result in console logging letters a, b, c as output in each new line.


// .sort(): Sorts array

/// Example: const fruits = ['Banana','Mango','Kiwi'];
///          console.log ( fruits.sort() );
/// This will result in an array with alphabetically sorted out.
////
//// More example: const point2 = [40,10,1,5,51];
////               point2.sort((a,b) => a-b);
////               console.log (point2);
//// This will result in console logging numbers in order.


// .map(): similar to forEach function

/// Example: function addOne(num) { return num + 1; }
///          const myNumArray = [1,2,3];
///          const newArray = myNumArray.map(addOne);
///          console.log (newArray);
/// This will result in number array output that has increased by 1 ([2,3,4])


// .reduce(): 

/// Example 1: const add = (total, num) => { return total + num; }
/// let numToAdd = [10,20,30];
/// console.log(numToAdd.reduce(add));
/// This will result in adding/reducing numbers in an array to accumulative/total value (60) as a single value.

//// Exmaple 2: const attack = (total, hit) => {return total - hit;}
////            const hitPoints = [250,75,50];
////            const hitPointsRemaining = hitPoints.reduce(attack);
////            console.log(hitPointsRemaining);
//// This will result in output that is 250 - (75 + 50) = 125.

///// Example 3: const getTotalPoints = (accumulator, currentValue) => { return accumulator + currentValue; }
/////            const pointsPerQuarter = [10,12,22,14];
/////            const totalSeasonPoints = pointsPerQuarter.reduce(getTotalPoints, 10);
/////            console.log(totalSeasonPoints);
///// This will result in output that is (10 + 12 + 22 + 14) + 10 = 58 + 10 = 68.


// .filter(): 

/// Example: const isAdult = (age) => { return age >= 18; };
///          const ages = [28,34,52,16,17];
///          const result = ages.filter(isAdult);
///          console.log(result);
/// This will result in new number array output that is greater than 18 ([28,34,52])