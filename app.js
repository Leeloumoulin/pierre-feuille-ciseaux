// varialbes globales : 
let choixJoueur, choixOrdi, nombreOrdi
// le joueur choisi entre pierre feuille et ciseau : 
function JoueurJoue() {
    // Role : permet au joueur de saisir son choix
    // parametre : aucun
    // retour le choix de l'utilisateur
    return prompt("Choisissez entre pierre , feuille, ou ciseau")
}

// Ordinateur choisis entre pierre (1) feuille (2), ciseau(3)
function OrdiJoue() {
    // Role : tire aléatoirement un nombre entier entre 1 et 3 
    // parametre: aucun 
    // retour: le nombre aleatoire entre 1 et 3
    return Math.ceil(Math.random() * 3)
}


// associer le nombre a un texte pour pouvoir comparer
function associer() {
    // Role: Associe le nombre tiré au sort a une valeur de texte
    // Ordinateur choisis entre pierre (1) feuille (2), ciseau(3)
    // parametres: aucun
    // retour le choix de l'ordinateur (chaine de caractere)
    if (nombreOrdi == 1) {
        return choixOrdi = "pierre"
    } else if (nombreOrdi == 2) {
        return choixOrdi = "feuille"
    } else if (nombreOrdi == 3) {
        return choixOrdi = "ciseau"
    }
}

// Il  ya égalité si le joueur a joué la meme chose que l'ordi
// Le joueur gagne dans les cas suivant :
// si le joueur a joué ciseau ET que le ordi a joué feuille
// OU le joueur a joué pierre ET l'ordi a joué Ciseau
// OU le joueur a joué feuille ET l'ordi a joué Pierre
// dans les autres cas c'est l'ordi qui gagne 

function compare() {
    // Role : compare le choix du joueur et de l'ordi
    // parametres: aucun
    // retour: le nom du gagnant (ou égalité)
    if (choixJoueur === choixOrdi) {
        return "égalité"
    } else if ((choixJoueur == "ciseau" && choixOrdi == "feuille") ||
        (choixJoueur == "pierre" && choixOrdi == "ciseau") ||
        (choixJoueur = "feuille" && choixOrdi == "pierre")) {
        return "joueur "
    } else {
       return "ordinateur"
    }
}


function afficheLeGagnant(gag){
    // Role afficher le gagnant et les choix du joueur et de l'ordi dans une popup
    // parametre : le gagnant 
    // retour: aucun
    if(gag == "égalité"){
        document.getElementById("resul").innerHTML = `choix du joueur : ${choixJoueur} \n choix de l'ordi :${choixOrdi} \n Egalité !`
    }else{
        document.getElementById("resul").innerHTML = `choix du joueur : ${choixJoueur} \n choix de l'ordi :${choixOrdi}\n\n ${gag} gagne`
    } 
}


function jouer(choix) {
    choixJoueur = choix; 
    nombreOrdi = OrdiJoue(); 
    associer(); 
    let gagnant = compare(); 
    afficheLeGagnant(gagnant); 
}



