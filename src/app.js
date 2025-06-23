import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
    const pronoun = ['the', 'my', 'our', 'your'];
    const adjective = ['fuzzy', 'clean', 'crazy', 'smelly'];
    const noun = ['mother', 'capibara', 'robot', 'coffee'];
    const extension = ['.com', '.net', '.shop'];

    const btn = document.getElementById('btnGenerar');
    const output = document.getElementById('ContenedorDominios');

    btn.addEventListener('click', () => {
      let resultados = '';

      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adjective.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
              const dominio = pronoun[i] + adjective[j] + noun[k] + extension[l];
              resultados += `<div>${dominio}</div>`;
            }
          }
        }
      }

      output.innerHTML = resultados;
    });
  };
