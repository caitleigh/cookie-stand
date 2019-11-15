/* eslint-disable no-redeclare */
'use strict';

//Global Elements
var storeInfoElement = document.getElementById('storeInfo');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];


//console.log('cookiesEachHour: '
//funciton below calculates cookies each hour, and pushes that info to the 'cookies each hour' array for each store object. Also calculates total cookies per day and pushes to counter for the 'total cookies per day' element of each store object. Both are rounded to a whole number.

// function cookiesEachHourTotal (object) {
//   for (var i=0; i < hours.length; i++) {
//     var totalCookiesPerHour = Math.round(randomNumber (object.minCustomersEachHour, object.maxCustomersEachHour)*object.averageCookiesPerCustomer);
//     //console.log('totalcookiesperhour:' , totalCookiesPerHour);
//     object.cookiesEachHour.push(totalCookiesPerHour);
//     object.totalCookiesForDay += totalCookiesPerHour;
//   }
// }

// Function used to calcualte random number between two variables and inclusive of variables and rounds them to a whole number.

//Single constructor
function Store (storeName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesEachHour = [];
  this.totalCookiesForDay = 0;

  this.render= function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);

    for (var i=0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`;
    storeInfoElement.appendChild(liEl);
  };

  allStores.push(this);

}

function randomNumber (min , max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookiesEachHourTotal (Store) {
  for (var i=0; i < hours.length; i++) {
    var totalCookiesPerHour = Math.round(randomNumber (Store.minCustomersEachHour, Store.maxCustomersEachHour)*Store.averageCookiesPerCustomer);
    //console.log('totalcookiesperhour:' , totalCookiesPerHour);
    Store.cookiesEachHour.push(totalCookiesPerHour);
    Store.totalCookiesForDay += totalCookiesPerHour;
  }
}

new Store('Seattle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lima', '2', '16', '4.6');
console.log(allStores);

cookiesEachHourTotal (allStores[0]);
allStores[0].render ();

cookiesEachHourTotal(allStores[1]);
allStores[1].render();

cookiesEachHourTotal(allStores[2]);
allStores[2].render();

cookiesEachHourTotal(allStores[3]);
allStores[3].render();

cookiesEachHourTotal(allStores[4]);
allStores[4].render();
