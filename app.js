'use strict';

var seattleStoreElement = document.getElementById('seattleStore');
var tokyoStoreElement = document.getElementById('tokyoStore');

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

// //totalLiCookie: function(object) {
//     var liEl = docuument.createElement('li');
//     liEl.textContent= `Total Cookies: ${this.totalCookiesForDay}`;
//     seattleStoreElement.appendChild(liEl);
// }


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
      liEl.textContent = `${hours[i]}: Cookies: ${this.cookiesEachHour[i]}`;
      tokyoStoreElement.appendChild(liEl);
    }
  }
};
tokyoStoreInfo.render();


