//Importer le chargemente ts on conteneur !
const loaderContainer = document.querySelector(".loaderContainer");
//Faire disparaitre le loader une fois la page complètement chargée !
window.addEventListener("load",(e)=>{
    loaderContainer.classList.add("fonduOut");
    setTimeout((e) => {
        loaderContainer.classList.add("hidden");
    }, 400);
});