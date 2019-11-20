'use strict';

//Global Elements
var storeInfoElement = document.getElementById('storeInfo');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

var storeTableElement = document.getElementById('storeTable');

var allStoresTotal = 0;

//Single constructor
function Store (storeName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesEachHour = [];
  this.totalCookiesForDay = 0;
  allStores.push(this);
  this.cookiesEachHourTotal();
  this.renderShopRows();


  this.render= function() {
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeInfoElement.appendChild(h2El);

    for (var i=0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: Cookies ${this.cookiesEachHour[i]}`;
      storeInfoElement.appendChild(liEl);
    }
    var liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesForDay}`;
    storeInfoElement.appendChild(liElem);

  };

}

function randomNumber (min , max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Store.prototype.cookiesEachHourTotal = function () {
  for (var i =0; i <hours.length; i++) {
    var totalCookiesPerHour = Math.ceil(randomNumber (this.minCustomersEachHour, this.maxCustomersEachHour)*this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(totalCookiesPerHour);
    this.totalCookiesForDay += totalCookiesPerHour;
    allStoresTotal += totalCookiesPerHour;
  }
};


//console.log(allStores);

//function to rener header row
var renderHeaderRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent ='Total';
  trEl.appendChild(tdElem);

  storeTableElement.appendChild(trEl);
};
renderHeaderRow();

//function to render shop row

Store.prototype.renderShopRows = function () {
  var trEl = document.createElement ('tr');
  var thEl = document.createElement ('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);

  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesForDay;
  trEl.appendChild(tdElem);
  storeTableElement.appendChild(trEl);
};

//funciton to render with totals
var renderFooterRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    for (var j = 0; j < allStores.length; j++) {
      storesHourlyTotals += allStores[j].cookiesEachHour[i];
    }
    td.textContent = storesHourlyTotals;
    trEl.appendChild(td);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = allStoresTotal;
  trEl.appendChild(tdElem);
  storeTableElement.appendChild(trEl);
};

new Store('Seattle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lima', '2', '16', '4.6');


var newStoreSubmission = document.getElementById('new-store-submission');
newStoreSubmission.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  var remove = document.getElementById('storeTable').lastElementChild;
  storeTableElement.removeChild(remove);

  event.preventDefault();
  var storeName=event.target.inputStoreLocal.value;
  var minCust=event.target.inputMinCustPerDay.value;
  var maxCust=event.target.inputMaxCustPerDay.value;
  var avgCookie =event.target.inputAvgCookiePerCust.value;

  new Store(storeName, +minCust, +maxCust, +avgCookie);

  event.target.inputStoreLocal.value = null;
  event.target.inputMinCustPerDay.value= null;
  event.target.inputMaxCustPerDay.value= null;
  event.target.inputAvgCookiePerCust.value= null;

  renderFooterRow();
}

console.log(allStores);

renderFooterRow();

