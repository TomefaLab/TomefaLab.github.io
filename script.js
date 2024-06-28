document.body.style.overflow = "hidden";
//Créer une variable contenant une instance du charment et son conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    //Faire fondre le chargement et son conteneur !
    loaderContainer.classList.add("fonduOut");
    //Faire disparaitre le chargment et son conteneur à la fin du fondu de ces dernuiers ( soit 400ms) !
    setTimeout(() => {
        loaderContainer.classList.add("hidden");
    }, 400);
});