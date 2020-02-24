'use strict';
var hours = ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']


var store1 = {
    name : 'seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie : 6.3 ,
    totalCustomerPerHour : [],
    totalCookiesPerDay : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < hours.length; i++) {
          var randCustomer = getRandomCustomer(this.minCustomer , this.maxCustomer);//GET a random customer number from the function
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);//number of cookies for customer per hour
          this.totalCookiesPerDay +=  numbOfCookies;
          this.totalCustomerPerHour.push(numbOfCookies);
        }
        console.log(this.totalCookiesPerDay);
        // console.log(this.totalCustomerPerHour);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = store1.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < hours.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${hours[i]} ${this.totalCustomerPerHour[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCookiesPerDay}`;
        ulEl.appendChild(totalLi);
 
    }
};


//2 helper function to calculate random age within range
function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
store1.getNumOfCookie();
store1.render();
var store2 = {
    name : 'Tokyo',
    MinCust: 3,
    MinCustt:24,
    Avgcookie :1.2,
    getnumofcookie : function(){
        for (var i = 0; i < this.hours.length; i++) {
            totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
            total+=totalperhour[i];
            console.log(totalperhour[i]);
        }
    },
    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = store2.name;
        // var pEl = document.createElement('p');
        // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
        //  articleEl.appendChild(pEl);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < this.hours.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${total}`;

      }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  store2.getnumofcookie();
store2.render();

var store3 = {
    name : 'Dubai',
    MinCust: 11,
    MinCustt:38,
    Avgcookie :3.7,
    getnumofcookie : function(){
        for (var i = 0; i < this.hours.length; i++) {
            totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
            total+=totalperhour[i];
            console.log(totalperhour[i]);
        }
    },
    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h3El = document.createElement('h3');
        articleEl.appendChild(h3El);
        h3El.textContent = store3.name;
        // var pEl = document.createElement('p');
        // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
        //  articleEl.appendChild(pEl);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < this.hours.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
          ulEl.appendChild(liEl);
        } 
        liEl.textContent = `total ${total}`;

      }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  store3.getnumofcookie();
store3.render();



var store4 = {
    name : 'Paris',
    MinCust: 20,
    MinCustt:38,
    Avgcookie :2.3,
    getnumofcookie : function(){
        for (var i = 0; i < this.hours.length; i++) {
            totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
            total+=totalperhour[i];
            console.log(totalperhour[i]);
        }
    },
    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = store4.name;
        // var pEl = document.createElement('p');
        // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
        //  articleEl.appendChild(pEl);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < this.hours.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${total}`;


      }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  store4.getnumofcookie();
store4.render();





var store5= {
    name : 'Lima',
    MinCust: 20,
    MinCustt:38,
    Avgcookie :2.3,
    getnumofcookie : function(){
        for (var i = 0; i < this.hours.length; i++) {
            totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
            total+=totalperhour[i];
            console.log(totalperhour[i]);
        }
    },
    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h5El = document.createElement('h5');
        articleEl.appendChild(h5El);
        h5El.textContent = store5.name;
        // var pEl = document.createElement('p');
        // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
        //  articleEl.appendChild(pEl);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < this.hours.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${total}`;


      }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  store5.getnumofcookie();
store5.render();
