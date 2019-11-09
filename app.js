'use strict'

var seattleStoreElement = document.getElementById('seattleStore');

var liEl = document.createElement('li');

liEl.textContent = 'proof of life';

seattleStoreElement.appendChild(liEl);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleStoreInfo = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,

  render: function() {
    for (var i=0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} cookies:'number'`;
      seattleStoreElement.appendChild(liEl);
    }
  }
  randomNumber: function (min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

