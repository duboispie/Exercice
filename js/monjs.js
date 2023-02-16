
let nombre = 0;

function init(){
    document.querySelector("#bouton").addEventListener("mouseover", hover);
    document.querySelector("#bouton").addEventListener("click", action);
    document.querySelector("#bouton").addEventListener("mouseout", out);
}

function hover(){
    document.querySelector("#bouton").setAttribute("src", "images/bouton_plus_hover.png");
}

function out(){
    document.querySelector("#bouton").setAttribute("src", "images/bouton_plus.png");
}

function action(){
    nombre += 1;

    document.querySelector("#nombre").textContent = nombre;
}