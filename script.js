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