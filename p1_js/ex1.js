function direBonjour() {
  document.getElementById("message").textContent =
    "Bonjour ! Bienvenue sur ma page.";
}
function afficherDate() {
  var maintenant = new Date();
  var texte =
    "Nous sommes le " +
    maintenant.toLocaleDateString() +
    " et il est " +
    maintenant.toLocaleTimeString() +
    ".";
  document.getElementById("message").textContent = texte;
}
function changerCouleur() {
  var couleurs = ["#ffeaa7", "#fab1a0", "#81ecec", "#a29bfe", "#b2f2bb"];
  var indice = Math.floor(Math.random() * couleurs.length);
  document.body.style.backgroundColor = couleurs[indice];
  document.getElementById("message").textContent =
    "Nouvelle couleur de fond : " + couleurs[indice];
}
function nombreAleatoire() {
  var nombre = Math.floor(Math.random() * 100) + 1;
  document.getElementById("message").textContent =
    "Votre nombre aléatoire est : " + nombre;
}
function effacer() {
  document.getElementById("message").textContent = "";
}
function verifierAge() {
  let n1 = prompt("Donnez votre âge : ");

  if (n1 < 18) {
    document.write("Vous êtes mineur");
    document.body.style.backgroundColor = "red";
  } else {
    document.write("Vous êtes majeur");
    document.body.style.backgroundColor = "green";
  }
}
function notes() {
  let note1 = prompt("Entrez la première note : ");
  let note2 = prompt("Entrez la deuxième note : ");
  let note3 = prompt("Entrez la troisième note : ");

  let moyenne = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3)) / 3;

  document.getElementById("message").textContent =
    "Votre moyenne est : " + moyenne.toFixed(2);
}
