'use strict';

console.log('Hello World!');

Addbeer.beerDrink = [];
Addwine.wineDrink = [];

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
  var arrayString = JSON.stringify(Addbeer.beerDrink);
  localStorage.setItem('beertData', arrayString);

}

function getStorageWine(){
  var productData = localStorage.getItem('productData');
  var parsedData = JSON.parse(productData);
}

function getStorageBeer(){
  var productData = localStorage.getItem('productData');
  var parsedData = JSON.parse(productData);
}




