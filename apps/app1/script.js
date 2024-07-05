//Calcul du poids module !
var calculPoids = document.querySelector(".calculPoids");
//Ecouter le click du calcul du poids !
calculPoids.addEventListener("click",(e)=>{
var masse = prompt("Entrez la valeur de la masse ! ");
var gravite = prompt("Entrez la valeur de la gravité !");

//Calcul du poids !

var poids = masse * gravite;

//Afficher la valeur du poids !

alert(" La valeur du poids est : "+poids+" N");
});
//Calcul de la masse module !
var calculMasse = document.querySelector(".calculMasse");
//Ecouter le click du calcul du poids !
calculMasse.addEventListener("click",(e)=>{
var poids = prompt("Entrez la valeur de la poids ! ");
var gravite = prompt("Entrez la valeur de la gravité !");

//Calcul du poids !

var masse = poids / gravite;

//Afficher la valeur du poids !

alert(" La valeur de la masse est : "+masse+ " Kg");
});

//Calcul de la gravité module !
var calculGravite = document.querySelector(".calculGravite");
//Ecouter le click du calcul du poids !
calculGravite.addEventListener("click",(e)=>{
var poids = prompt("Entrez la valeur de la poids ! ");
var masse = prompt("Entrez la valeur de la masse !");

//Calcul du poids !

var gravite = poids / masse;

//Afficher la valeur du poids !

alert(" La valeur de la gravité est : "+gravite+ " N/Kg");
});