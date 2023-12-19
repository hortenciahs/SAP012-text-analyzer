import analyzer from './analyzer.js';
const input = document.querySelector("#user-input");
const counter = document.querySelector(".counter");
const togglebutton = document.querySelector("reset-button");
var elemento = document.getElementById("character-count");

let mode = "character-count";

input.addEventListener("user-input"), () => {

    let count = 0;
    if(mode === "character-count") {

        const count = input;
    
        counter.textContent = `${count} character-count;`

           
    }

    else {

    }
}
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`