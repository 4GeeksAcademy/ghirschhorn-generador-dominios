import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'my', 'our', 'your'];
  let adjective = ['fuzzy', 'clean', 'crazy', 'smelly'];
  let noun = ['mother', 'capibara', 'robot', 'coffee'];
  let extention = ['com', 'es', 'ar', 'net'];


  function generateDom() {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomExtention = extention[Math.floor(Math.random() * extention.length)];
    return `${randomPronoun}${randomAdjective}${randomNoun}.${randomExtention}`;
  }

  console.log(generateDom());
}
