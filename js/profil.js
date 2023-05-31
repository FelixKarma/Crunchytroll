const langue = document.getElementById("langue");
const frLangue = document.getElementById("frLangue");

let visible = 0;
langue.addEventListener("click", () => {
    if(visible%2){
        frLangue.style.visibility = 'hidden';
    } else {
        frLangue.style.visibility = 'visible';
    }
    visible++;
})


const principal = document.getElementById("principal");
const monCompte = document.getElementById("monCompte");
const btnMonCompte = document.getElementById("btnMonCompte");
const parametres = document.getElementById("parametres");
const btnParametre = document.getElementById("btnParametre");

btnMonCompte.addEventListener("click", () => {
    if(monCompte.style.display != 'block'){
        monCompte.style.display = 'block';
        principal.style.display = 'none';
        parametres.style.display = 'none';
    } else {
        monCompte.style.display = 'none';
        principal.style.display = 'block';
    }
    
})

btnParametre.addEventListener("click", () => {
    if(parametres.style.display != 'block'){
        parametres.style.display = 'block';
        principal.style.display = 'none';
        monCompte.style.display = 'none';
    } else {
        parametres.style.display = 'none';
        principal.style.display = 'block';
    }
    
})