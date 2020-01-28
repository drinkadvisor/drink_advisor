'use strict';

Addbeer.beerDrink = [];
Addwine.wineDrink = [];
var username = null;

var beerTypes = ['Lager', 'Ale', 'IPA', 'Pilsner', 'Witbier', 'Stout', 'Pale Ale', 'Porter', 'Brown', 'Red', 'Belgian'];
var wineTypes = ['Chardonnay', 'Riesling', 'Pinot Grigio', 'Sauvignon Blanc', 'Cabernet Sauvignon', 'Pinot Noir', 'Syrah', 'Zinfandel', 'Malbec', 'Merlot'];

/*
provide the ID of the <select> element and the array of options to populate to that <select> element
arguments: <select> node id, array of strings
1.clear all <option> off the <select> tag
2.create an <option> for each element in 'optionArray' (value and name)
*/
function dropdownOptions(selectID, optionArray){
  var selectTag = document.getElementById(selectID);
  selectTag.options.length = 0;

  for(var optioni = 0; optioni < optionArray.length; optioni++){
    let option = document.createElement('option');
    option.innerText = optionArray[optioni];
    option.value = optionArray[optioni];
    selectTag.appendChild(option);
  }

}

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

var x = new Addbeer('corona', '5%', 'lager', 'I mean its beer with lime usually', '2.5');
console.log(x);
console.log(Addbeer.beerDrink);


loginForm.addEventListener('submit', handleLogin);