'use strict';

var leveesSong = document.getElementById('leveesSong');
var randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function(){
  leveesSong.volume = Math.random();
  leveesSong.autoplay = true;
});
