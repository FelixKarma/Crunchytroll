const langue = document.getElementById("langue");
const frLangue = document.getElementById("btnfrLangue");
const enLangue = document.getElementById("btnenLangue");
const ruLangue = document.getElementById("btnruLangue");

let visible = 0;
langue.addEventListener("click", () => {
    if(visible%2){
        frLangue.style.visibility = 'hidden';
        enLangue.style.visibility = 'hidden';
        ruLangue.style.visibility = 'hidden';
    } else {
        frLangue.style.visibility = 'visible';
        enLangue.style.visibility = 'visible';
        ruLangue.style.visibility = 'visible';
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
        document.title.innerText = 'Mon Compte';
    } else {
        monCompte.style.display = 'none';
        principal.style.display = 'block';
        document.title.innerText = 'Mon Profil';
    }
    
})

btnParametre.addEventListener("click", () => {
    if(parametres.style.display != 'block'){
        parametres.style.display = 'block';
        principal.style.display = 'none';
        monCompte.style.display = 'none';
        document.title.innerText = 'Paramètres';
    } else {
        parametres.style.display = 'none';
        principal.style.display = 'block';
        document.title.innerText = 'Mon Profil';
    }
    
})