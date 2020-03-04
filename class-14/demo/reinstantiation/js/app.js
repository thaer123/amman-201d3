'use strict';

//global variables
var allCats = [];
var catform = document.getElementById('catform');
var catlist = document.getElementById('catlist');

function Cat(name){
  this.name = name;
  allCats.push(this);
}
Cat.prototype.render = function(){
  var liEl = document.createElement('li');
  liEl.textContent = this.name;
  catlist.appendChild(liEl);
};

function handleCatSubmit(e){
  e.preventDefault(); //prevent refreshing 
  var newCat = new Cat(e.target.kitteh.value);
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(allCats);//localStorage.setItem('cats',JSON.stringify(allCats)); this is the same
  console.log('this is what is in local storage', localStorage.cats);
}
