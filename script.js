//Créer une instance du chargement et son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le chargement et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Masquer le chargement et son conteneur après 400ms !
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
        //Activer le défilement !
        loaderContainer.style.overflow = "none";
    }, 400);
});