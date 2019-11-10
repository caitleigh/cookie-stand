'use strict';

var seattleStoreElement = document.getElementById('seattleStore');
var tokyoStoreElement = document.getElementById('tokyoStore');
var dubaiStoreElement = document.getElementById('dubaiStore');
var parisStoreElement = document.getElementById('parisStore');
var limaStoreElement = document.getElementById('limaStore');

// var liEl = document.createElement('li');

// liEl.textContent = 'proof of life';

// seattleStoreElement.appendChild(liEl);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleStoreInfo = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i=0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      seattleStoreElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    seattleStoreElement.appendChild(liEl);
  }
};

//console.log('cookiesEachHour: ', seattleStoreInfo.cookiesEachHour);

function cookiesEachHourTotal (object) {
  for (var i=0; i < hours.length; i++) {
    var totalCookiesPerHour = Math.round(randomNumber (object.minCustomersEachHour, object.maxCustomersEachHour)*object.averageCookiesPerCustomer);
    //console.log('totalcookiesperhour:' , totalCookiesPerHour);
    object.cookiesEachHour.push(totalCookiesPerHour);
    object.totalCookiesForDay += totalCookiesPerHour;
  }
}


function randomNumber (min , max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
cookiesEachHourTotal (seattleStoreInfo);
console.log('seattleStoreInfo: ' , seattleStoreInfo);

seattleStoreInfo.render();

var tokyoStoreInfo = {
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      tokyoStoreElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    tokyoStoreElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (tokyoStoreInfo);
tokyoStoreInfo.render();


var dubaiStoreInfo = {
  minCustomersEachHour: 11,
  maxCustomersEachHour: 28,
  averageCookiesPerCustomer: 3.7,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      dubaiStoreElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    dubaiStoreElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (dubaiStoreInfo);
dubaiStoreInfo.render ();

var parisStoreInfo = {
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      parisStoreElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    parisStoreElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (parisStoreInfo);
parisStoreInfo.render ();

var limaStoreInfo = {
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i = 0 ; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      limaStoreElement.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForDay}`; 
    limaStoreElement.appendChild(liEl);
  }
};

cookiesEachHourTotal (limaStoreInfo);
limaStoreInfo.render ();

