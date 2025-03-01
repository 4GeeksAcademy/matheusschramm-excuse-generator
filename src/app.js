import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My lawyer'];
let action = ['ate', 'peed', 'crushed', 'broke', 'sued'];
let what = ['my homework', 'my phone', 'the car', 'the bus'];
let when = ['before the class', 'when I was dreaming', 'while I was eating', 'when I was travelling', 'while I was praying'];

function getRandomNumber(min, max){
return Math.floor(Math.random() * (max - min) + min)}

function getRandom(anyArray){
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
};
