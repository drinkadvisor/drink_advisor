'use strict';

console.log('Hello World!');

//global vars for core data
var currentUser;
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

//beer constructor
function Addbeer(name, abv, type, writtenNotes, score) {
  this.name = name;
  this.abv = abv;
  this.type = type;
  this.writtenNotes = writtenNotes;
  this.score = score;
  //push to local array
  Addbeer.beerDrink.push(this);
}

//wine constructor
function Addwine(name, abv, type, writtenNotes, score) {
  this.name = name;
  this.abv = abv;
  this.type = type;
  this.writtenNotes = writtenNotes;
  this.score = score;
  //push to local array
  Addwine.wineDrink.push(this);
}

//constructor for user
function User(name, age) {
  this.name = name;
  this.age = age;
}

//store wine in LS
function updateStorageWine() {
  var arrayString = JSON.stringify(Addwine.wineDrink);
  localStorage.setItem('wineData', arrayString);
}

//store beer in LS
function updateStorageBeer() {
  var beerString = JSON.stringify(Addbeer.beerDrink);
  localStorage.setItem('beerData', beerString);
}

//store user in LS
function updateStorageUser() {
  var currentUserString = JSON.stringify(currentUser);
  localStorage.setItem('user', currentUserString);
}

//global updateStorage
function updateStorage() {
  updateStorageWine();
  updateStorageBeer();
  updateStorageUser();
}

//get wine from LS
function getStorageWine() {
  var productData = localStorage.getItem('wineData');
  var parsedData = JSON.parse(productData);
  Addwine.wineDrink = 0;

  for (var i = 0; i < parsedData.length; i++) {
    new Addwine(parsedData[i].name, parsedData[i].abv, parsedData[i].type, parsedData[i].writtenNotes, parsedData[i].score);
  }
}

//get beer from LS
function getStorageBeer() {
  var productData = localStorage.getItem('beerData');
  var parsedData = JSON.parse(productData);
  Addbeer.beerDrink = 0;

  for (var i = 0; i < parsedData.length; i++) {
    new Addbeer(parsedData[i].name, parsedData[i].abv, parsedData[i].type, parsedData[i].writtenNotes, parsedData[i].score);
  }
}

//get user from LS
function getStorageUser() {
  var currentUser = localStorage.getItem('user');
  var parsedCurrentUser = JSON.parse(currentUser);
  return parsedCurrentUser;
}

//global getStorage
function getStorage() {
  getStorageWine();
  getStorageBeer();
  getStorageUser();
}

//util to clear storage
function clearStorage() {
  localStorage.clear();
}

//hide login
function hideLogin() {
  loginForm.setAttribute('style', 'display: none');
}

//event listener for login
function handleLogin(event) {
  event.preventDefault();
  var username = event.target.username.value;
  console.log(`User signed in as ${username}`);
  if (username !== getStorageUser()) {
    currentUser = new User(username, 999);
  }
  updateStorage();
  hideLogin();
}

function handleLogout(event) {
  event.preventDefault();
  console.log(`${username} logged out`);
  clearStorage();
  loginForm.setAttribute('style', 'display: inline-block');
}

//test block
var x = new Addbeer('corona', '5%', 'lager', 'I mean its beer with lime usually', '2.5');
console.log(x);
console.log(Addbeer.beerDrink);

//adding event listeners for login/logout
var loginForm = document.getElementById('login');
var logoutButton = document.getElementById('logout');
loginForm.addEventListener('submit', handleLogin);
logoutButton.addEventListener('click', handleLogout);

