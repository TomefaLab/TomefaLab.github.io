//Désactiver le scroll de la page bien avant meme son chargement !
document.body.style.overflow = "hidden";
//Créer une instance du loader et son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le chargement et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Masquer le loader et son conteneur juste après son fondu !
    setTimeout(() => {
        loaderContainer.classList.add("hidden");
    }, 400);
});