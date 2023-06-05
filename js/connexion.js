const formulairelogin = document.getElementById("formulairelogin");
const messagealert = document.getElementById("messagealert");

if(document.location.href.includes("connexion.html")){
    
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
function deconnexion(){
localStorage.removeItem('login')
setTimeout(function() {
    window.location.href = "Accueil.html";
}, 2000);
}


function checkLogin(username, password) {
    return (username === "Karmas" && password === "Akabane");
}
let table = document.getElementById('menu')
let seconnecter = document.getElementById('menu')
if(localStorage.getItem('login') == 'true'){
    table.innerHTML= `<table id="profiltable">
    <tr>
        <td><img src="../img/profil picture.jpg" id="profilpicture"></td>
        <td>Karmas</td>
    </tr>
    <tr>
        <td><a href="profil.html" class="notexthref"> <img src="../img/Vector (1).png" class="taillephoto"
                    alt=""> </a></td>
        <td><a href="profil.html" class="notexthref">Mon profil</a></td>
    </tr>
    <tr>
        <td><a href="favoris.html"><img src="../img/Vector (2).png" class="taillephoto" alt=""></a></td>
        <td><a href="favoris.html">Favoris</a></td>
    </tr>
    <tr>
        <td> <a href="profil.html" class="notexthref"><img src="../img/Vector (3).png" class="taillephoto"
                    alt=""></a></td>
        <td> <a href="profil.html" class="notexthref">Paramètres</a></td>
    </tr>
    <tr>
        <td><img src="../img/ic_baseline-log-out.png" class="taillephoto" alt=""></td>
        <td><button class="deconnexion" onclick="deconnexion()">Déconnexion</button></td>
    </tr>
</table>`
  }
else{
    seconnecter.innerHTML = `<a class="secobutton" href="connexion.html">Se connecter</a>`
}