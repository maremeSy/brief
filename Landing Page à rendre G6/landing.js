document.getElementById("formulaire").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let nom = document.getElementById("name");
    let email = document.getElementById("email");
    let telephone = document.getElementById("number");

if (!nom.value) {
    erreur = "Veuillez saisir un nom";
}
if (!email.value) {
    erreur = "Veuillez saisir un email";
}
if (!telephone.value) {
    erreur = "Veuillez saisir un numéro de téléphone";
}
if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Demande envoyée! Un créneau vous sera envoyé par email. A bientôt à la Basse Cour Royale!");
}

});