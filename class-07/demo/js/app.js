// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

function Cat(name , likes , image , goodWithKids , goodWithDogs , goodWithOtherCats, breed ){
  //var cat = {}
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.img = image;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  //return cat
}
Cat.prototype.getAge = function(min , max){
  this.age = getRandomAge(min , max);
};
Cat.prototype.render = function(){
  this.getAge(1, 9);
  var container = document.getElementById('kittenProfiles');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src' , this.img);
  articleEl.appendChild(imgEl);
  var h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  var pEl = document.createElement('p');
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  articleEl.appendChild(pEl);
  var ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for(var i = 0 ; i < this.likes.length ; i++){
    var liEl = document.createElement('li');
    liEl.textContent = this.likes[i];
    ulEl.appendChild(liEl);
  }
};

var cat1 = new Cat('Frankie' , ['cuddling' , 'chasing string' ] ,'images/frankie.jpeg',true,false,true, 'Egyptian Mau');
cat1.render();

var cat2 = new Cat('Serena',['nourmet food' , 'petting' , 'obedience'],'images/serena.jpeg',true, false, false,'Egyptian Mau');
cat2.render();

var cat3 = new Cat('Jumper',['nourmet food' , 'obedience'],'images/jumper.jpeg', true, true, true , 'Persian');
cat3.render();

function getRandomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var kittenContainer = document.getElementById('kittenProfiles');
var tableEl = document.createElement('table');

kittenContainer.appendChild(tableEl);
var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
var th1El = document.createElement('th');
th1El.textContent = 'good with cats';
trEl.appendChild(th1El);
var th2El = document.createElement('th');
th2El.textContent = 'good with dogs';
trEl.appendChild(th2El);
var th3El = document.createElement('th');
th3El.textContent = 'good with kids';
trEl.appendChild(th3El);

//the second right tree

var tr2El = document.createElement('tr');
tableEl.appendChild(tr2El);
var td1El = document.createElement('td');
td1El.textContent = cat3.goodWithOtherCats;
tr2El.appendChild(td1El);

var td2El = document.createElement('td');
td2El.textContent = cat3.goodWithDogs;
tr2El.appendChild(td2El);

var td3El = document.createElement('td');
td3El.textContent = cat3.goodWithKids;
tr2El.appendChild(td3El);


// <table>
// <tr>
//   <th>
//     good with cats
//   </th>
//   <th>
//     good with dogs
//   </th>
//   <th>good with kids</th>
// </tr>
// <tr>
//   <td>
//     true
//   </td>
//   <td>
//     true
//   </td>
//   <td>
//     false
//   </td>
// </tr>
// </table>
