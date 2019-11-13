/* eslint-disable no-redeclare */
'use strict';

//Global Elements
var storeInfoElement = document.getElementById('storeInfo');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//console.log('cookiesEachHour: ', seattleStoreInfo.cookiesEachHour);
//funciton below calculates cookies each hour, and pushes that info to the 'cookies each hour' array for each store object. Also calculates total cookies per day and pushes to counter for the 'total cookies per day' element of each store object. Both are rounded to a whole number.

function cookiesEachHourTotal (object) {
  for (var i=0; i < hours.length; i++) {
    var totalCookiesPerHour = Math.round(randomNumber (object.minCustomersEachHour, object.maxCustomersEachHour)*object.averageCookiesPerCustomer);
    //console.log('totalcookiesperhour:' , totalCookiesPerHour);
    object.cookiesEachHour.push(totalCookiesPerHour);
    object.totalCookiesForDay += totalCookiesPerHour;
  }
}

// Function used to calcualte random number between two variables and inclusive of variables and rounds them to a whole number.
function randomNumber (min , max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Seattle store object
var seattleStoreInfo = {
  storeName: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
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
  }
};


//call cookie total counter
cookiesEachHourTotal (seattleStoreInfo);
//console.log('seattleStoreInfo: ' , seattleStoreInfo);

// call seattle store info to display list of hours and cookies per hour
seattleStoreInfo.render();

//Toyko Store object
var tokyoStoreInfo = {
  storeName: 'Tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);

    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    // eslint-disable-next-line no-redeclare
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    storeInfoElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (tokyoStoreInfo);
tokyoStoreInfo.render();

//Dubai Store object
var dubaiStoreInfo = {
  storeName: 'Dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 28,
  averageCookiesPerCustomer: 3.7,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);

    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    storeInfoElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (dubaiStoreInfo);
dubaiStoreInfo.render ();


//Paris Store obejct
var parisStoreInfo = {
  storeName: 'Paris',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    storeInfoElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (parisStoreInfo);
parisStoreInfo.render ();


//Lima Store object
var limaStoreInfo = {
  storeName: 'Lima',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    storeInfoElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (limaStoreInfo);
limaStoreInfo.render ();

