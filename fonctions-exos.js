
/**
   * -------------------------------------------------------
   * 1 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de ces 2 paramètres. Afficher le résultat dans la console.
   * -------------------------------------------------------
*/
function sum(a,b){
   return a+b;
}
console.log(sum(1,2));

/**
   * -------------------------------------------------------
   * 2 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de :
   *  → la raçine carrée du premier paramètres
   *  → le second paramètre à la puissance 7
   *  Afficher le résultat dans la console.
   * -------------------------------------------------------
*/
function sum2(c,d){
 return(Math.sqrt(c) + Math.pow(d,7))
}

console.log(sum2(4,1));

/**
   * -------------------------------------------------------
   * 3 - Créer une fonction qui vérifie si l’utilisateur est apte à apprendre du Javascript : 
    avec prompt, demander successivement à l’utilisateur les deux langages de programmation à apprendre avant de démarrer le JS
    → S’il répond successivement HTML puis CSS, alors la fonction retourne vrai ; sinon faux.
    → Si l’exécution de la fonction retourne vrai, alors la console affiche “Bienvenue en JS jeune éphèbe”
    → Si l’exécution de la fonction retourne faux, alors la console affiche “Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais”
   * -------------------------------------------------------
*/

let firstlanguage=prompt("first programming language?");
let secondlanguage=prompt("second programming language?");

function bool(l1,l2) {
   if (l1==="HTML" && l2==="CSS"){
      return (true);
   
   }
      
   else { return(false)}
}


bool(firstlanguage,secondlanguage)===true ? console.log("Bienvenue en JS jeune éphébe") : console.log("Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais"); 