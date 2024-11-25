// créer 3 variables contenant pierre papier et ciseaux 
// prompt pour choisir ce qu'on joue et y stocker dans une var
// L'ordinateur choisi à son tour : math.ceil et math.random et y stocker dans une var
// les conditions / comparer le choix du joueur et celui de l'ordi
// Afficher les choix, le résultat et le gagnant en alerte

//4 fonctions : choix joueur - choix ordi - comparer - afficher 
//1 fonction qui lance les autres fonctions : lancement


const pierre = 1
const papier = 2
const ciseaux = 3

//rôle: stocker le choix du joueur
//paramètres : valeur choisie
//retour : choix
function CJ(){
        return prompt(question);
}
let question = "Choisissez entre pierre(1), papier(2) et ciseaux(3) : "

//rôle : stocker le choix de l'ordi
//paramètres : //
//retour : choix
function CO(){
        return Math.ceil(Math.random()*3)
}

//rôle : Comparer le choix de l'ordi et le choix du joueur avec des conditions 
//paramètres : choix joueur et choix ordi
//retour : le résultat de la comparaison
/*
si choix joueur === choix ordi -> égalité
sinon si :
choix joueur == ciseaux ET  choix ordi === feuille OU 
choix joueur == feuille ET  choix ordi === cailloux OU
choix joueur == cailloux ET  choix ordi === ciseaux  OU   -> Joueur gagne
Sinon -> ordi gagne */

function compare(CO,CJ){
    let result = ""

    if(CO==CJ){
         result = "égalité"
    }else if((CJ == 3 && CO == 2) || (CJ == 2 && CO == 1) || (CJ == 1 && CO == 3)){
         result = "Joueur gagne"
    }else{
         result = "L'ordi gagne"
    }
    return result
}
//rôle : resultat
//paramètres : choix ordi et choix joueur
//retour : Afficher la comparaison 


function afficher(CO,CJ, result){
        alert(`Le joueur a choisi ${CJ} || l'ordinateur a choisi ${CO}. ${result}`)
}


//rôle : lancer les autres fonctions dans l'ordre
// par : //
//retour : //

function jouer(){
    let choixJoueur=CJ()
    let choixOrdinateur=CO()
    let resultat= compare(choixOrdinateur, choixJoueur)
    afficher(choixOrdinateur, choixJoueur, resultat)
}