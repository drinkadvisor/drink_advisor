'use strict';

var headerArray = [' Name ', ' ABV ', ' Type ', ' Written Notes ', ' Score (out of 10) '];
var value = ['name', 'abv', 'type', 'writtenNotes', 'score'];
Addbeer.beerDrink = [];
Addwine.wineDrink = [];
var username = null;

function Addbeer(name, abv, type, writtenNotes, score) {
  this.name = name;
  this.abv = abv;
  this.type = type;
  this.writtenNotes = writtenNotes;
  this.score = score;

  Addbeer.beerDrink.push(this);
}

function Addwine(name, abv, type, writtenNotes, score) {
  this.name = name;
  this.abv = abv;
  this.type = type;
  this.writtenNotes = writtenNotes;
  this.score = score;

  Addwine.wineDrink.push(this);
}

function updateStorageWine() {
  var arrayString = JSON.stringify(Addwine.wineDrink);
  localStorage.setItem('wineData', arrayString);
}

function updateStorageBeer() {
  var beerString = JSON.stringify(Addbeer.beerDrink);
  var nameString = JSON.stringify(username);
  var wineString = JSON.stringify(wineString);
  localStorage.setItem('beerData', beerString);
  localStorage.setItem("user", nameString);
  localStorage.setItem("wineData", wineString);

}

function getStorageWine() {
  var productData = localStorage.getItem('wineData');
  var parsedData = JSON.parse(productData);
  Addwine.wineDrink = 0;

  for (var i = 0; i < parsedData.length; i++) {
    new Addwine(parsedData[i].name, parsedData[i].abv, parsedData[i].type, parsedData[i].writtenNotes, parsedData[i].score);
  }
}

function getStorageBeer() {
  var productData = localStorage.getItem('beerData');
  var parsedData = JSON.parse(productData);
  Addbeer.beerDrink = 0;

  for (var i = 0; i < parsedData.length; i++) {
    new Addbeer(parsedData[i].name, parsedData[i].abv, parsedData[i].type, parsedData[i].writtenNotes, parsedData[i].score);
  }
}

//event listener for login
function handleLogin(event) {
  // event.preventDefault();
  console.log('hi');
  username = event.target.username.value;
  console.log(event.target.username);
  console.log(`User signed in as ${username}`);
}

//add event listener to login
var loginForm = document.getElementById('login');
loginForm.addEventListener('submit', handleLogin);

//var x = new Addbeer('corona', '5%', 'lager', 'I mean its beer with lime usually', '2.5');
//console.log(x);
//console.log(Addbeer.beerDrink);

var drinkHeader = document.getElementById('table-head');
var drinkBody = document.getElementById('table-body');

var createHeader = function () {
  for (var x = 0; x < headerArray.length; x++) {
    var categories = document.createElement('th');
    categories.textContent = headerArray[x];
    drinkHeader.appendChild(categories);
  }
};
//Need to create seperate tr function;

Addbeer.prototype.tableRow = function(){

  var tableRow = document.createElement('tr');
  drinkBody.appendChild(tableRow);
  tableRow.id = this.name;

  this.rowData();
};

Addbeer.prototype.rowData = function () {

  for (var i = 0; i < headerArray.length; i++) {
    var userDrinkData = document.createElement('td');
    userDrinkData.textContent = this[value[i]];

    var row = document.getElementById(this.name);
    row.appendChild(userDrinkData);
  }
};

new Addbeer(' Corona ', ' 5% ', 'Lager ', 'nothing special ', '5/10 ');
new Addbeer('abcc', 'dasdasd', 'asdasd', 'asdasd', '5');
createHeader();

for (var i = 0; i < Addbeer.beerDrink.length; i++) {
  Addbeer.beerDrink[i].tableRow();
}


