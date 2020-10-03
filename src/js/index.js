/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  ///Button///
  var button = document.createElement("button");
  button.innerHTML = "Generate";
  button.style =
    "border-radius: 25px; padding:1px; font-size: 40px; box-shadow: 7px 7px 15px ";
  button.style.background = "blue";
  var div = document.querySelector("div");
  div.appendChild(button);
  button.addEventListener("click", function() {
    button.style.background = "green";
    generateDomain();
  });
  //// Creador de el <ul>////
  var list = document.createElement("p");
  div.appendChild(list);
};
///Combinaciones de dominios///
let generateDomain = () => {
  var pronoun = ["a", "all"];
  var adj = ["small", "big"];
  var noun = ["dog", "cat"];
  var com = [".com", ".net", ".us"];
  ////Nested for loop////
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < com.length; z++) {
          document.querySelector("p").innerHTML +=
            "<p>" + pronoun[i] + adj[x] + noun[y] + com[z] + "</p>";
        }
      }
    }
  }
};
