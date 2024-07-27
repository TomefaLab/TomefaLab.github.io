//Désactiver le scroll de la page au début !
document.body.style.overflow = "hidden";
//Créer une instance du chargemente et son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader uen fois la page complètelment chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le chargement et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Faire disparaitre le chargemente t son conteneur !
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
    }, 400);
});