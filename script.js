//Instancier le conteneur du chargement !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaître le loader et son conteneur une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Fondu effectif du loader et son conteneur !
    loaderContainer.classList.add("fonduOut");
    setTimeout(() => {
        //Masquage effectif du loader et son conteneur !
        loaderContainer.classList.add("hidden");
    }, 400);
});
//Tableau des Timbres et Sonorités!
var timbres = 
[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
// Drum Pad 0!
const drum0 = document.querySelector(".drum0");
var audio0 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 0!
drum0.addEventListener("click",(e)=>{
    audio0.src = timbres[0];
    audio0.play();
});
// Drum Pad 1!
const drum1 = document.querySelector(".drum1");
var audio1 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 1!
drum1.addEventListener("click",(e)=>{
    audio1.src = timbres[1];
    audio1.play();
});
// Drum Pad 2!
const drum2 = document.querySelector(".drum2");
var audio2 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 2!
drum2.addEventListener("click",(e)=>{
    audio2.src = timbres[2];
    audio2.play();
});
// Drum Pad 3!
const drum3 = document.querySelector(".drum3");
var audio3 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 3!
drum3.addEventListener("click",(e)=>{
    audio3.src = timbres[3];
    audio3.play();
});
// Drum Pad 4!
const drum4 = document.querySelector(".drum4");
var audio4 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 4!
drum4.addEventListener("click",(e)=>{
    audio4.src = timbres[4];
    audio4.play();
});
// Drum Pad 5!
const drum5 = document.querySelector(".drum5");
var audio5 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 5!
drum5.addEventListener("click",(e)=>{
    audio5.src = timbres[5];
    audio5.play();
});
// Drum Pad 6!
const drum6 = document.querySelector(".drum6");
var audio6 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 6!
drum6.addEventListener("click",(e)=>{
    audio6.src = timbres[6];
    audio6.play();
});
// Drum Pad 7!
const drum7 = document.querySelector(".drum7");
var audio7 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 7!
drum7.addEventListener("click",(e)=>{
    audio7.src = timbres[7];
    audio7.play();
});
// Drum Pad 8!
const drum8 = document.querySelector(".drum8");
var audio8 = new Audio();
//On Ajoute un écouteur d'évènement click au drum 8!
drum8.addEventListener("click",(e)=>{
    audio8.src = timbres[8];
    audio8.play();
});