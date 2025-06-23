import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['the', 'my', 'our', 'your'];

  let adjective = ['fuzzy', 'clean', 'crazy', 'smelly'];

  let noun = ['mother', 'capibara', 'robot', 'coffee'];

  let extension = ['.com', '.net', '.shop', '.ar']


  for (let i = 0; i < pronoun.length; i++) {

    for (let j = 0; j < adjective.length; j++) {

      for (let k = 0; k < noun.length; k++) {

        for (let l = 0; l < extension.length; l++) {

          const ranDom = pronoun[i] + adjective[j] + noun[k] + extension[l];

          console.log(ranDom);

        }

      }

    }

  }

}


