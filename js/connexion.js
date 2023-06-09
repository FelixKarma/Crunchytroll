const formulairelogin = document.getElementById("formulairelogin");
const messagealert = document.getElementById("messagealert");
    let formlogin = document.getElementById('formulairelogin')
let mdpoublie = document.getElementById('mdpoublie')
let formulairemdpoublie = document.getElementById('formulairemdpoublie')
let textmdpoublie = document.getElementById('textmdpoublie')

if(document.location.href.includes("connexion.html")){

mdpoublie.addEventListener("click", () => {
        formlogin.style.display = 'none';
        mdpoublie.style.display = 'none';
        formulairemdpoublie.style.display = 'block';
})
    formulairelogin.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (checkLogin(username, password)) {
            localStorage.setItem("login", "true");
            localStorage.setItem("username", username);
            messagealert.textContent = "Connexion réussie ! Redirection...";
            setTimeout(function() {
                window.location.href = "Accueil.html";
            }, 2000);
        } else {
            messagealert.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        }
    });
}

function checkLogin(username, password) {
    return (username === localStorage.getItem('bonusername') && password === localStorage.getItem('bonmdp'));
}



function deconnexion(){
localStorage.removeItem('login')
setTimeout(function() {
    window.location.href = "Accueil.html";
}, 2000);
}



const submitbutton = document.getElementById("submitbutton");
if(document.location.href.includes("enregistrer.html")){
    document.addEventListener("DOMContentLoaded", function() {
        // Votre code ici
        submitbutton.addEventListener("click", function () {
            const usernom = document.getElementById("nom").value;
            const cpassword = document.getElementById("cpassword").value;
            const confirmpassword = document.getElementById("confirmpassword").value;
            if(cpassword == confirmpassword){
                localStorage.setItem('bonusername', usernom);
                localStorage.setItem('bonmdp', cpassword);
                document.location.assign("connexion.html")
                console.log("object");      
            }
            else{
                erreurmsg.innerText = "Mot de passe différent";
                return false;
            }
        });
    });
};



let table = document.getElementById('menu')
let seconnecter = document.getElementById('menu')
if(localStorage.getItem('login') == 'true'){
    table.innerHTML= `<table id="profiltable">
    <tr>
        <td><img src="../img/profil picture.jpg" id="profilpicture"></td>
        <td>${localStorage.getItem('bonusername')}</td>
    </tr>
    <tr>
        <td><a href="profil.html" class="notexthref"> <img src="../img/Vector (1).png" class="taillephoto"
                    alt=""> </a></td>
        <td ><a href="profil.html" id="monprofilbtn" class="notexthref">Mon profil</a></td>
    </tr>
    <tr>
        <td><a href="favoris.html"><img src="../img/Vector (2).png" class="taillephoto" alt=""></a></td>
        <td><a href="favoris.html" id="favorisbtn">Favoris</a></td>
    </tr>
    <tr>
        <td> <a href="profil.html" class="notexthref"><img src="../img/Vector (3).png" class="taillephoto"
                    alt=""></a></td>
        <td> <a href="profil.html" class="notexthref" id="parametrebtn">Paramètres</a></td>
    </tr>
    <tr>
        <td><img src="../img/ic_baseline-log-out.png" class="taillephoto" alt=""></td>
        <td><button class="deconnexion" onclick="deconnexion()" id="decobtn">Déconnexion</button></td>
    </tr>
</table>`
  }
else{
    seconnecter.innerHTML = `<a class="secobutton" href="connexion.html" id="secobutton">Se connecter</a>
    <a class="sincrire" href="enregistrer.html" id="sinscrire">S'inscrire</a>`
}
